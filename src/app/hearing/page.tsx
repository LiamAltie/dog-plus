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
  // サイト比較の好み（4軸）
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

// ── サイト比較データ（4軸） ──
const siteComparisons = [
  {
    id: "warmth-competence",
    question: "どちらの雰囲気がイメージに近いですか？",
    subtitle: "お店全体の印象として",
    siteA: {
      name: "さくらっく",
      image: "/references/sakuluck.jpg",
      description: "温かみ・親しみやすい・アットホーム",
    },
    siteB: {
      name: "THE ケネルズ東京",
      image: "/references/kennels-tokyo.jpg",
      description: "プロフェッショナル・高級感・信頼",
    },
  },
  {
    id: "arousal",
    question: "どちらのテンション感が近いですか？",
    subtitle: "サイトを見たときの印象として",
    siteA: {
      name: "イヌのトリコ",
      image: "/references/inu-no-trico.jpg",
      description: "にぎやか・元気・活発な印象",
    },
    siteB: {
      name: "LOVE WOOF!!",
      image: "/references/lovewoof.jpg",
      description: "静か・穏やか・落ち着いた印象",
    },
  },
  {
    id: "complexity",
    question: "どちらの情報量が好みですか？",
    subtitle: "ページの見た目として",
    siteA: {
      name: "Paw Park",
      image: "/references/pawpark.jpg",
      description: "シンプル・すっきり・余白が多い",
    },
    siteB: {
      name: "ほめほめホーム",
      image: "/references/homehomehome.jpg",
      description: "情報たっぷり・にぎやか・充実",
    },
  },
  {
    id: "typicality",
    question: "どちらのスタイルが好みですか？",
    subtitle: "サイトの個性として",
    siteA: {
      name: "Parco del Cane",
      image: "/references/tripletta.jpg",
      description: "犬の保育園らしい・王道・安心感",
    },
    siteB: {
      name: "Pee-Ka-Boo",
      image: "/references/pee-ka-boo.jpg",
      description: "個性的・おしゃれ・他にない感じ",
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

// ── サイト比較コンポーネント ──
function SiteComparison({ comparison, selected, onSelect }: {
  comparison: typeof siteComparisons[0];
  selected: string;
  onSelect: (v: string) => void;
}) {
  return (
    <div className="space-y-3">
      <p className="text-sm font-medium">{comparison.question}</p>
      {comparison.subtitle && <p className="text-xs text-gray-400 -mt-2">{comparison.subtitle}</p>}
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
              subtitle="同業のサイトを2つお見せします。直感で「こっちが近い」を選んでください" />

            <div className="space-y-10">
              {siteComparisons.map((comp) => (
                <SiteComparison
                  key={comp.id}
                  comparison={comp}
                  selected={form.sitePreferences[comp.id] || ""}
                  onSelect={(v) => updateSitePref(comp.id, v)}
                />
              ))}
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
