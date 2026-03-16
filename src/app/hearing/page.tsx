"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

interface FormData {
  // 基本情報
  businessName: string;
  ownerName: string;
  phone: string;
  email: string;
  address: string;
  // サービス内容
  services: string[];
  servicesOther: string;
  targetDogs: string;
  openingHours: string;
  pricing: string;
  // 強み・こだわり
  strengths: string;
  facilityFeatures: string;
  staffInfo: string;
  // お客様について
  currentCustomers: string;
  idealCustomers: string;
  customerConcerns: string;
  // ホームページについて
  websitePurpose: string[];
  websitePurposeOther: string;
  desiredPages: string[];
  desiredPagesOther: string;
  designPreference: string;
  referenceUrls: string;
  existingSns: string;
  // 写真・素材
  hasPhotos: string;
  hasLogo: string;
  // その他
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
  websitePurpose: [],
  websitePurposeOther: "",
  desiredPages: [],
  desiredPagesOther: "",
  designPreference: "",
  referenceUrls: "",
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
  "求人を掲載したい",
  "その他",
];

const pageOptions = [
  "トップページ",
  "サービス紹介",
  "料金表",
  "施設紹介・ギャラリー",
  "スタッフ紹介",
  "ご利用の流れ",
  "よくある質問",
  "お客様の声",
  "ブログ・お知らせ",
  "アクセス（地図）",
  "お問い合わせフォーム",
  "その他",
];

function SectionTitle({ number, title }: { number: number; title: string }) {
  return (
    <div className="flex items-center gap-3 mb-6 mt-10 first:mt-0">
      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white text-sm font-bold shrink-0">
        {number}
      </span>
      <h2 className="text-lg font-bold text-primary-dark">{title}</h2>
    </div>
  );
}

function Label({
  children,
  required,
}: {
  children: React.ReactNode;
  required?: boolean;
}) {
  return (
    <label className="block text-sm font-medium mb-1.5">
      {children}
      {required && (
        <span className="ml-1 text-xs text-red-500 font-normal">*必須</span>
      )}
    </label>
  );
}

function TextInput({
  value,
  onChange,
  placeholder,
  type = "text",
}: {
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
}) {
  return (
    <input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition text-sm"
    />
  );
}

function TextArea({
  value,
  onChange,
  placeholder,
  rows = 3,
}: {
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  rows?: number;
}) {
  return (
    <textarea
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      rows={rows}
      className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition text-sm resize-y"
    />
  );
}

function CheckboxGroup({
  options,
  selected,
  onChange,
}: {
  options: string[];
  selected: string[];
  onChange: (v: string[]) => void;
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
        <label
          key={option}
          className="flex items-center gap-2 px-3 py-2 rounded-lg border border-gray-200 hover:border-primary/40 cursor-pointer transition text-sm"
        >
          <input
            type="checkbox"
            checked={selected.includes(option)}
            onChange={() => toggle(option)}
            className="w-4 h-4 rounded text-primary accent-primary"
          />
          {option}
        </label>
      ))}
    </div>
  );
}

export default function HearingPage() {
  const [form, setForm] = useState<FormData>(initialFormData);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const update = <K extends keyof FormData>(key: K, value: FormData[K]) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.businessName || !form.ownerName) {
      setError("店舗名とお名前は必須です。");
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
          <p className="text-sm text-gray-500">
            DOG PLUS さまのホームページを制作するにあたり、
            <br className="hidden sm:block" />
            いくつかお聞かせください。わかる範囲で大丈夫です。
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* セクション1: 基本情報 */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <SectionTitle number={1} title="基本情報" />
            <div className="space-y-4">
              <div>
                <Label required>店舗名・屋号</Label>
                <TextInput
                  value={form.businessName}
                  onChange={(v) => update("businessName", v)}
                  placeholder="例: DOG PLUS"
                />
              </div>
              <div>
                <Label required>ご担当者名</Label>
                <TextInput
                  value={form.ownerName}
                  onChange={(v) => update("ownerName", v)}
                  placeholder="例: 山田 太郎"
                />
              </div>
              <div>
                <Label>お電話番号</Label>
                <TextInput
                  value={form.phone}
                  onChange={(v) => update("phone", v)}
                  placeholder="例: 090-1234-5678"
                  type="tel"
                />
              </div>
              <div>
                <Label>メールアドレス</Label>
                <TextInput
                  value={form.email}
                  onChange={(v) => update("email", v)}
                  placeholder="例: info@dogplus.jp"
                  type="email"
                />
              </div>
              <div>
                <Label>店舗所在地</Label>
                <TextInput
                  value={form.address}
                  onChange={(v) => update("address", v)}
                  placeholder="例: 東京都渋谷区..."
                />
              </div>
            </div>
          </div>

          {/* セクション2: サービス内容 */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <SectionTitle number={2} title="サービス内容" />
            <div className="space-y-4">
              <div>
                <Label>提供しているサービス（複数選択可）</Label>
                <CheckboxGroup
                  options={serviceOptions}
                  selected={form.services}
                  onChange={(v) => update("services", v)}
                />
                {form.services.includes("その他") && (
                  <div className="mt-2">
                    <TextInput
                      value={form.servicesOther}
                      onChange={(v) => update("servicesOther", v)}
                      placeholder="その他のサービスを入力"
                    />
                  </div>
                )}
              </div>
              <div>
                <Label>対象の犬種・サイズ</Label>
                <TextInput
                  value={form.targetDogs}
                  onChange={(v) => update("targetDogs", v)}
                  placeholder="例: 小型犬〜中型犬、全犬種OK など"
                />
              </div>
              <div>
                <Label>営業時間・定休日</Label>
                <TextInput
                  value={form.openingHours}
                  onChange={(v) => update("openingHours", v)}
                  placeholder="例: 平日 8:00-19:00、土日祝 9:00-18:00、水曜定休"
                />
              </div>
              <div>
                <Label>料金体系</Label>
                <TextArea
                  value={form.pricing}
                  onChange={(v) => update("pricing", v)}
                  placeholder="例: 日中預かり 1日 ¥3,500〜、月額プランあり など&#10;ざっくりで大丈夫です"
                />
              </div>
            </div>
          </div>

          {/* セクション3: 強み・こだわり */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <SectionTitle number={3} title="強み・こだわり" />
            <div className="space-y-4">
              <div>
                <Label>お店の強み・他店との違い</Label>
                <TextArea
                  value={form.strengths}
                  onChange={(v) => update("strengths", v)}
                  placeholder="例: 少人数制で目が届く、ドッグトレーナー常駐、広いドッグラン併設 など&#10;自由にお書きください"
                  rows={4}
                />
              </div>
              <div>
                <Label>施設の特徴</Label>
                <TextArea
                  value={form.facilityFeatures}
                  onChange={(v) => update("facilityFeatures", v)}
                  placeholder="例: 室内ドッグラン、天然芝の庭、ライブカメラ完備 など"
                />
              </div>
              <div>
                <Label>スタッフについて</Label>
                <TextArea
                  value={form.staffInfo}
                  onChange={(v) => update("staffInfo", v)}
                  placeholder="例: 愛玩動物飼養管理士在籍、スタッフ3名 など"
                />
              </div>
            </div>
          </div>

          {/* セクション4: お客様について */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <SectionTitle number={4} title="お客様について" />
            <div className="space-y-4">
              <div>
                <Label>現在のお客様層</Label>
                <TextArea
                  value={form.currentCustomers}
                  onChange={(v) => update("currentCustomers", v)}
                  placeholder="例: 近所の共働きご夫婦が多い、高齢の方の一時預かり利用 など"
                />
              </div>
              <div>
                <Label>今後増やしたいお客様像</Label>
                <TextArea
                  value={form.idealCustomers}
                  onChange={(v) => update("idealCustomers", v)}
                  placeholder="例: 初めて犬を飼う若いご夫婦、リピーターを増やしたい など"
                />
              </div>
              <div>
                <Label>お客様からよく聞かれること・不安に思われること</Label>
                <TextArea
                  value={form.customerConcerns}
                  onChange={(v) => update("customerConcerns", v)}
                  placeholder="例: 他の犬と仲良くできるか心配、急な預かりは可能か、など"
                  rows={4}
                />
              </div>
            </div>
          </div>

          {/* セクション5: ホームページについて */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <SectionTitle number={5} title="ホームページについて" />
            <div className="space-y-4">
              <div>
                <Label>ホームページの目的（複数選択可）</Label>
                <CheckboxGroup
                  options={purposeOptions}
                  selected={form.websitePurpose}
                  onChange={(v) => update("websitePurpose", v)}
                />
                {form.websitePurpose.includes("その他") && (
                  <div className="mt-2">
                    <TextInput
                      value={form.websitePurposeOther}
                      onChange={(v) => update("websitePurposeOther", v)}
                      placeholder="その他の目的を入力"
                    />
                  </div>
                )}
              </div>
              <div>
                <Label>あると良いと思うページ（複数選択可）</Label>
                <CheckboxGroup
                  options={pageOptions}
                  selected={form.desiredPages}
                  onChange={(v) => update("desiredPages", v)}
                />
                {form.desiredPages.includes("その他") && (
                  <div className="mt-2">
                    <TextInput
                      value={form.desiredPagesOther}
                      onChange={(v) => update("desiredPagesOther", v)}
                      placeholder="その他のページを入力"
                    />
                  </div>
                )}
              </div>
              <div>
                <Label>デザインの好み・雰囲気</Label>
                <TextArea
                  value={form.designPreference}
                  onChange={(v) => update("designPreference", v)}
                  placeholder="例: 温かみのある感じ、清潔感のある感じ、ポップな雰囲気 など&#10;言葉でも参考画像でもOKです"
                />
              </div>
              <div>
                <Label>参考にしたいサイト（あれば）</Label>
                <TextArea
                  value={form.referenceUrls}
                  onChange={(v) => update("referenceUrls", v)}
                  placeholder="URLを貼ってください（複数可）"
                />
              </div>
              <div>
                <Label>現在お使いのSNS</Label>
                <TextInput
                  value={form.existingSns}
                  onChange={(v) => update("existingSns", v)}
                  placeholder="例: Instagram @dog_plus、LINE公式 など"
                />
              </div>
            </div>
          </div>

          {/* セクション6: 写真・素材 */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <SectionTitle number={6} title="写真・素材について" />
            <div className="space-y-4">
              <div>
                <Label>施設やワンちゃんの写真はありますか？</Label>
                <div className="flex gap-4">
                  {["たくさんある", "少しある", "ほぼない"].map((opt) => (
                    <label key={opt} className="flex items-center gap-2 text-sm cursor-pointer">
                      <input
                        type="radio"
                        name="hasPhotos"
                        value={opt}
                        checked={form.hasPhotos === opt}
                        onChange={(e) => update("hasPhotos", e.target.value)}
                        className="accent-primary"
                      />
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
                      <input
                        type="radio"
                        name="hasLogo"
                        value={opt}
                        checked={form.hasLogo === opt}
                        onChange={(e) => update("hasLogo", e.target.value)}
                        className="accent-primary"
                      />
                      {opt}
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* セクション7: その他 */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <SectionTitle number={7} title="その他" />
            <div>
              <Label>その他ご要望・気になっていること</Label>
              <TextArea
                value={form.additionalNotes}
                onChange={(v) => update("additionalNotes", v)}
                placeholder="なんでもお気軽にお書きください"
                rows={5}
              />
            </div>
          </div>

          {error && (
            <p className="text-red-500 text-sm text-center">{error}</p>
          )}

          <button
            type="submit"
            disabled={submitting}
            className="w-full py-4 rounded-xl bg-primary text-white font-bold text-base hover:bg-primary-dark transition disabled:opacity-50 disabled:cursor-not-allowed shadow-md"
          >
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
