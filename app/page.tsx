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
  variant?: 'dark' | 'light' | 'line';
  eventName: string;
}) {
  return (
    <a
      className={`cta cta-${variant}`}
      href={href}
      onClick={() => trackEvent(eventName)}
      data-analytics-event={eventName}
    >
      <span>{children}</span>
      <i aria-hidden="true" />
    </a>
  );
}

function SectionTitle({
  number,
  eyebrow,
  title,
  lead,
}: {
  number: string;
  eyebrow: string;
  title: string;
  lead?: string;
}) {
  return (
    <div className="section-title">
      <div className="section-kicker">
        <span>{number}</span>
        <p>{eyebrow}</p>
      </div>
      <h2>{title}</h2>
      {lead ? <p className="section-lead">{lead}</p> : null}
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
          <span>F<span className="brand-accent">-</span>STYLE</span>
          <small>CAR SERVICE AND DEALERSHIP</small>
        </a>
        <nav aria-label="ページ内ナビゲーション">
          <a href="#custom">CUSTOM</a>
          <a href="#service">SERVICE</a>
          <a href="#access">ACCESS</a>
        </nav>
        <a className="header-contact" href={lineHref()} onClick={() => trackEvent('header_contact_click')}>
          LINEで相談する
        </a>
      </header>

      <section id="top" className="hero">
        <div className="hero-media" aria-hidden="true">
          <video autoPlay loop muted playsInline preload="metadata" poster="/concept-custom-car.jpg">
            <source src="/hero-video.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-copy">
          <p className="hero-kicker"><span>CAR SERVICE</span><span>TOKUSHIMA</span></p>
          <h1>F-STYLE<span>細部まで、妥協しない。</span></h1>
          <p className="hero-lead">販売、車検、整備、板金、カスタムまで。<br />クルマのことを、ひとつの場所で。</p>
          <div className="line-cta-block hero-line-cta">
            <p className="line-cta-context">車検・整備・カスタムについて<br />お気軽にご相談ください</p>
            <div className="hero-actions">
              <CtaLink href={lineHref()} eventName="line_cta_hero" variant="line">LINEで相談する</CtaLink>
              <a className="text-link" href="#service">サービスを見る</a>
            </div>
          </div>
        </div>
        <div className="hero-facts">
          <span>34.0737 N / 134.4890 E</span>
          <span>TOKUSHIMA, JAPAN</span>
          <span>OPEN 10:00 - 19:00</span>
        </div>
        <a className="scroll-mark" href="#concept" aria-label="コンセプトへスクロール"><span>SCROLL</span></a>
      </section>

      <section id="concept" className="intro section-pad">
        <div className="intro-statement reveal">
          <div className="section-kicker dark-ink"><span>00</span><p>OUR PHILOSOPHY</p></div>
          <h2>クルマを、<br />もっと自分らしく。</h2>
        </div>
        <div className="intro-text reveal">
          <p className="intro-lead">地域で、ずっと頼れる<br />カーライフの拠点へ。</p>
          <p>F-styleは、徳島市国府町を中心に地域のカーライフを支えるカーショップです。販売して終わりではなく、車検、整備、修理、カスタム、買取・乗り換えまで。</p>
          <p>小さな違和感まで見逃さず、一台一台に合わせて仕上げること。長く任せられる確かな仕事を大切にしています。</p>
        </div>
      </section>

      <section id="custom" className="custom section-pad dark-band">
        <SectionTitle number="01" eyebrow="CUSTOM" title="CUSTOM IS IN THE DETAILS." lead="見た目だけでは終わらない。乗るたびに違いが伝わる、一台へ。" />
        <div className="custom-grid">
          <figure className="custom-photo reveal">
            <img src="/concept-custom-car.jpg" alt="カスタム車両を表現したイメージ画像" loading="lazy" />
            <figcaption><span>DETAIL / 001</span> BUILT WITH BALANCE</figcaption>
          </figure>
          <div className="custom-copy reveal">
            <p className="large-copy">わずかなズレまで見逃さず、車両全体のバランスを整える。</p>
            <p>見た目を整えるだけではなく、タイヤまわりのわずかなズレや全体のバランスまで確認。一台ごとの雰囲気に合わせ、違和感のない仕上がりを追求します。</p>
            <ul>
              <li><span>01</span>洗練された仕上がり</li>
              <li><span>02</span>細部のズレや違和感まで確認</li>
              <li><span>03</span>車両ごとの個性に合わせた調整</li>
            </ul>
            <div className="line-cta-block custom-line-cta">
              <p className="line-cta-context">車検・整備・カスタムについて<br />お気軽にご相談ください</p>
              <CtaLink href={lineHref()} eventName="line_cta_custom" variant="light">LINEで相談する</CtaLink>
            </div>
          </div>
        </div>
        <div className="photo-strip" aria-label="施工・店舗写真">
          <figure className="photo-wide reveal"><img src="/concept-custom-car.jpg" alt="洗練されたカスタム車両のイメージ画像" loading="lazy" /></figure>
          <figure className="photo-tall reveal"><img src="/concept-service-garage.jpg" alt="整備ガレージのイメージ画像" loading="lazy" /></figure>
          <figure className="photo-detail reveal"><img src="/concept-tool-detail.jpg" alt="整備工具のイメージ画像" loading="lazy" /></figure>
        </div>
      </section>

      <section id="service" className="service section-pad">
        <SectionTitle number="02" eyebrow="SERVICE" title="CAR LIFE SUPPORT" lead="入口から、その先まで。クルマに関することを一貫して相談できます。" />
        <figure className="service-visual reveal">
          <img
            src="/concept-car-life-support.jpg"
            alt="車の購入や買取から、車検、整備、板金、カスタム、保険までを一貫して支えるカーライフサポートのイメージ"
            loading="lazy"
          />
        </figure>
      </section>

      <section className="price section-pad">
        <SectionTitle number="03" eyebrow="PRICE" title="料金のご案内" lead="内容と車種を確認し、事前にわかりやすくご案内します。" />
        <div className="price-grid">
          <article className="price-card reveal"><p>INSPECTION</p><h3>車検料金</h3><strong>{inspectionPrice}</strong></article>
          <article className="price-card reveal"><p>OIL CHANGE</p><h3>オイル交換料金</h3><strong>{oilPrice}</strong></article>
          <article className="price-card price-note reveal"><p>OTHER SERVICE</p><h3>その他のサービス</h3><span>修理・板金・カスタム・販売・買取は、内容・車種によって異なります。LINEよりお問い合わせください。</span></article>
        </div>
      </section>

      <section className="works section-pad">
        <SectionTitle number="04" eyebrow="PROFESSIONAL / WORKS" title="仕事の質が見えるガレージ。" lead="資格、設備、施工の積み重ねが、F-styleの品質です。" />
        <div className="works-layout">
          <div className="works-image reveal"><img src="/concept-tool-detail.jpg" alt="丁寧な整備品質を表現した工具のイメージ画像" loading="lazy" /></div>
          <div className="works-copy reveal">
            <p className="large-copy">設備と施工の積み重ねで、信頼をつくる。</p>
            <p>F-styleは、車を長く安心して任せられる地域のカーライフショップを目指しています。</p>
            <dl>
              <div><dt>資格</dt><dd>自動車検査員 / 2級自動車整備士</dd></div>
              <div><dt>地域</dt><dd>徳島市国府町を中心とした地域密着</dd></div>
              <div><dt>対応</dt><dd>中古車販売 / 買取 / 車検 / 修理 / 板金 / カスタム / 各種保険</dd></div>
            </dl>
          </div>
        </div>
      </section>

      <section id="access" className="access section-pad">
        <SectionTitle number="05" eyebrow="SHOP / ACCESS" title="徳島市国府町の、頼れる拠点。" lead="ご相談・ご予約はLINEから。事故受付は専用電話へ。" />
        <div className="access-grid">
          <div className="shop-info reveal">
            <dl>
              <div><dt>SHOP</dt><dd>F-style</dd></div>
              <div><dt>ADDRESS</dt><dd>〒779-3123<br />徳島県徳島市国府町観音寺472-2</dd></div>
              <div><dt>TEL</dt><dd><a href={`tel:${siteConfig.shopTel}`} onClick={() => trackEvent('shop_tel_click')}>{siteConfig.shopTel}</a></dd></div>
              <div><dt>OPEN</dt><dd>10:00 - 19:00</dd></div>
              <div><dt>CLOSED</dt><dd>日曜・祝日</dd></div>
            </dl>
            <a className="map-link" href={siteConfig.mapUrl} onClick={() => trackEvent('google_map_click')} target="_blank" rel="noreferrer"><span>Google Mapで見る</span><i aria-hidden="true" /></a>
          </div>
          <div className="access-image reveal">
            <img src="/concept-shop-exterior.jpg" alt="カーショップ外観のイメージ画像" loading="lazy" />
            <span>KOKUFUCHO / TOKUSHIMA</span>
          </div>
        </div>
      </section>

      <section id="contact" className="contact section-pad">
        <p>CONTACT / RESERVATION</p>
        <h2>車のことなら、<br />まずF-styleへ。</h2>
        <div className="line-cta-block contact-line-cta">
          <p className="line-cta-context">車検・整備・カスタムについて<br />お気軽にご相談ください</p>
          <CtaLink href={lineHref()} eventName="line_cta_contact" variant="line">LINEで相談する</CtaLink>
        </div>
        <div className="sub-links">
          <a href={`tel:${siteConfig.shopTel}`} onClick={() => trackEvent('shop_tel_footer_click')}>店舗へ電話</a>
          <a href={siteConfig.instagramUrl || '#contact'} onClick={() => trackEvent('instagram_click')}>Instagram</a>
        </div>
        {!siteConfig.lineUrl || !siteConfig.instagramUrl ? <small>LINE URL / Instagram URLは確定後に設定します。</small> : null}
      </section>

      <footer>
        <div className="footer-brand"><span>F-STYLE</span><small>CAR SERVICE AND DEALERSHIP</small></div>
        <p>徳島市国府町を中心とした地域密着のカーライフショップ</p>
        <a href="#top">BACK TO TOP</a>
      </footer>

      <div className="mobile-fixed-cta" aria-label="スマートフォン固定CTA">
        <a href={lineHref()} onClick={() => trackEvent('fixed_line_click')}>LINEで相談する</a>
        <a href={`tel:${siteConfig.accidentTel}`} onClick={() => trackEvent('fixed_accident_tel_click')}>事故・故障受付 TEL</a>
      </div>
    </main>
  );
}
