export default function DraftA() {
  return (
    <div
      className="text-[#2a2a2a] overflow-x-hidden"
      style={{ fontFamily: "var(--font-noto-serif-jp), serif" }}
    >
      {/* ── Header: 薄い線、ミニマル ── */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#f7f4ef]/80 backdrop-blur-md">
        <div className="flex items-center justify-between px-8 md:px-16 py-5">
          <div
            className="text-base tracking-[0.5em] text-[#8a7d6b]"
            style={{ fontFamily: "var(--font-inter), sans-serif" }}
          >
            DOG＋
          </div>
          <nav className="hidden md:flex items-center gap-8 text-xs tracking-[0.15em] text-[#8a7d6b]"
               style={{ fontFamily: "var(--font-inter), sans-serif" }}>
            <a href="#philosophy" className="hover:text-[#2a2a2a] transition">PHILOSOPHY</a>
            <a href="#rooms" className="hover:text-[#2a2a2a] transition">ROOMS</a>
            <a href="#services" className="hover:text-[#2a2a2a] transition">SERVICES</a>
            <a href="#access" className="hover:text-[#2a2a2a] transition">ACCESS</a>
          </nav>
          <a
            href="tel:08041725459"
            className="text-xs tracking-[0.15em] text-[#8a7d6b] hover:text-[#2a2a2a] transition"
            style={{ fontFamily: "var(--font-inter), sans-serif" }}
          >
            080-4172-5459
          </a>
        </div>
        <div className="h-px bg-gradient-to-r from-transparent via-[#d4c9b8] to-transparent" />
      </header>

      {/* ── Hero: PC=左写真70%+右テキスト30%、SP=全面写真+下テキスト ── */}
      <section className="min-h-screen relative flex flex-col md:flex-row">
        <div className="flex-1 md:w-[65%] min-h-[60vh] md:min-h-screen bg-[#d8cfc2] relative overflow-hidden">
          <img src="/images/a_hero.jpg" alt="" className="absolute inset-0 w-full h-full object-cover" />
        </div>
        <div className="md:w-[35%] bg-[#f7f4ef] flex flex-col justify-center px-8 md:px-14 py-16 md:py-0 relative">
          {/* 縦の細い装飾線 */}
          <div className="hidden md:block absolute left-0 top-[15%] bottom-[15%] w-px bg-[#d4c9b8]" />
          <p
            className="text-[10px] tracking-[0.5em] text-[#8a7d6b] mb-10 uppercase"
            style={{ fontFamily: "var(--font-inter), sans-serif" }}
          >
            Dog Nursery — Chiba
          </p>
          <h1 className="text-3xl md:text-4xl leading-[2.2] tracking-[0.12em] mb-10">
            ここにキャッチ<br />コピーが入ります
          </h1>
          <div className="w-16 h-px bg-[#d4c9b8] mb-10" />
          <p className="text-sm leading-[2.8] text-[#8a7d6b] tracking-wider">
            ここに本文が入ります。<br />
            ここに本文が入ります。
          </p>
          <a href="#contact"
             className="mt-12 inline-block text-[10px] tracking-[0.3em] uppercase text-[#8a7d6b] border-b border-[#8a7d6b] pb-1 hover:text-[#2a2a2a] hover:border-[#2a2a2a] transition self-start"
             style={{ fontFamily: "var(--font-inter), sans-serif" }}>
            見学のご予約 →
          </a>
        </div>
      </section>

      {/* ── Philosophy: 左に巨大引用、右に本文 ── */}
      <section id="philosophy" className="py-32 md:py-48 px-8 md:px-16">
        <div className="max-w-[1100px] mx-auto">
          <p className="text-[10px] tracking-[0.5em] text-[#8a7d6b] mb-20 uppercase"
             style={{ fontFamily: "var(--font-inter), sans-serif" }}>
            Philosophy
          </p>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
            <div className="md:col-span-6">
              <h2 className="text-2xl md:text-[2.5rem] leading-[2.2] tracking-[0.1em]">
                ここに見出しが<br />入ります、<br />ここに見出しが<br />入ります。
              </h2>
            </div>
            <div className="md:col-span-5 md:col-start-8 flex flex-col justify-end">
              <div className="w-px h-16 bg-[#d4c9b8] mb-8 hidden md:block" />
              <p className="text-[13px] leading-[2.8] text-[#8a7d6b] tracking-wide">
                ここに本文が入ります。ここに本文が入ります。ここに本文が入ります。ここに本文が入ります。ここに本文が入ります。ここに本文が入ります。ここに本文が入ります。ここに本文が入ります。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Room: フルブリード写真 ── */}
      <section id="rooms" className="relative">
        <div className="h-[70vh] md:h-[80vh] bg-[#c4b8a5] relative">
          <img src="/images/a_rooms_hero.jpg" alt="" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#2a2a2a]/70 via-[#2a2a2a]/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 px-8 md:px-16 pb-16 md:pb-20">
            <div className="max-w-[1100px] mx-auto">
              <p className="text-[10px] tracking-[0.5em] text-white/50 mb-6 uppercase"
                 style={{ fontFamily: "var(--font-inter), sans-serif" }}>
                6 Rooms
              </p>
              <h2 className="text-2xl md:text-4xl text-white leading-[1.8] tracking-[0.1em]">
                ここに見出しが入ります<br />
                ここに見出しが入ります
              </h2>
            </div>
          </div>
        </div>
      </section>

      {/* ── Room Details: 番号＋タイトル＋本文、細い線で区切り ── */}
      <section className="py-32 md:py-40 px-8 md:px-16 bg-[#f7f4ef]">
        <div className="max-w-[1100px] mx-auto">
          {[
            "ここに特徴の見出しが入ります",
            "ここに特徴の見出しが入ります",
            "ここに特徴の見出しが入ります",
          ].map((title, i) => (
            <div key={i} className={`grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-baseline py-16 ${i > 0 ? "border-t border-[#d4c9b8]" : ""}`}>
              <div className="md:col-span-1">
                <span className="text-5xl md:text-7xl font-extralight text-[#d4c9b8]"
                      style={{ fontFamily: "var(--font-inter), sans-serif" }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="md:col-span-4 md:col-start-3">
                <h3 className="text-xl md:text-2xl tracking-[0.08em] leading-[1.8]">{title}</h3>
              </div>
              <div className="md:col-span-4 md:col-start-8">
                <p className="text-[13px] leading-[2.8] text-[#8a7d6b] tracking-wide">
                  ここに説明文が入ります。ここに説明文が入ります。ここに説明文が入ります。ここに説明文が入ります。
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Services: 行ホバー ── */}
      <section id="services" className="py-32 md:py-40 px-8 md:px-16">
        <div className="max-w-[1100px] mx-auto">
          <p className="text-[10px] tracking-[0.5em] text-[#8a7d6b] mb-16 uppercase"
             style={{ fontFamily: "var(--font-inter), sans-serif" }}>
            Services
          </p>
          <div className="border-t border-[#d4c9b8]">
            {[
              "日中お預かり（保育園）",
              "一時預かり",
              "しつけ教室・トレーニング",
              "送迎サービス",
              "アンチエイジング・リハビリ",
              "飼い主さん向け講座",
            ].map((svc, i) => (
              <div key={i} className="flex items-center justify-between py-7 border-b border-[#d4c9b8] group cursor-pointer">
                <div className="flex items-baseline gap-6 md:gap-10">
                  <span className="text-xs text-[#d4c9b8] tabular-nums w-6"
                        style={{ fontFamily: "var(--font-inter), sans-serif" }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-base md:text-lg tracking-[0.08em] group-hover:tracking-[0.18em] transition-all duration-700">
                    {svc}
                  </span>
                </div>
                <span className="text-[#d4c9b8] group-hover:text-[#2a2a2a] group-hover:translate-x-1 transition-all duration-500 text-lg"
                      style={{ fontFamily: "var(--font-inter), sans-serif" }}>
                  →
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Schedule: ダークセクション ── */}
      <section className="py-32 md:py-40 px-8 md:px-16 bg-[#2a2a2a] text-[#e8e0d4]">
        <div className="max-w-[1100px] mx-auto">
          <p className="text-[10px] tracking-[0.5em] text-[#6b6358] mb-16 uppercase"
             style={{ fontFamily: "var(--font-inter), sans-serif" }}>
            Daily Schedule
          </p>
          <div className="space-y-0">
            {[
              { time: "9:30", event: "登園" },
              { time: "10:00", event: "午前の活動" },
              { time: "12:00", event: "お昼休憩" },
              { time: "13:00", event: "午後の活動" },
              { time: "16:00", event: "まったりタイム" },
              { time: "〜19:00", event: "お迎え" },
            ].map((step, i) => (
              <div key={i} className="flex items-baseline gap-8 md:gap-16 py-5 border-b border-[#3d3d3d]">
                <span className="text-xl md:text-2xl font-extralight text-[#6b6358] w-20 md:w-24 shrink-0 tabular-nums"
                      style={{ fontFamily: "var(--font-inter), sans-serif" }}>
                  {step.time}
                </span>
                <span className="text-base md:text-lg tracking-[0.08em]">{step.event}</span>
                <span className="text-xs text-[#6b6358] tracking-wide hidden md:block ml-auto">
                  ここに説明が入ります
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Price: 大きな数字 ── */}
      <section className="py-32 md:py-40 px-8 md:px-16 bg-[#f7f4ef]">
        <div className="max-w-[1100px] mx-auto">
          <p className="text-[10px] tracking-[0.5em] text-[#8a7d6b] mb-16 uppercase"
             style={{ fontFamily: "var(--font-inter), sans-serif" }}>
            Price
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-8">
            <div>
              <h2 className="text-2xl tracking-[0.1em] leading-[1.8] mb-6">料金のご案内</h2>
              <p className="text-[13px] leading-[2.8] text-[#8a7d6b]">
                ここに説明文が入ります。<br />ここに説明文が入ります。
              </p>
            </div>
            <div className="space-y-12 md:pt-4">
              {[
                { label: "一時預かり（2時間〜）", price: "2,500" },
                { label: "8時間以上", price: "5,300" },
              ].map((item, i) => (
                <div key={i}>
                  <p className="text-xs text-[#8a7d6b] mb-3 tracking-wider">{item.label}</p>
                  <div className="flex items-baseline gap-2" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
                    <span className="text-4xl md:text-5xl font-extralight tracking-tight">{item.price}</span>
                    <span className="text-xs text-[#8a7d6b]">円〜</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Staff ── */}
      <section className="py-32 md:py-40 px-8 md:px-16">
        <div className="max-w-[1100px] mx-auto">
          <p className="text-[10px] tracking-[0.5em] text-[#8a7d6b] mb-16 uppercase"
             style={{ fontFamily: "var(--font-inter), sans-serif" }}>
            Staff
          </p>
          <h2 className="text-2xl tracking-[0.1em] leading-[1.8] mb-16">
            ここに見出しが入ります<br />ここに見出しが入ります
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-1">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="aspect-[3/4] bg-[#e0d6c8] relative group overflow-hidden">
                <img src={`/images/a_staff_${i}.jpg`} alt="" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-[#2a2a2a]/80 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-white text-sm tracking-wider">スタッフ {i}</p>
                  <p className="text-white/50 text-xs mt-1">資格保有</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Access ── */}
      <section id="access" className="py-32 md:py-40 px-8 md:px-16 bg-[#f7f4ef]">
        <div className="max-w-[1100px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
            <div className="md:col-span-4">
              <p className="text-[10px] tracking-[0.5em] text-[#8a7d6b] mb-16 uppercase"
                 style={{ fontFamily: "var(--font-inter), sans-serif" }}>
                Access
              </p>
              <div className="space-y-8 text-[13px] leading-[2.5] text-[#6b6358]">
                <div>
                  <p className="text-[#2a2a2a] tracking-[0.08em] text-sm mb-2">所在地</p>
                  千葉県千葉市神明町13-4<br />日栄ビル１階Ａ
                </div>
                <div className="w-12 h-px bg-[#d4c9b8]" />
                <div>
                  <p className="text-[#2a2a2a] tracking-[0.08em] text-sm mb-2">営業時間</p>
                  火曜日〜土曜日<br />9:30 — 19:00<br />
                  <span className="text-[#8a7d6b]">日曜・月曜 定休</span>
                </div>
                <div className="w-12 h-px bg-[#d4c9b8]" />
                <div>
                  <p className="text-[#2a2a2a] tracking-[0.08em] text-sm mb-2">お電話</p>
                  <a href="tel:08041725459" className="text-lg tracking-[0.1em] text-[#2a2a2a] hover:text-[#8a7d6b] transition"
                     style={{ fontFamily: "var(--font-inter), sans-serif" }}>
                    080-4172-5459
                  </a>
                </div>
              </div>
            </div>
            <div className="md:col-span-7 md:col-start-6">
              <div className="aspect-[4/3] bg-[#e0d6c8] flex items-center justify-center text-[10px] text-[#8a7d6b]/40 tracking-[0.3em] uppercase">
                Google Map
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section id="contact" className="py-32 md:py-40 px-8 md:px-16 bg-[#2a2a2a] text-[#e8e0d4] relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#4a4a4a] to-transparent" />
        <div className="max-w-[800px] mx-auto text-center">
          <p className="text-[10px] tracking-[0.5em] text-[#6b6358] mb-12 uppercase"
             style={{ fontFamily: "var(--font-inter), sans-serif" }}>
            Contact
          </p>
          <h2 className="text-2xl md:text-3xl tracking-[0.12em] leading-[2] mb-8">
            ここにCTAの見出しが入ります
          </h2>
          <div className="w-16 h-px bg-[#6b6358] mx-auto mb-8" />
          <p className="text-[13px] text-[#6b6358] leading-[2.5] mb-16 tracking-wide">
            ここに説明文が入ります。ここに説明文が入ります。
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            {["080-4172-5459", "INSTAGRAM"].map((label) => (
              <a key={label} href={label.startsWith("0") ? `tel:${label.replace(/-/g, "")}` : "#"}
                 className="border border-[#6b6358] text-[#e8e0d4] px-10 py-4 tracking-[0.2em] text-xs hover:bg-[#e8e0d4] hover:text-[#2a2a2a] transition duration-500"
                 style={{ fontFamily: "var(--font-inter), sans-serif" }}>
                {label}
              </a>
            ))}
          </div>
        </div>
      </section>

      <footer className="py-6 px-8 md:px-16 bg-[#1e1e1e]">
        <div className="max-w-[1100px] mx-auto flex justify-between items-center text-[#6b6358] text-[10px] tracking-[0.2em]"
             style={{ fontFamily: "var(--font-inter), sans-serif" }}>
          <span>DOG＋</span>
          <span>© 2026</span>
        </div>
      </footer>
    </div>
  );
}
