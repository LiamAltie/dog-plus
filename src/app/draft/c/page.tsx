export default function DraftC() {
  return (
    <div
      className="bg-[#f5f2ec] text-[#333] overflow-x-hidden"
      style={{ fontFamily: "var(--font-noto-sans-jp), sans-serif" }}
    >
      {/* ── Header ── */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#f5f2ec]/90 backdrop-blur-sm border-b border-[#e0dbd2]">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 bg-[#7c9a6e] rounded-lg flex items-center justify-center text-white text-xs font-bold">D+</div>
            <span className="font-bold text-lg tracking-wide">DOG＋</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm text-[#666]">
            <a href="#about" className="hover:text-[#7c9a6e] transition">わたしたちについて</a>
            <a href="#rooms" className="hover:text-[#7c9a6e] transition">6つのルーム</a>
            <a href="#services" className="hover:text-[#7c9a6e] transition">サービス</a>
            <a href="#day" className="hover:text-[#7c9a6e] transition">1日の流れ</a>
          </nav>
          <a href="tel:08041725459"
             className="bg-[#7c9a6e] text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-[#6b8960] transition">
            お問い合わせ
          </a>
        </div>
      </header>

      {/* ── Hero: 全面写真 + 左下テキスト ── */}
      <section className="pt-[72px]">
        <div className="relative h-[92vh] bg-[#d5cec2] overflow-hidden">
          <img src="/images/c_hero.jpg" alt="" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#222]/80 via-[#222]/40 to-transparent pt-48 pb-16 px-8 md:px-16">
            <div className="max-w-6xl mx-auto">
              <p className="text-white/50 text-xs mb-4 tracking-[0.2em] uppercase"
                 style={{ fontFamily: "var(--font-inter), sans-serif" }}>
                犬の保育園 · 千葉市
              </p>
              <h1 className="text-3xl md:text-5xl font-bold text-white leading-[1.5] mb-6">
                ここにキャッチコピーが<br />入ります
              </h1>
              <p className="text-white/60 text-base max-w-md mb-8 leading-relaxed">
                ここに本文が入ります。ここに本文が入ります。ここに本文が入ります。
              </p>
              <div className="flex gap-3">
                <a href="#contact"
                   className="bg-[#7c9a6e] text-white px-6 py-3 rounded-lg font-medium text-sm hover:bg-[#6b8960] transition">
                  見学・体験を予約
                </a>
                <a href="#about"
                   className="bg-white/15 backdrop-blur text-white px-6 py-3 rounded-lg font-medium text-sm hover:bg-white/25 transition">
                  もっと知る
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Info Bar ── */}
      <section className="bg-white border-b border-[#e0dbd2]">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-[#e0dbd2]">
          {[
            { label: "営業時間", value: "火〜土 9:30-19:00" },
            { label: "対象", value: "全犬種OK" },
            { label: "スタッフ", value: "有資格者 4名" },
            { label: "ルーム", value: "6室完備" },
          ].map((item, i) => (
            <div key={i} className="px-6 py-5 text-center">
              <p className="text-[10px] text-[#999] mb-1 tracking-wider uppercase" style={{ fontFamily: "var(--font-inter), sans-serif" }}>{item.label}</p>
              <p className="font-medium text-sm">{item.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── About: 写真を画面幅の半分に ── */}
      <section id="about" className="py-24">
        <div className="flex flex-col md:flex-row">
          {/* 写真：画面左半分いっぱい */}
          <div className="md:w-1/2 min-h-[50vh] md:min-h-[70vh] relative overflow-hidden bg-[#d5cec2]">
            <img src="/images/c_about.jpg" alt="" className="absolute inset-0 w-full h-full object-cover" />
          </div>
          {/* テキスト：右半分、パディング多め */}
          <div className="md:w-1/2 flex items-center px-8 md:px-16 py-16 md:py-0">
            <div className="max-w-md">
              <p className="text-xs tracking-[0.2em] text-[#7c9a6e] uppercase mb-6 font-medium"
                 style={{ fontFamily: "var(--font-inter), sans-serif" }}>
                About
              </p>
              <h2 className="text-2xl md:text-3xl font-bold leading-[1.6] mb-6">
                ここに見出しが入ります<br />ここに見出しが入ります
              </h2>
              <div className="w-12 h-px bg-[#7c9a6e] mb-6" />
              <p className="text-[#666] leading-[2] mb-8 text-sm">
                ここに本文が入ります。ここに本文が入ります。ここに本文が入ります。ここに本文が入ります。ここに本文が入ります。ここに本文が入ります。
              </p>
              <div className="flex flex-wrap gap-2">
                {["全犬種OK", "資格保有スタッフ", "送迎あり"].map((tag) => (
                  <span key={tag} className="bg-[#7c9a6e]/8 text-[#5a7a4e] text-xs px-3 py-1.5 rounded font-medium border border-[#7c9a6e]/15">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Features: テキスト左→写真右、交互に逆転。写真が画面端まではみ出す ── */}
      <section className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-8 mb-16">
          <p className="text-xs tracking-[0.2em] text-[#7c9a6e] uppercase mb-4 font-medium"
             style={{ fontFamily: "var(--font-inter), sans-serif" }}>
            Features
          </p>
          <h2 className="text-2xl md:text-3xl font-bold">ここに見出しが入ります</h2>
        </div>

        <div className="space-y-20">
          {[0, 1, 2].map((i) => (
            <div key={i} className={`flex flex-col ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
              {/* 写真：画面端まで広がる */}
              <div className="md:w-[55%] min-h-[40vh] relative overflow-hidden bg-[#e8e2d8]">
                <img src={`/images/c_feature_${i + 1}.jpg`} alt="" className="absolute inset-0 w-full h-full object-cover" />
              </div>
              {/* テキスト */}
              <div className="md:w-[45%] flex items-center px-8 md:px-16 py-12 md:py-0">
                <div>
                  <span className="text-3xl font-bold text-[#7c9a6e]/15 block mb-4"
                        style={{ fontFamily: "var(--font-inter), sans-serif" }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-xl font-bold mb-4 leading-relaxed">ここに特徴タイトルが入ります</h3>
                  <p className="text-[#666] leading-[2] text-sm">ここに説明文が入ります。ここに説明文が入ります。ここに説明文が入ります。ここに説明文が入ります。</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 6 Rooms: DOG＋固有の見せ方。図解的レイアウト ── */}
      <section id="rooms" className="py-24 px-8">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs tracking-[0.2em] text-[#7c9a6e] uppercase mb-4 font-medium"
             style={{ fontFamily: "var(--font-inter), sans-serif" }}>
            6 Rooms
          </p>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">ここに見出しが入ります</h2>
          <p className="text-[#666] mb-12 text-sm max-w-lg">ここに説明文が入ります。ここに説明文が入ります。ここに説明文が入ります。</p>

          {/* 2行構成: 上に大きい3枚、下に小さい3枚。不均等グリッドで「図解」感 */}
          <div className="grid grid-cols-3 gap-3 mb-3">
            {[
              { name: "のんびりルーム", color: "#7c9a6e", span: "col-span-1", img: "/images/c_room_1.jpg" },
              { name: "わくわくルーム", color: "#c9884a", span: "col-span-1", img: "/images/c_room_2.jpg" },
              { name: "はじめてルーム", color: "#6b8fb5", span: "col-span-1", img: "/images/c_room_3.jpg" },
            ].map((room, i) => (
              <div key={i} className={`${room.span} bg-[#e0dbd2] rounded-xl aspect-[4/3] relative overflow-hidden group`}>
                <img src={room.img} alt="" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/50 to-transparent">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: room.color }} />
                    <p className="text-white text-sm font-medium">{room.name}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-12 gap-3">
            {[
              { name: "ちいさいルーム", color: "#b5856b", span: "col-span-5", img: "/images/c_room_4.jpg" },
              { name: "おおきいルーム", color: "#8a7db5", span: "col-span-4", img: "/images/c_room_5.jpg" },
              { name: "ひとりルーム", color: "#7aacac", span: "col-span-3", img: "/images/c_room_6.jpg" },
            ].map((room, i) => (
              <div key={i} className={`${room.span} bg-[#e0dbd2] rounded-xl aspect-[3/2] relative overflow-hidden group`}>
                <img src={room.img} alt="" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/50 to-transparent">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: room.color }} />
                    <p className="text-white text-sm font-medium">{room.name}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs text-[#999] mt-4">※ ルーム名はイメージです。登園メンバーに応じて毎日ルーム分けが変わります。</p>
        </div>
      </section>

      {/* ── Services ── */}
      <section id="services" className="bg-white py-24 px-8">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs tracking-[0.2em] text-[#7c9a6e] uppercase mb-4 font-medium"
             style={{ fontFamily: "var(--font-inter), sans-serif" }}>
            Services
          </p>
          <h2 className="text-2xl md:text-3xl font-bold mb-12">サービス一覧</h2>
          {/* 横線区切りのリスト形式（テンプレ的なカードグリッドを避ける） */}
          <div className="border-t border-[#e0dbd2]">
            {[
              { title: "日中お預かり（保育園）", desc: "ここに説明が入ります" },
              { title: "一時預かり", desc: "2時間〜" },
              { title: "しつけ教室・トレーニング", desc: "ここに説明が入ります" },
              { title: "送迎サービス", desc: "ここに説明が入ります" },
              { title: "アンチエイジング・リハビリ", desc: "ここに説明が入ります" },
              { title: "飼い主さん向け講座", desc: "ここに説明が入ります" },
            ].map((svc, i) => (
              <div key={i} className="flex items-center justify-between py-5 border-b border-[#e0dbd2] group">
                <div className="flex items-baseline gap-6">
                  <span className="text-xs text-[#7c9a6e] tabular-nums w-5"
                        style={{ fontFamily: "var(--font-inter), sans-serif" }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-bold">{svc.title}</span>
                </div>
                <span className="text-sm text-[#999] hidden md:block">{svc.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Schedule: 横スクロールカード ── */}
      <section id="day" className="py-24 px-8">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs tracking-[0.2em] text-[#7c9a6e] uppercase mb-4 font-medium"
             style={{ fontFamily: "var(--font-inter), sans-serif" }}>
            Daily Schedule
          </p>
          <h2 className="text-2xl md:text-3xl font-bold mb-12">1日の流れ</h2>
          <div className="flex gap-3 overflow-x-auto pb-4 -mx-8 px-8 snap-x">
            {[
              { time: "9:30", title: "登園", bg: "#7c9a6e" },
              { time: "10:00", title: "午前の活動", bg: "#8aaa7c" },
              { time: "12:00", title: "お昼休憩", bg: "#c9884a" },
              { time: "13:00", title: "午後の活動", bg: "#6b8fb5" },
              { time: "16:00", title: "まったり", bg: "#8a7db5" },
              { time: "〜19:00", title: "お迎え", bg: "#7aacac" },
            ].map((step, i) => (
              <div key={i} className="min-w-[170px] rounded-xl p-5 text-white snap-start flex-shrink-0" style={{ backgroundColor: step.bg }}>
                <p className="text-white/60 text-xs mb-2 tracking-wider" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
                  {step.time}
                </p>
                <p className="font-bold">{step.title}</p>
                <p className="text-white/50 text-xs mt-2 leading-relaxed">ここに説明が入ります</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Price ── */}
      <section className="bg-white py-24 px-8">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs tracking-[0.2em] text-[#7c9a6e] uppercase mb-4 font-medium"
             style={{ fontFamily: "var(--font-inter), sans-serif" }}>
            Price
          </p>
          <h2 className="text-2xl md:text-3xl font-bold mb-12">料金</h2>
          <div className="grid sm:grid-cols-2 gap-5">
            <div className="border border-[#e0dbd2] rounded-xl p-8">
              <p className="text-sm text-[#999] mb-3">一時預かり（2時間〜）</p>
              <p className="text-3xl font-bold" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
                ¥2,500<span className="text-sm font-normal text-[#999] ml-1">〜</span>
              </p>
              <p className="text-xs text-[#999] mt-3">以降1時間ごと追加料金</p>
            </div>
            <div className="border-2 border-[#7c9a6e] rounded-xl p-8 relative bg-[#7c9a6e]/3">
              <div className="absolute -top-3 right-6 bg-[#7c9a6e] text-white text-xs font-medium px-3 py-1 rounded-full">
                おすすめ
              </div>
              <p className="text-sm text-[#999] mb-3">1日お預かり（8時間〜）</p>
              <p className="text-3xl font-bold" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
                ¥5,300<span className="text-sm font-normal text-[#999] ml-1">〜</span>
              </p>
              <p className="text-xs text-[#999] mt-3">ここに説明が入ります</p>
            </div>
          </div>
          <p className="text-xs text-[#999] mt-6">※ 犬のサイズにより料金が異なります</p>
        </div>
      </section>

      {/* ── Staff ── */}
      <section className="py-24 px-8">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs tracking-[0.2em] text-[#7c9a6e] uppercase mb-4 font-medium"
             style={{ fontFamily: "var(--font-inter), sans-serif" }}>
            Staff
          </p>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">ここに見出しが入ります</h2>
          <p className="text-[#666] mb-12 text-sm">ここに説明文が入ります。</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[1, 2, 3, 4].map((i) => (
              <div key={i}>
                <div className="bg-[#e0dbd2] rounded-xl aspect-[3/4] mb-3 overflow-hidden">
                  <img src={`/images/c_staff_${i}.jpg`} alt="" className="w-full h-full object-cover" />
                </div>
                <p className="font-bold text-sm">スタッフ {i}</p>
                <p className="text-xs text-[#999]">資格保有</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-white py-24 px-8">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs tracking-[0.2em] text-[#7c9a6e] uppercase mb-4 font-medium"
             style={{ fontFamily: "var(--font-inter), sans-serif" }}>
            FAQ
          </p>
          <h2 className="text-2xl md:text-3xl font-bold mb-12">よくあるご質問</h2>
          <div className="divide-y divide-[#e0dbd2]">
            {[
              "吠え癖がありますが大丈夫ですか？",
              "他の犬が苦手です",
              "トイレトレーニングもできますか？",
              "大型犬でも預けられますか？",
            ].map((q, i) => (
              <div key={i} className="py-6">
                <div className="flex items-start gap-4">
                  <span className="text-xs font-bold text-[#7c9a6e] mt-0.5 shrink-0"
                        style={{ fontFamily: "var(--font-inter), sans-serif" }}>Q</span>
                  <div>
                    <h3 className="font-bold mb-2">{q}</h3>
                    <p className="text-sm text-[#666] leading-relaxed">ここに回答が入ります。ここに回答が入ります。</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Access ── */}
      <section className="py-24 px-8">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-xs tracking-[0.2em] text-[#7c9a6e] uppercase mb-4 font-medium"
               style={{ fontFamily: "var(--font-inter), sans-serif" }}>
              Access
            </p>
            <h2 className="text-2xl md:text-3xl font-bold mb-8">アクセス</h2>
            <div className="space-y-6 text-sm">
              <div>
                <p className="text-[10px] text-[#999] uppercase tracking-wider mb-1">住所</p>
                <p>千葉県千葉市神明町13-4<br />日栄ビル１階Ａ</p>
              </div>
              <div className="w-10 h-px bg-[#e0dbd2]" />
              <div>
                <p className="text-[10px] text-[#999] uppercase tracking-wider mb-1">営業時間</p>
                <p>火〜土 9:30 — 19:00</p>
                <p className="text-[#999]">日曜・月曜 定休</p>
              </div>
              <div className="w-10 h-px bg-[#e0dbd2]" />
              <div>
                <p className="text-[10px] text-[#999] uppercase tracking-wider mb-1">お電話</p>
                <a href="tel:08041725459" className="text-xl font-bold hover:text-[#7c9a6e] transition"
                   style={{ fontFamily: "var(--font-inter), sans-serif" }}>
                  080-4172-5459
                </a>
              </div>
            </div>
          </div>
          <div className="bg-[#e0dbd2] rounded-xl aspect-video flex items-center justify-center text-xs text-[#b8ad9e] tracking-[0.3em] uppercase">
            Google Map
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section id="contact" className="bg-[#7c9a6e] py-24 px-8 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">ここにCTAの見出しが入ります</h2>
          <p className="text-white/70 mb-10 leading-relaxed">
            ここに説明文が入ります。ここに説明文が入ります。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:08041725459"
               className="bg-white text-[#7c9a6e] px-8 py-4 rounded-lg font-bold hover:bg-[#f5f2ec] transition">
              080-4172-5459
            </a>
            <a href="#"
               className="border-2 border-white text-white px-8 py-4 rounded-lg font-medium hover:bg-white/10 transition">
              Instagram
            </a>
          </div>
        </div>
      </section>

      <footer className="py-8 px-8 bg-[#333] text-[#999] text-sm">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 bg-[#7c9a6e] rounded-lg flex items-center justify-center text-white text-[10px] font-bold">D+</div>
            <span className="font-bold text-white">DOG＋</span>
          </div>
          <p>千葉県千葉市神明町13-4 日栄ビル１階Ａ</p>
          <p>© 2026 DOG＋</p>
        </div>
      </footer>
    </div>
  );
}
