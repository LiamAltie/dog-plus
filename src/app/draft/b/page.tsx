export default function DraftB() {
  return (
    <div
      className="bg-[#fef9f0] text-[#3d3028] overflow-hidden"
      style={{ fontFamily: "var(--font-zen-maru), sans-serif" }}
    >
      {/* ── Header ── */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#fef9f0]/90 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#f2a35e] rounded-[50%_50%_50%_30%] flex items-center justify-center text-white text-sm font-bold rotate-[-10deg]">
              D+
            </div>
            <span className="font-bold text-lg">DOG＋</span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm">
            <a href="#about" className="hover:text-[#f2a35e] transition">DOG＋って？</a>
            <a href="#rooms" className="hover:text-[#f2a35e] transition">ルーム</a>
            <a href="#day" className="hover:text-[#f2a35e] transition">1日の流れ</a>
            <a href="#price" className="hover:text-[#f2a35e] transition">料金</a>
          </div>
          <a href="tel:08041725459"
             className="bg-[#f2a35e] text-white px-5 py-2 rounded-full text-sm font-bold hover:bg-[#e0913e] transition shadow-md shadow-[#f2a35e]/20">
            見学してみる
          </a>
        </div>
      </header>

      {/* ── Hero ── */}
      <section className="pt-28 pb-8 px-6 relative">
        <div className="max-w-5xl mx-auto relative">
          <div className="absolute -top-16 -right-32 w-[500px] h-[500px] bg-[#fde8c8] rounded-full opacity-50 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-[300px] h-[300px] bg-[#d4eee1] rounded-full opacity-50 blur-3xl" />
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 text-center md:text-left">
              <div className="inline-flex items-center gap-2 bg-[#f2a35e]/10 text-[#c07830] text-sm font-bold px-4 py-2 rounded-full mb-6">
                千葉市の犬の保育園
              </div>
              <h1 className="text-4xl md:text-5xl font-bold leading-[1.6] mb-6">
                ここにキャッチコピーが<br />入ります
              </h1>
              <p className="text-lg text-[#7a6a58] leading-relaxed mb-8">
                ここに本文が入ります。ここに本文が入ります。<br />
                ここに本文が入ります。ここに本文が入ります。
              </p>
              <a href="#contact"
                 className="inline-block bg-[#f2a35e] text-white px-7 py-3.5 rounded-full font-bold text-lg hover:bg-[#e0913e] transition shadow-lg shadow-[#f2a35e]/30">
                見学・体験を予約
              </a>
            </div>
            <div className="flex-1 flex justify-center">
              <div className="w-80 h-80 md:w-96 md:h-96 bg-[#fde8c8] rounded-full flex items-center justify-center relative overflow-hidden">
                <img src="/images/b_hero.jpg" alt="" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute -top-4 right-8 w-16 h-16 bg-[#d4eee1] rounded-full" />
                <div className="absolute -bottom-2 left-4 w-14 h-14 bg-[#e8d4ee] rounded-full" />
                <div className="absolute top-1/2 -right-6 w-12 h-12 bg-[#fdd4d4] rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 波型 ── */}
      <div className="relative h-24 mt-8">
        <svg viewBox="0 0 1440 100" className="absolute bottom-0 w-full" preserveAspectRatio="none">
          <path d="M0,50 C180,90 360,10 540,50 C720,90 900,10 1080,50 C1260,90 1440,30 1440,60 L1440,100 L0,100 Z" fill="#fff8ee" />
        </svg>
      </div>

      {/* ── About ── */}
      <section id="about" className="bg-[#fff8ee] py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm text-[#c07830] font-bold mb-3">DOG＋って？</p>
          <h2 className="text-3xl font-bold mb-8">
            ここに見出しが入ります<br />ここに見出しが入ります
          </h2>
          <p className="text-[#7a6a58] leading-[2.2] max-w-xl mx-auto mb-16">
            ここに本文が入ります。ここに本文が入ります。<br />
            ここに本文が入ります。ここに本文が入ります。
          </p>
          <div className="flex flex-col md:flex-row gap-10 justify-center items-start">
            {[
              { label: "ここに", desc: "ここに説明文が\n入ります。", bg: "bg-[#fde8c8]", img: "/images/b_about_1.jpg" },
              { label: "ここに", desc: "ここに説明文が\n入ります。", bg: "bg-[#d4eee1]", img: "/images/b_about_2.jpg" },
              { label: "ここに", desc: "ここに説明文が\n入ります。", bg: "bg-[#e8d4ee]", img: "/images/b_about_3.jpg" },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center flex-1">
                <div className={`w-32 h-32 ${item.bg} rounded-full flex items-center justify-center mb-5 shadow-sm relative overflow-hidden`}>
                  <img src={item.img} alt="" className="absolute inset-0 w-full h-full object-cover" />
                </div>
                <p className="font-bold text-lg mb-2">{item.label}</p>
                <p className="text-sm text-[#7a6a58] whitespace-pre-line leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 波型 ── */}
      <div className="relative h-24 bg-[#fff8ee]">
        <svg viewBox="0 0 1440 100" className="absolute bottom-0 w-full" preserveAspectRatio="none">
          <path d="M0,70 C240,20 480,80 720,40 C960,0 1200,60 1440,30 L1440,100 L0,100 Z" fill="#fef9f0" />
        </svg>
      </div>

      {/* ── Rooms: カラフルカード、CSS図形アクセント ── */}
      <section id="rooms" className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm text-[#c07830] font-bold mb-3">6つのルーム</p>
            <h2 className="text-3xl font-bold mb-4">
              ここに見出しが入ります
            </h2>
            <p className="text-[#7a6a58]">ここに説明文が入ります。ここに説明文が入ります。</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { name: "のんびりルーム", color: "bg-[#d4eee1]", border: "border-[#a3d4b8]", dotColor: "#6bb88a" },
              { name: "わくわくルーム", color: "bg-[#fde8c8]", border: "border-[#f2c97a]", dotColor: "#e8a84c" },
              { name: "はじめてルーム", color: "bg-[#e0e8fd]", border: "border-[#a3b8f2]", dotColor: "#6b8ff2" },
              { name: "ちいさいルーム", color: "bg-[#fdd4d4]", border: "border-[#f2a3a3]", dotColor: "#e87070" },
              { name: "おおきいルーム", color: "bg-[#e8d4ee]", border: "border-[#c9a3e8]", dotColor: "#a87cc0" },
              { name: "ひとりルーム", color: "bg-[#d4e8ee]", border: "border-[#a3ccd4]", dotColor: "#6ba8b5" },
            ].map((room, i) => (
              <div key={i} className={`${room.color} ${room.border} border-2 rounded-3xl p-6 text-center relative overflow-hidden`}>
                {/* CSS装飾：右上に薄い丸 */}
                <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full opacity-20" style={{ backgroundColor: room.dotColor }} />
                <div className="relative z-10">
                  <div className="w-8 h-8 rounded-full mx-auto mb-3" style={{ backgroundColor: room.dotColor, opacity: 0.4 }} />
                  <p className="font-bold">{room.name}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-[#7a6a58] mt-4">※ ルーム名はイメージです</p>
        </div>
      </section>

      {/* ── 波型→ダーク ── */}
      <div className="relative h-24">
        <svg viewBox="0 0 1440 100" className="absolute bottom-0 w-full" preserveAspectRatio="none">
          <path d="M0,40 C360,80 720,20 1080,60 C1260,80 1440,40 1440,50 L1440,100 L0,100 Z" fill="#3d3028" />
        </svg>
      </div>

      {/* ── お悩み ── */}
      <section className="bg-[#3d3028] text-[#fef9f0] py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm text-[#f2a35e] font-bold mb-3">こんなお悩みありませんか？</p>
          <h2 className="text-3xl font-bold mb-12">ここに見出しが入ります</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { worry: "吠えちゃう", answer: "ここに説明文が入ります。ここに説明文が入ります。", accent: "#f2a35e" },
              { worry: "トイレが\nうまくいかない", answer: "ここに説明文が入ります。ここに説明文が入ります。", accent: "#6bb88a" },
              { worry: "ひとや犬が\nこわい", answer: "ここに説明文が入ります。ここに説明文が入ります。", accent: "#a87cc0" },
            ].map((item, i) => (
              <div key={i} className="bg-[#4d4038] rounded-3xl p-8 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 rounded-t-3xl" style={{ backgroundColor: item.accent }} />
                <p className="font-bold text-lg mb-4 mt-2 whitespace-pre-line">{item.worry}</p>
                <div className="w-8 h-0.5 mb-4" style={{ backgroundColor: item.accent }} />
                <p className="text-sm text-[#c4b8a5] leading-relaxed">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 波型→ライト ── */}
      <div className="relative h-24 bg-[#3d3028]">
        <svg viewBox="0 0 1440 100" className="absolute bottom-0 w-full" preserveAspectRatio="none">
          <path d="M0,50 C180,90 360,10 540,50 C720,90 900,10 1080,50 C1260,90 1440,30 1440,60 L1440,100 L0,100 Z" fill="#fef9f0" />
        </svg>
      </div>

      {/* ── 1日の流れ：カラーバーつきカード ── */}
      <section id="day" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm text-[#c07830] font-bold mb-3">1にちのながれ</p>
            <h2 className="text-3xl font-bold">DOG＋のいちにち</h2>
          </div>
          <div className="space-y-4">
            {[
              { time: "9:30", title: "登園", bg: "bg-[#fde8c8]", bar: "#e8a84c" },
              { time: "10:00", title: "午前の活動", bg: "bg-[#d4eee1]", bar: "#6bb88a" },
              { time: "12:00", title: "おひるね", bg: "bg-[#e0e8fd]", bar: "#6b8ff2" },
              { time: "13:00", title: "午後の活動", bg: "bg-[#e8d4ee]", bar: "#a87cc0" },
              { time: "16:00", title: "まったり", bg: "bg-[#d4e8ee]", bar: "#6ba8b5" },
              { time: "〜19:00", title: "お迎え", bg: "bg-[#fdd4d4]", bar: "#e87070" },
            ].map((step, i) => (
              <div key={i} className={`${step.bg} rounded-2xl p-5 flex items-center gap-5 relative overflow-hidden`}>
                <div className="absolute left-0 top-0 bottom-0 w-1.5 rounded-l-2xl" style={{ backgroundColor: step.bar }} />
                <div className="ml-3 flex-1">
                  <div className="flex items-baseline gap-3 mb-0.5">
                    <span className="text-sm font-bold text-[#7a6a58]">{step.time}</span>
                    <span className="font-bold text-lg">{step.title}</span>
                  </div>
                  <p className="text-sm text-[#7a6a58]">ここに説明が入ります</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── サービス ── */}
      <section className="py-16 px-6 bg-[#fff8ee]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm text-[#c07830] font-bold mb-3">サービス</p>
            <h2 className="text-3xl font-bold">ここに見出しが入ります</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { title: "日中お預かり", tag: "にんき" },
              { title: "一時預かり（2h〜）", tag: null },
              { title: "しつけ教室", tag: null },
              { title: "送迎サービス", tag: null },
              { title: "アンチエイジング・リハビリ", tag: "NEW" },
              { title: "飼い主さん講座", tag: "じゅんび中" },
            ].map((svc, i) => (
              <div key={i} className="bg-[#fef9f0] border-2 border-[#f0e6d4] rounded-2xl p-5 flex items-center gap-4 hover:border-[#f2a35e] transition">
                <div className="w-10 h-10 bg-[#f2a35e]/10 rounded-xl flex items-center justify-center text-[#c07830] text-xs font-bold shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <span className="font-bold flex-1">{svc.title}</span>
                {svc.tag && (
                  <span className={`text-xs font-bold px-3 py-1 rounded-full ${
                    svc.tag === "にんき" ? "bg-[#f2a35e]/15 text-[#c07830]" :
                    svc.tag === "NEW" ? "bg-[#4caf8b]/15 text-[#2d8a5e]" :
                    "bg-[#aaa]/10 text-[#888]"
                  }`}>{svc.tag}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 料金 ── */}
      <section id="price" className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm text-[#c07830] font-bold mb-3">りょうきん</p>
          <h2 className="text-3xl font-bold mb-12">ここに見出しが入ります</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-[#fff8ee] rounded-3xl p-8 border-2 border-[#f0e6d4]">
              <p className="text-sm text-[#7a6a58] mb-2">一時預かり</p>
              <p className="text-4xl font-bold text-[#f2a35e]">
                ¥2,500<span className="text-base font-normal text-[#7a6a58]">〜 / 2h</span>
              </p>
              <p className="text-xs text-[#7a6a58] mt-2">以降1時間ごと追加</p>
            </div>
            <div className="bg-[#fde8c8] rounded-3xl p-8 border-2 border-[#f2a35e] relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#f2a35e] text-white text-xs font-bold px-4 py-1 rounded-full">
                おすすめ
              </div>
              <p className="text-sm text-[#7a6a58] mb-2">1日あずかり</p>
              <p className="text-4xl font-bold text-[#c07830]">
                ¥5,300<span className="text-base font-normal text-[#7a6a58]">〜 / 8h+</span>
              </p>
              <p className="text-xs text-[#7a6a58] mt-2">ここに説明が入ります</p>
            </div>
          </div>
          <p className="text-xs text-[#7a6a58] mt-6">※ わんちゃんのサイズで料金が変わります</p>
        </div>
      </section>

      {/* ── スタッフ ── */}
      <section className="py-16 px-6 bg-[#fff8ee]">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm text-[#c07830] font-bold mb-3">スタッフ</p>
          <h2 className="text-3xl font-bold mb-4">ここに見出しが入ります</h2>
          <p className="text-[#7a6a58] mb-12">ここに説明文が入ります。</p>
          <div className="flex flex-wrap justify-center gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="w-28 h-28 bg-[#fde8c8] rounded-full mb-3 border-4 border-white shadow-md overflow-hidden">
                  <img src={`/images/b_staff_${i}.jpg`} alt="" className="w-full h-full object-cover" />
                </div>
                <p className="font-bold text-sm">スタッフ {i}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── アクセス ── */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm text-[#c07830] font-bold mb-3">アクセス</p>
            <h2 className="text-3xl font-bold">ここに見出しが入ります</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#e8e0d4] rounded-3xl aspect-video flex items-center justify-center text-xs text-[#7a6a58]/50 tracking-widest uppercase">
              Google Map
            </div>
            <div className="bg-[#fff8ee] rounded-3xl p-8 space-y-5">
              <div>
                <p className="text-sm font-bold text-[#c07830] mb-1">住所</p>
                <p>千葉県千葉市神明町13-4<br />日栄ビル１階Ａ</p>
              </div>
              <div>
                <p className="text-sm font-bold text-[#c07830] mb-1">営業時間</p>
                <p>火〜土 9:30 - 19:00</p>
                <p className="text-sm text-[#7a6a58]">日・月おやすみ</p>
              </div>
              <div>
                <p className="text-sm font-bold text-[#c07830] mb-1">でんわ</p>
                <a href="tel:08041725459" className="text-xl font-bold hover:text-[#f2a35e] transition">080-4172-5459</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section id="contact" className="py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#f2a35e] to-[#e0913e]" />
        <div className="absolute -top-20 -left-20 w-60 h-60 bg-white/10 rounded-full" />
        <div className="absolute -bottom-16 -right-16 w-48 h-48 bg-white/10 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full" />
        <div className="relative z-10 max-w-3xl mx-auto text-center text-white">
          <h2 className="text-3xl font-bold mb-4">ここにCTAの見出しが入ります</h2>
          <p className="text-white/80 text-lg mb-10">
            ここに説明文が入ります。ここに説明文が入ります。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:08041725459" className="bg-white text-[#c07830] px-8 py-4 rounded-full text-lg font-bold hover:bg-[#fef9f0] transition">
              080-4172-5459
            </a>
            <a href="#" className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-white/10 transition">
              Instagram
            </a>
          </div>
        </div>
      </section>

      <footer className="py-8 px-6 bg-[#3d3028] text-[#c4b8a5] text-center text-sm">
        <div className="flex items-center justify-center gap-2 mb-2">
          <div className="w-6 h-6 bg-[#f2a35e] rounded-full flex items-center justify-center text-white text-[10px] font-bold">D+</div>
          <span className="font-bold text-white">DOG＋</span>
        </div>
        <p>千葉県千葉市神明町13-4 日栄ビル１階Ａ</p>
        <p className="mt-1">© 2026 DOG＋</p>
      </footer>
    </div>
  );
}
