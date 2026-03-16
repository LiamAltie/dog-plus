"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

// ── 型定義 ──
interface FormData {
  businessName: string;
  ownerName: string;
  phone: string;
  email: string;
  address: string;
  services: string[];
  servicesOther: string;
  targetDogs: string;
  openingHours: string;
  pricing: string;
  strengths: string;
  facilityFeatures: string;
  staffInfo: string;
  currentCustomers: string;
  idealCustomers: string;
  customerConcerns: string;
  // 比較選択（1〜5のスライダー値、3が中間）
  compareWarmPro: number;       // 温かみ ←→ プロフェッショナル
  compareSimpleRich: number;    // シンプル ←→ 情報量多め
  comparePopCalm: number;       // ポップ ←→ 落ち着き
  comparePhotoText: number;     // 写真メイン ←→ 文章メイン
  // サイト比較の好み
  sitePreferences: Record<string, string>;
  websitePurpose: string[];
  existingSns: string;
  hasPhotos: string;
  hasLogo: string;
  additionalNotes: string;
}

const initialFormData: FormData = {
  businessName: "",
  ownerName: "",
  phone: "",
  email: "",
  address: "",
  services: [],
  servicesOther: "",
  targetDogs: "",
  openingHours: "",
  pricing: "",
  strengths: "",
  facilityFeatures: "",
  staffInfo: "",
  currentCustomers: "",
  idealCustomers: "",
  customerConcerns: "",
  compareWarmPro: 3,
  compareSimpleRich: 3,
  comparePopCalm: 3,
  comparePhotoText: 3,
  sitePreferences: {},
  websitePurpose: [],
  existingSns: "",
  hasPhotos: "",
  hasLogo: "",
  additionalNotes: "",
};

const serviceOptions = [
  "日中お預かり（保育園）",
  "一時預かり",
  "宿泊（ペットホテル）",
  "トリミング",
  "しつけ教室・トレーニング",
  "送迎サービス",
  "その他",
];

const purposeOptions = [
  "新規のお客様を増やしたい",
  "サービス内容を詳しく伝えたい",
  "お店の雰囲気や安心感を伝えたい",
  "予約や問い合わせを受け付けたい",
  "SNSと連携したい",
  "その他",
];

// ── サイト比較データ ──
const siteComparisons = [
  {
    id: "warm-vs-luxury",
    question: "どちらの雰囲気がイメージに近いですか？",
    siteA: {
      name: "ボンパピ",
      image: "/references/bonnepuppy.jpg",
      description: "親しみやすい・ポップ・楽しい雰囲気",
    },
    siteB: {
      name: "THE ケネルズ東京",
      image: "/references/kennels-tokyo.jpg",
      description: "高級感・落ち着き・ホテルのような雰囲気",
    },
  },
  {
    id: "handmade-vs-corporate",
    question: "お店の規模感として近いのは？",
    siteA: {
      name: "さくらっく",
      image: "/references/sakuluck.jpg",
      description: "地域密着・アットホーム・手作り感",
    },
    siteB: {
      name: "ドッグライフプランナーズ",
      image: "/references/dog-lp.jpg",
      description: "多店舗展開・実績重視・信頼感",
    },
  },
];

// ── 共通コンポーネント ──
function SectionTitle({ number, title, subtitle }: { number: number; title: string; subtitle?: string }) {
  return (
    <div className="mb-6 mt-10 first:mt-0">
      <div className="flex items-center gap-3">
        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white text-sm font-bold shrink-0">
          {number}
        </span>
        <h2 className="text-lg font-bold text-primary-dark">{title}</h2>
      </div>
      {subtitle && <p className="text-xs text-gray-400 mt-2 ml-11">{subtitle}</p>}
    </div>
  );
}

function Label({ children, required }: { children: React.ReactNode; required?: boolean }) {
  return (
    <label className="block text-sm font-medium mb-1.5">
      {children}
      {required && <span className="ml-1 text-xs text-red-500 font-normal">*必須</span>}
    </label>
  );
}

function TextInput({ value, onChange, placeholder, type = "text" }: {
  value: string; onChange: (v: string) => void; placeholder?: string; type?: string;
}) {
  return (
    <input type={type} value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder}
      className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition text-sm" />
  );
}

function TextArea({ value, onChange, placeholder, rows = 3 }: {
  value: string; onChange: (v: string) => void; placeholder?: string; rows?: number;
}) {
  return (
    <textarea value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder} rows={rows}
      className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition text-sm resize-y" />
  );
}

function CheckboxGroup({ options, selected, onChange }: {
  options: string[]; selected: string[]; onChange: (v: string[]) => void;
}) {
  const toggle = (option: string) => {
    if (selected.includes(option)) {
      onChange(selected.filter((s) => s !== option));
    } else {
      onChange([...selected, option]);
    }
  };
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
      {options.map((option) => (
        <label key={option} className="flex items-center gap-2 px-3 py-2 rounded-lg border border-gray-200 hover:border-primary/40 cursor-pointer transition text-sm">
          <input type="checkbox" checked={selected.includes(option)} onChange={() => toggle(option)}
            className="w-4 h-4 rounded text-primary accent-primary" />
          {option}
        </label>
      ))}
    </div>
  );
}

// ── スライダーコンポーネント ──
function CompareSlider({ labelLeft, labelRight, value, onChange }: {
  labelLeft: string; labelRight: string; value: number; onChange: (v: number) => void;
}) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between text-xs text-gray-500">
        <span className={value <= 2 ? "font-bold text-primary-dark" : ""}>{labelLeft}</span>
        <span className={value >= 4 ? "font-bold text-primary-dark" : ""}>{labelRight}</span>
      </div>
      <input
        type="range" min={1} max={5} step={1} value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary"
      />
      <div className="flex justify-between text-[10px] text-gray-300 px-1">
        {["←寄り", "", "どちらでも", "", "寄り→"].map((t, i) => <span key={i}>{t}</span>)}
      </div>
    </div>
  );
}

// ── サイト比較コンポーネント ──
function SiteComparison({ comparison, selected, onSelect }: {
  comparison: typeof siteComparisons[0];
  selected: string;
  onSelect: (v: string) => void;
}) {
  return (
    <div className="space-y-3">
      <p className="text-sm font-medium">{comparison.question}</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {[comparison.siteA, comparison.siteB].map((site, i) => {
          const value = i === 0 ? "A" : "B";
          const isSelected = selected === value;
          return (
            <button key={value} type="button" onClick={() => onSelect(isSelected ? "" : value)}
              className={`rounded-xl border-2 overflow-hidden text-left transition ${isSelected ? "border-primary shadow-md" : "border-gray-200 hover:border-primary/40"}`}
            >
              <div className="relative w-full aspect-video">
                <Image src={site.image} alt={site.name} fill className="object-cover object-top" sizes="(max-width: 640px) 100vw, 50vw" />
                {isSelected && (
                  <div className="absolute top-2 right-2 w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                )}
              </div>
              <div className="p-3">
                <p className="text-sm font-bold">{site.name}</p>
                <p className="text-xs text-gray-500 mt-0.5">{site.description}</p>
              </div>
            </button>
          );
        })}
      </div>
      <button type="button"
        onClick={() => onSelect("both")}
        className={`w-full text-xs py-2 rounded-lg border transition ${selected === "both" ? "border-primary bg-primary/5 text-primary-dark font-bold" : "border-gray-200 text-gray-400 hover:border-primary/40"}`}
      >
        どちらの要素も取り入れたい
      </button>
    </div>
  );
}

// ── メインコンポーネント ──
export default function HearingPage() {
  const [form, setForm] = useState<FormData>(initialFormData);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const update = <K extends keyof FormData>(key: K, value: FormData[K]) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const updateSitePref = (id: string, value: string) => {
    setForm((prev) => ({
      ...prev,
      sitePreferences: { ...prev.sitePreferences, [id]: value },
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.businessName || !form.ownerName) {
      setError("店舗名とお名前は必須です。");
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    setError("");
    setSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("送信に失敗しました");
      router.push("/thanks");
    } catch {
      setError("送信に失敗しました。もう一度お試しください。");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen py-8 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-primary-dark mb-2">
            ホームページ制作 ヒアリングシート
          </h1>
          <p className="text-sm text-gray-500 leading-relaxed">
            DOG PLUS さまのホームページを制作するにあたり、
            <br className="hidden sm:block" />
            いくつかお聞かせください。
            <br />
            <span className="text-primary font-medium">わかる範囲・感覚的なお答えで大丈夫です。</span>
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">

          {/* ── セクション1: 基本情報 ── */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <SectionTitle number={1} title="基本情報" />
            <div className="space-y-4">
              <div>
                <Label required>店舗名・屋号</Label>
                <TextInput value={form.businessName} onChange={(v) => update("businessName", v)} placeholder="例: DOG PLUS" />
              </div>
              <div>
                <Label required>ご担当者名</Label>
                <TextInput value={form.ownerName} onChange={(v) => update("ownerName", v)} placeholder="例: 山田 太郎" />
              </div>
              <div>
                <Label>お電話番号</Label>
                <TextInput value={form.phone} onChange={(v) => update("phone", v)} placeholder="例: 090-1234-5678" type="tel" />
              </div>
              <div>
                <Label>メールアドレス</Label>
                <TextInput value={form.email} onChange={(v) => update("email", v)} placeholder="例: info@dogplus.jp" type="email" />
              </div>
              <div>
                <Label>店舗所在地</Label>
                <TextInput value={form.address} onChange={(v) => update("address", v)} placeholder="例: 東京都渋谷区..." />
              </div>
            </div>
          </div>

          {/* ── セクション2: サービス内容 ── */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <SectionTitle number={2} title="サービス内容" />
            <div className="space-y-4">
              <div>
                <Label>提供しているサービス（複数選択可）</Label>
                <CheckboxGroup options={serviceOptions} selected={form.services} onChange={(v) => update("services", v)} />
                {form.services.includes("その他") && (
                  <div className="mt-2">
                    <TextInput value={form.servicesOther} onChange={(v) => update("servicesOther", v)} placeholder="その他のサービスを入力" />
                  </div>
                )}
              </div>
              <div>
                <Label>対象の犬種・サイズ</Label>
                <TextInput value={form.targetDogs} onChange={(v) => update("targetDogs", v)} placeholder="例: 小型犬〜中型犬、全犬種OK など" />
              </div>
              <div>
                <Label>営業時間・定休日</Label>
                <TextInput value={form.openingHours} onChange={(v) => update("openingHours", v)} placeholder="例: 平日 8:00-19:00、水曜定休" />
              </div>
              <div>
                <Label>料金体系</Label>
                <TextArea value={form.pricing} onChange={(v) => update("pricing", v)}
                  placeholder="例: 日中預かり 1日 ¥3,500〜、月額プランあり など&#10;ざっくりで大丈夫です" />
              </div>
            </div>
          </div>

          {/* ── セクション3: お店の強み ── */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <SectionTitle number={3} title="お店の強み・こだわり"
              subtitle="お客様に一番伝えたいことを教えてください" />
            <div className="space-y-4">
              <div>
                <Label>お店の強み・他のお店との違い</Label>
                <TextArea value={form.strengths} onChange={(v) => update("strengths", v)}
                  placeholder="例: 少人数制で一頭一頭に目が届く、ドッグトレーナーが常駐 など&#10;思いつくままで大丈夫です" rows={4} />
              </div>
              <div>
                <Label>施設の特徴</Label>
                <TextArea value={form.facilityFeatures} onChange={(v) => update("facilityFeatures", v)}
                  placeholder="例: 室内ドッグラン、広い庭、カメラで様子が見られる など" />
              </div>
              <div>
                <Label>スタッフについて</Label>
                <TextArea value={form.staffInfo} onChange={(v) => update("staffInfo", v)}
                  placeholder="例: 資格保持者がいる、スタッフ3名 など" />
              </div>
            </div>
          </div>

          {/* ── セクション4: お客様について ── */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <SectionTitle number={4} title="お客様について" />
            <div className="space-y-4">
              <div>
                <Label>今来てくださっているお客様</Label>
                <TextArea value={form.currentCustomers} onChange={(v) => update("currentCustomers", v)}
                  placeholder="例: 近所の共働きのご夫婦が多い、一人暮らしの方 など" />
              </div>
              <div>
                <Label>今後増やしたいお客様像</Label>
                <TextArea value={form.idealCustomers} onChange={(v) => update("idealCustomers", v)}
                  placeholder="例: 初めて犬を飼う方、リピーターを増やしたい など" />
              </div>
              <div>
                <Label>お客様からよく聞かれること</Label>
                <TextArea value={form.customerConcerns} onChange={(v) => update("customerConcerns", v)}
                  placeholder="例: 他の犬と仲良くできる？、急な預かりはできる？ など" rows={4} />
              </div>
            </div>
          </div>

          {/* ── セクション5: デザインの好み（比較選択） ── */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <SectionTitle number={5} title="ホームページの雰囲気"
              subtitle="同業のサイトを2つお見せします。直感でお選びください" />

            <div className="space-y-8">
              {siteComparisons.map((comp) => (
                <SiteComparison
                  key={comp.id}
                  comparison={comp}
                  selected={form.sitePreferences[comp.id] || ""}
                  onSelect={(v) => updateSitePref(comp.id, v)}
                />
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-gray-100">
              <p className="text-sm font-medium mb-4">
                もう少し細かく教えてください（スライダーを動かすだけでOK）
              </p>
              <div className="space-y-6">
                <CompareSlider labelLeft="温かみ・親しみやすい" labelRight="プロフェッショナル・高級感"
                  value={form.compareWarmPro} onChange={(v) => update("compareWarmPro", v)} />
                <CompareSlider labelLeft="シンプル・すっきり" labelRight="情報量多め・にぎやか"
                  value={form.compareSimpleRich} onChange={(v) => update("compareSimpleRich", v)} />
                <CompareSlider labelLeft="ポップ・カラフル" labelRight="落ち着き・ナチュラル"
                  value={form.comparePopCalm} onChange={(v) => update("comparePopCalm", v)} />
                <CompareSlider labelLeft="写真をたくさん見せたい" labelRight="説明文をしっかり載せたい"
                  value={form.comparePhotoText} onChange={(v) => update("comparePhotoText", v)} />
              </div>
            </div>
          </div>

          {/* ── セクション6: ホームページの目的 ── */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <SectionTitle number={6} title="ホームページでやりたいこと"
              subtitle="あてはまるものを選んでください（複数OK）" />
            <div className="space-y-4">
              <CheckboxGroup options={purposeOptions} selected={form.websitePurpose} onChange={(v) => update("websitePurpose", v)} />
              <div>
                <Label>現在お使いのSNS</Label>
                <TextInput value={form.existingSns} onChange={(v) => update("existingSns", v)}
                  placeholder="例: Instagram @dog_plus、LINE公式 など" />
              </div>
            </div>
          </div>

          {/* ── セクション7: 写真・素材・その他 ── */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <SectionTitle number={7} title="写真・素材について" />
            <div className="space-y-4">
              <div>
                <Label>施設やワンちゃんの写真はありますか？</Label>
                <div className="flex gap-4">
                  {["たくさんある", "少しある", "ほぼない"].map((opt) => (
                    <label key={opt} className="flex items-center gap-2 text-sm cursor-pointer">
                      <input type="radio" name="hasPhotos" value={opt}
                        checked={form.hasPhotos === opt}
                        onChange={(e) => update("hasPhotos", e.target.value)}
                        className="accent-primary" />
                      {opt}
                    </label>
                  ))}
                </div>
              </div>
              <div>
                <Label>ロゴはありますか？</Label>
                <div className="flex gap-4">
                  {["ある", "作りたい", "なくてOK"].map((opt) => (
                    <label key={opt} className="flex items-center gap-2 text-sm cursor-pointer">
                      <input type="radio" name="hasLogo" value={opt}
                        checked={form.hasLogo === opt}
                        onChange={(e) => update("hasLogo", e.target.value)}
                        className="accent-primary" />
                      {opt}
                    </label>
                  ))}
                </div>
              </div>
              <div className="pt-2">
                <Label>その他ご要望・気になっていること</Label>
                <TextArea value={form.additionalNotes} onChange={(v) => update("additionalNotes", v)}
                  placeholder="なんでもお気軽にお書きください" rows={5} />
              </div>
            </div>
          </div>

          {error && <p className="text-red-500 text-sm text-center">{error}</p>}

          <button type="submit" disabled={submitting}
            className="w-full py-4 rounded-xl bg-primary text-white font-bold text-base hover:bg-primary-dark transition disabled:opacity-50 disabled:cursor-not-allowed shadow-md">
            {submitting ? "送信中..." : "送信する"}
          </button>

          <p className="text-xs text-gray-400 text-center">
            送信いただいた内容をもとに、ホームページの構成案をご提案いたします。
          </p>
        </form>
      </div>
    </main>
  );
}
