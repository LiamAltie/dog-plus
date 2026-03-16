export default function ThanksPage() {
  return (
    <main className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
          <svg
            className="w-8 h-8 text-primary"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h1 className="text-2xl font-bold text-primary-dark mb-3">
          ご回答ありがとうございます！
        </h1>
        <p className="text-sm text-gray-500 leading-relaxed">
          内容を確認のうえ、ホームページの構成案を
          <br />
          ご提案させていただきます。
          <br />
          少々お待ちくださいませ。
        </p>
      </div>
    </main>
  );
}
