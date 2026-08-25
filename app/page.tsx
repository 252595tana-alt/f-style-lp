'use client';

const siteConfig = {
  lineUrl: '', // TODO: 公式LINE URLが確定したら入力
  instagramUrl: '', // TODO: Instagram URLが確定したら入力
  mapUrl: 'https://maps.app.goo.gl/9BNQNkYi8Hsa97Bm7?g_st=ic',
  shopTel: '088-660-4027',
  accidentTel: '090-2823-9269',
  prices: {
    inspection: '', // TODO: 車検料金が確定したら入力
    oilChange: '', // TODO: オイル交換料金が確定したら入力
  },
};

const services = [
  ['USED CAR', '中古車販売', '購入後の車検・整備・乗り換えまで見据えてご提案します。'],
  ['PURCHASE', '買取', '次のカーライフにつながる売却相談を承ります。'],
  ['INSPECTION', '車検', '資格を持つスタッフが、安心して乗り続けるための点検を行います。'],
  ['MAINTENANCE', '整備・修理', '日常点検から不調の相談まで、違和感を見逃さず確認します。'],
  ['BODY REPAIR', '板金', '状態に合わせた修理方法をご案内します。'],
  ['CUSTOM', 'カスタム', '一台一台の雰囲気とバランスを見ながら仕上げます。'],
  ['INSURANCE', '各種保険', '万一に備える保険まわりもまとめて相談できます。'],
];

const gallery = [
  ['/instagram-grid-01.png', 'F-styleの車両・看板・工具が並ぶInstagramギャラリー'],
  ['/instagram-grid-02.png', 'F-styleの店舗内観と整備設備が並ぶInstagramギャラリー'],
  ['/proposal-cycle.png', 'F-styleのカーライフサポート全体像'],
];

function lineHref() {
  return siteConfig.lineUrl || '#contact';
}

function trackEvent(name: string) {
  window.dispatchEvent(new CustomEvent('fstyle:cta', { detail: { name } }));
}

function CtaLink({
  children,
  href,
  variant = 'dark',
  eventName,
}: {
  children: React.ReactNode;
  href: string;
  variant?: 'dark' | 'light' | 'line' | 'tel';
  eventName: string;
}) {
  return (
    <a
      className={`cta cta-${variant}`}
      href={href}
      onClick={() => trackEvent(eventName)}
      data-analytics-event={eventName}
    >
      {children}
    </a>
  );
}

function SectionTitle({
  eyebrow,
  title,
  lead,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
}) {
  return (
    <div className="section-title">
      <p>{eyebrow}</p>
      <h2>{title}</h2>
      {lead ? <span>{lead}</span> : null}
    </div>
  );
}

export default function Home() {
  const inspectionPrice = siteConfig.prices.inspection || '料金は準備中です';
  const oilPrice = siteConfig.prices.oilChange || '料金は準備中です';

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="F-style トップへ">
          <span>F-STYLE</span>
          <small>CAR SERVICE and DEALERSHIP</small>
        </a>
        <nav aria-label="ページ内ナビゲーション">
          <a href="#custom">CUSTOM</a>
          <a href="#service">SERVICE</a>
          <a href="#access">ACCESS</a>
        </nav>
      </header>

      <section id="top" className="hero">
        <div className="hero-media">
          <img src="/instagram-grid-01.png" alt="F-styleの店舗とカスタム車両の施工写真" />
        </div>
        <div className="hero-copy reveal">
          <p>CUSTOM / CAR SERVICE</p>
          <h1>
            F-STYLE
            <span>細部まで、妥協しない。</span>
          </h1>
          <CtaLink href={lineHref()} eventName="line_cta_hero" variant="line">
            LINEで相談する
          </CtaLink>
        </div>
      </section>

      <section className="intro section-pad">
        <div className="intro-statement reveal">
          <p>CONCEPT</p>
          <h2>
            クルマを、
            <br />
            もっと自分らしく。
          </h2>
        </div>
        <div className="intro-text reveal">
          <p>
            F-styleは、徳島市国府町を中心に地域のカーライフを支えるカーショップです。
            販売して終わりではなく、車検、整備、修理、カスタム、買取・乗り換えまで。
          </p>
          <p>
            小さな違和感まで見逃さず、一台一台に合わせて仕上げること。
            派手さよりも、長く任せられる確かな仕事を大切にしています。
          </p>
        </div>
      </section>

      <section id="custom" className="custom section-pad dark-band">
        <SectionTitle
          eyebrow="CUSTOM"
          title="CUSTOM IS IN THE DETAILS."
          lead="細部まで、妥協しない。"
        />
        <div className="custom-grid">
          <div className="custom-photo reveal">
            <img src="/instagram-grid-02.png" alt="F-styleのリフトと整備設備、工具の写真" loading="lazy" />
          </div>
          <div className="custom-copy reveal">
            <p>
              見た目を整えるだけではなく、タイヤまわりのわずかなズレや全体のバランスまで確認。
              一台ごとの雰囲気に合わせ、違和感のない仕上がりを追求します。
            </p>
            <ul>
              <li>洗練された仕上がり</li>
              <li>細部のズレや違和感まで確認</li>
              <li>車両ごとの個性に合わせた調整</li>
            </ul>
            <CtaLink href={lineHref()} eventName="line_cta_custom" variant="light">
              LINEでカスタムを相談する
            </CtaLink>
          </div>
        </div>
        <div className="gallery" aria-label="施工・店舗写真">
          {gallery.map(([src, alt]) => (
            <figure key={src} className="reveal">
              <img src={src} alt={alt} loading="lazy" />
            </figure>
          ))}
        </div>
      </section>

      <section id="service" className="section-pad">
        <SectionTitle
          eyebrow="SERVICE"
          title="CAR LIFE SUPPORT"
          lead="販売から整備、カスタム、乗り換えまで一貫して相談できます。"
        />
        <div className="service-grid">
          {services.map(([en, ja, text]) => (
            <article key={en} className="service-card reveal">
              <p>{en}</p>
              <h3>{ja}</h3>
              <span>{text}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="maintenance section-pad">
        <div className="split">
          <div className="reveal">
            <SectionTitle
              eyebrow="INSPECTION / MAINTENANCE"
              title="車検・整備も、F-styleへ。"
              lead="車を任せる場所だから、技術と実績を。"
            />
            <div className="license-list">
              <span>自動車検査員</span>
              <span>2級自動車整備士</span>
            </div>
            <p className="body-copy">
              日常の整備から車検、修理の相談まで。資格に裏付けられた点検と、設備の整ったガレージで安心を支えます。
            </p>
            <CtaLink href={lineHref()} eventName="line_cta_maintenance" variant="dark">
              LINEで車検・整備を相談する
            </CtaLink>
          </div>
          <img className="split-image reveal" src="/proposal-overview.png" alt="F-styleの店舗外観と整備設備の提案資料画像" loading="lazy" />
        </div>
      </section>

      <section className="price section-pad">
        <SectionTitle
          eyebrow="PRICE"
          title="料金表"
          lead="確定後に金額を差し替えられる仮枠です。"
        />
        <div className="price-grid">
          <article className="price-card reveal">
            <p>INSPECTION</p>
            <h3>車検料金</h3>
            <strong>{inspectionPrice}</strong>
          </article>
          <article className="price-card reveal">
            <p>OIL CHANGE</p>
            <h3>オイル交換料金</h3>
            <strong>{oilPrice}</strong>
          </article>
          <article className="price-card price-note reveal">
            <p>OTHER SERVICE</p>
            <h3>その他のサービス</h3>
            <span>修理・板金・カスタム・販売・買取は、内容・車種によって異なります。LINEよりお問い合わせください。</span>
          </article>
        </div>
      </section>

      <section className="works section-pad">
        <SectionTitle
          eyebrow="PROFESSIONAL / WORKS"
          title="仕事の質が見えるガレージ。"
          lead="資格、設備、施工写真で信頼を伝えます。"
        />
        <div className="works-layout">
          <img src="/instagram-grid-02.png" alt="F-styleの店舗内観と整備設備" loading="lazy" />
          <div>
            <p>
              代表者紹介ではなく、設備と施工の積み重ねで信頼をつくる。
              F-styleは、車を長く安心して任せられる地域のカーライフショップを目指しています。
            </p>
            <dl>
              <div><dt>資格</dt><dd>自動車検査員 / 2級自動車整備士</dd></div>
              <div><dt>地域</dt><dd>徳島市国府町を中心とした地域密着</dd></div>
              <div><dt>対応</dt><dd>中古車販売 / 買取 / 車検 / 修理 / 板金 / カスタム / 各種保険</dd></div>
            </dl>
          </div>
        </div>
      </section>

      <section id="accident" className="accident section-pad">
        <div className="accident-inner reveal">
          <p>ACCIDENT SUPPORT</p>
          <h2>
            事故・突然のトラブルで
            <br />
            お困りの方へ。
          </h2>
          <span>24時間 事故受付</span>
          <strong>{siteConfig.accidentTel}</strong>
          <CtaLink href={`tel:${siteConfig.accidentTel}`} eventName="accident_tel_click" variant="tel">
            今すぐ電話する
          </CtaLink>
        </div>
      </section>

      <section id="access" className="access section-pad">
        <SectionTitle
          eyebrow="SHOP / ACCESS"
          title="徳島市国府町のカーライフショップ。"
          lead="ご相談・ご予約はLINEから。事故受付は専用電話へ。"
        />
        <div className="access-grid">
          <div className="shop-info reveal">
            <dl>
              <div><dt>店舗名</dt><dd>F-style</dd></div>
              <div><dt>住所</dt><dd>〒779-3123<br />徳島県徳島市国府町観音寺472-2</dd></div>
              <div><dt>店舗電話</dt><dd><a href={`tel:${siteConfig.shopTel}`} onClick={() => trackEvent('shop_tel_click')} data-analytics-event="shop_tel_click">{siteConfig.shopTel}</a></dd></div>
              <div><dt>営業時間</dt><dd>10:00〜19:00</dd></div>
              <div><dt>定休日</dt><dd>日曜・祝日</dd></div>
            </dl>
            <a className="map-link" href={siteConfig.mapUrl} onClick={() => trackEvent('google_map_click')} data-analytics-event="google_map_click" target="_blank" rel="noreferrer">
              Google Mapで見る
            </a>
          </div>
          <img className="access-image reveal" src="/proposal-overview.png" alt="F-style店舗とサービス導線を示す画像" loading="lazy" />
        </div>
      </section>

      <section id="contact" className="contact section-pad">
        <div className="contact-box reveal">
          <p>CONTACT</p>
          <h2>車のことなら、お気軽にご相談ください。</h2>
          <span>カスタム、車検、整備、販売、買取、板金まで。通常のお問い合わせはLINEから承ります。</span>
          <CtaLink href={lineHref()} eventName="line_cta_contact" variant="line">
            LINEで相談・予約する
          </CtaLink>
          <div className="sub-links">
            <a href={`tel:${siteConfig.shopTel}`} onClick={() => trackEvent('shop_tel_footer_click')} data-analytics-event="shop_tel_footer_click">店舗へ電話</a>
            <a href={siteConfig.instagramUrl || '#contact'} onClick={() => trackEvent('instagram_click')} data-analytics-event="instagram_click">Instagram</a>
          </div>
          {!siteConfig.lineUrl || !siteConfig.instagramUrl ? (
            <small>LINE URL / Instagram URLは確定後に設定します。</small>
          ) : null}
        </div>
      </section>

      <footer>
        <span>F-STYLE</span>
        <p>徳島市国府町を中心とした地域密着のカーライフショップ</p>
      </footer>

      <div className="mobile-fixed-cta" aria-label="スマートフォン固定CTA">
        <a href={lineHref()} onClick={() => trackEvent('fixed_line_click')} data-analytics-event="fixed_line_click">LINEで相談</a>
        <a href={`tel:${siteConfig.accidentTel}`} onClick={() => trackEvent('fixed_accident_tel_click')} data-analytics-event="fixed_accident_tel_click">事故受付 TEL</a>
      </div>
    </main>
  );
}
