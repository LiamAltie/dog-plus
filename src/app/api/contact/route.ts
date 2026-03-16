import { NextRequest, NextResponse } from "next/server";

const SLACK_WEBHOOK_URL = process.env.SLACK_WEBHOOK_CLIENTS;
const NOTIFY_EMAIL = process.env.NOTIFY_EMAIL;
const GMAIL_APP_PASSWORD = process.env.GMAIL_APP_PASSWORD;

const sliderLabels: Record<string, [string, string]> = {
  compareWarmPro: ["温かみ・親しみ", "プロフェッショナル"],
  compareSimpleRich: ["シンプル", "情報量多め"],
  comparePopCalm: ["ポップ", "落ち着き"],
  comparePhotoText: ["写真メイン", "文章メイン"],
};

function formatSlider(key: string, value: number): string {
  const [left, right] = sliderLabels[key] || [key, key];
  const labels = [`◀${left}`, "やや左", "中間", "やや右", `${right}▶`];
  return `${labels[value - 1]} (${value}/5)`;
}

const siteNames: Record<string, [string, string]> = {
  "warm-vs-luxury": ["ボンパピ(親しみ系)", "ケネルズ東京(高級系)"],
  "handmade-vs-corporate": ["さくらっく(地域密着)", "ドッグライフP(実績重視)"],
};

function formatSitePref(id: string, value: string): string {
  const [a, b] = siteNames[id] || ["A", "B"];
  if (value === "A") return a;
  if (value === "B") return b;
  if (value === "both") return "両方の要素を取り入れたい";
  return "未選択";
}

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();

    const lines = [
      `*店舗名:* ${data.businessName}`,
      `*ご担当者:* ${data.ownerName}`,
      `*電話:* ${data.phone || "未記入"}`,
      `*メール:* ${data.email || "未記入"}`,
      `*住所:* ${data.address || "未記入"}`,
      "",
      `*サービス:* ${data.services?.join("、") || "未選択"}${data.servicesOther ? `（${data.servicesOther}）` : ""}`,
      `*対象犬種:* ${data.targetDogs || "未記入"}`,
      `*営業時間:* ${data.openingHours || "未記入"}`,
      `*料金:* ${data.pricing || "未記入"}`,
      "",
      `*強み:* ${data.strengths || "未記入"}`,
      `*施設特徴:* ${data.facilityFeatures || "未記入"}`,
      `*スタッフ:* ${data.staffInfo || "未記入"}`,
      "",
      `*現在の客層:* ${data.currentCustomers || "未記入"}`,
      `*理想の客層:* ${data.idealCustomers || "未記入"}`,
      `*よくある質問:* ${data.customerConcerns || "未記入"}`,
      "",
      "--- デザインの好み ---",
      ...Object.entries(data.sitePreferences || {}).map(
        ([id, v]) => `*サイト比較 ${id}:* ${formatSitePref(id, v as string)}`
      ),
      `*温かみ↔プロ:* ${formatSlider("compareWarmPro", data.compareWarmPro)}`,
      `*シンプル↔情報量:* ${formatSlider("compareSimpleRich", data.compareSimpleRich)}`,
      `*ポップ↔落ち着き:* ${formatSlider("comparePopCalm", data.comparePopCalm)}`,
      `*写真↔文章:* ${formatSlider("comparePhotoText", data.comparePhotoText)}`,
      "",
      `*HP目的:* ${data.websitePurpose?.join("、") || "未選択"}`,
      `*既存SNS:* ${data.existingSns || "未記入"}`,
      "",
      `*写真:* ${data.hasPhotos || "未選択"}`,
      `*ロゴ:* ${data.hasLogo || "未選択"}`,
      "",
      `*その他:* ${data.additionalNotes || "未記入"}`,
    ];

    const slackText = lines.join("\n");

    // Slack notification
    if (SLACK_WEBHOOK_URL) {
      await fetch(SLACK_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          text: `--- DOG PLUS ヒアリング回答 ---\n\n${slackText}`,
        }),
      });
    }

    // Email notification
    if (NOTIFY_EMAIL && GMAIL_APP_PASSWORD) {
      const nodemailer = await import("nodemailer");
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: NOTIFY_EMAIL,
          pass: GMAIL_APP_PASSWORD,
        },
      });

      const plainText = lines.map((l) => l.replace(/\*/g, "")).join("\n");

      await transporter.sendMail({
        from: NOTIFY_EMAIL,
        to: NOTIFY_EMAIL,
        subject: `[DOG PLUS] ヒアリング回答: ${data.businessName}`,
        text: plainText,
      });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
