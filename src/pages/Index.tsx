export default function Index() {
  return (
    <>
      <div className="grain-overlay" />

      <header className="header">
        <div className="logo">ПЁС*ПАТРУЛЬ</div>
        <nav>
          <a href="#prices">Цены</a>
          <a href="#how">Как это работает</a>
          <a href="#about">О нас</a>
          <a href="#faq">FAQ</a>
        </nav>
        <button className="btn-cta">Заказать выгул</button>
      </header>

      <main>
        <section className="hero">
          <div className="hero-content">
            <h1 className="hero-title">
              ВЫГУЛ
              <br />
              В <span>надёжных</span>
              <br />
              РУКАХ
            </h1>
            <p className="text-base md:text-lg lg:text-xl mb-8 md:mb-10 leading-relaxed text-[#555]">
              Доверьте собаку профессионалам, когда вам не хватает времени. 20, 40 или 60 минут — во всех районах Москвы.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
              <button className="btn-cta" style={{ background: "var(--primary)", color: "white" }}>
                Заказать выгул
              </button>
              <button className="btn-cta" style={{ background: "white" }}>
                Смотреть цены
              </button>
            </div>
          </div>
          <div
            className="hero-img"
            style={{
              backgroundImage: `url("https://cdn.poehali.dev/projects/6079896c-6b7b-4aa1-803c-f1f0403dfa00/files/582bd34d-8f21-4627-a8ad-1b6929d3ec2f.jpg")`,
            }}
          >
            <div className="sticker">
              ПРЕМИЯ
              <br />
              MOSCOW
              <br />
              URBAN 2022
            </div>
            <div className="floating-tag hidden md:block" style={{ top: "20%", left: "10%" }}>
              #ГУЛЯЙВИЛЯЙ
            </div>
            <div className="floating-tag hidden md:block" style={{ bottom: "30%", right: "20%" }}>
              ТОП-100
            </div>
          </div>
        </section>

        <div className="marquee">
          <div className="marquee-content">
            &nbsp; * ВЫГУЛ СОБАК В МОСКВЕ * БЕЗОПАСНАЯ ЭКИПИРОВКА * ФОТО-ОТЧЁТ ПОСЛЕ ПРОГУЛКИ * РЕЙТИНГ 5.0 * ВСЕ ОКРУГА МОСКВЫ *
            ВЫГУЛ СОБАК В МОСКВЕ * БЕЗОПАСНАЯ ЭКИПИРОВКА * ФОТО-ОТЧЁТ ПОСЛЕ ПРОГУЛКИ * РЕЙТИНГ 5.0 * ВСЕ ОКРУГА МОСКВЫ
          </div>
        </div>

        {/* Prices section */}
        <section className="section-padding" id="prices">
          <div className="section-header">
            <h2 className="section-title">ЦЕНЫ</h2>
            <span
              className="text-sm md:text-base"
              style={{ color: "var(--dark)", fontWeight: 800, textTransform: "uppercase" }}
            >
              Срочный подбор +25%
            </span>
          </div>

          <div className="menu-grid">
            {/* 20 min */}
            <div className="menu-card">
              <span className="menu-tag">Быстрый</span>
              <img
                src="https://cdn.poehali.dev/projects/6079896c-6b7b-4aa1-803c-f1f0403dfa00/files/b98cb308-c282-4326-bc28-b6c6b69aaf72.jpg"
                alt="Выгул 20 минут"
              />
              <div className="menu-card-body">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <h3>20 минут</h3>
                  <span className="price">890 ₽</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>
                  Короткая прогулка для тех, кто торопится. Выгульщик заберёт питомца и вернёт в порядке.
                </p>
              </div>
            </div>

            {/* 40 min */}
            <div className="menu-card">
              <span className="menu-tag" style={{ background: "var(--primary)", color: "white" }}>
                Хит
              </span>
              <img
                src="https://cdn.poehali.dev/projects/6079896c-6b7b-4aa1-803c-f1f0403dfa00/files/582bd34d-8f21-4627-a8ad-1b6929d3ec2f.jpg"
                alt="Выгул 40 минут"
              />
              <div className="menu-card-body">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <h3>40 минут</h3>
                  <span className="price">1 090 ₽</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>
                  Стандартная прогулка — именно столько нужно собаке для нормального самочувствия и активности.
                </p>
              </div>
            </div>

            {/* 60 min */}
            <div className="menu-card">
              <span className="menu-tag" style={{ background: "var(--accent)", color: "var(--dark)" }}>
                Полный
              </span>
              <img
                src="https://cdn.poehali.dev/projects/6079896c-6b7b-4aa1-803c-f1f0403dfa00/files/2b5853be-84c0-4e1b-b067-68add83e95b5.jpg"
                alt="Выгул 60 минут"
              />
              <div className="menu-card-body">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <h3>1 час</h3>
                  <span className="price">1 290 ₽</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>
                  Полноценная прогулка для активных питомцев. Лапки помоем, покормим и пришлём фото-отчёт.
                </p>
              </div>
            </div>
          </div>

          <div style={{ marginTop: "30px", padding: "20px", border: "var(--border)", background: "white" }}>
            <p style={{ fontWeight: 800, textTransform: "uppercase", fontSize: "14px", marginBottom: "10px" }}>
              Дополнительно:
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "8px", fontSize: "14px", color: "#555" }}>
              <span>🐕 Доп. собака на выгуле — 500 ₽</span>
              <span>🔑 Знакомство + передача ключей — 450 ₽</span>
              <span>🌙 Выгул с 00:00 до 06:00 — +25%</span>
              <span>🐾 Пробный выгул — 650 ₽</span>
              <span>🐱 Покормить кота / почистить лоток — 300 ₽</span>
              <span>🌿 Полить цветы / вынести мусор — 200 ₽</span>
            </div>
          </div>
        </section>

        {/* How it works / vibe section */}
        <section className="retro-vibe" id="how">
          <div>
            <h2 className="vibe-title">ВАШ ДРУГ В НАДЁЖНЫХ РУКАХ.</h2>
            <p className="vibe-text">
              Знакомимся, подбираем подходящего выгульщика с учётом характера питомца, гуляем — и присылаем фото-отчёт с трекером маршрута. Безопасная экипировка из 3-х элементов: ошейник, пояс, поводок. Москва, все округа.
            </p>
            <button className="btn-cta" style={{ background: "var(--dark)", color: "white", borderColor: "white" }}>
              Узнать подробнее
            </button>
          </div>
          <div
            className="vibe-img"
            style={{
              backgroundImage: `url("https://cdn.poehali.dev/projects/6079896c-6b7b-4aa1-803c-f1f0403dfa00/files/cc0da679-2880-41b3-83cc-cfe7a56a2e97.jpg")`,
            }}
          ></div>
        </section>

        {/* Steps */}
        <section className="section-padding" id="about">
          <div className="section-header">
            <h2 className="section-title">КАК ЭТО<br />РАБОТАЕТ</h2>
          </div>
          <div className="menu-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))" }}>
            {[
              { num: "01", title: "Оставляете заявку", text: "На сайте, в соцсетях или по телефону — как удобно" },
              { num: "02", title: "Уточняем детали", text: "Привычки, характер, любимые места и особенности здоровья" },
              { num: "03", title: "Подбираем выгульщика", text: "С учётом ваших пожеланий и особенностей питомца" },
              { num: "04", title: "Гуляем!", text: "Отчёт с фото и трекером маршрута сразу после прогулки" },
            ].map((step) => (
              <div
                key={step.num}
                style={{
                  border: "var(--border)",
                  padding: "24px",
                  background: "white",
                  boxShadow: "var(--shadow)",
                }}
              >
                <div
                  style={{
                    fontFamily: "Unbounded, sans-serif",
                    fontSize: "48px",
                    fontWeight: 800,
                    color: "var(--primary)",
                    lineHeight: 1,
                    marginBottom: "12px",
                  }}
                >
                  {step.num}
                </div>
                <h3 style={{ fontWeight: 800, textTransform: "uppercase", marginBottom: "8px", fontSize: "14px" }}>
                  {step.title}
                </h3>
                <p style={{ fontSize: "14px", color: "#666" }}>{step.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Stats */}
        <section className="section-padding" style={{ background: "var(--dark)", color: "white" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "40px", textAlign: "center" }}>
            {[
              { value: "5.0", label: "Средняя оценка клиентов" },
              { value: "9", label: "Округов Москвы" },
              { value: "3", label: "Элемента безопасной экипировки" },
              { value: "40", label: "Минут — стандартная прогулка" },
            ].map((stat) => (
              <div key={stat.value}>
                <div
                  style={{
                    fontFamily: "Unbounded, sans-serif",
                    fontSize: "64px",
                    fontWeight: 800,
                    color: "var(--accent)",
                    lineHeight: 1,
                  }}
                >
                  {stat.value}
                </div>
                <p style={{ marginTop: "10px", fontSize: "14px", textTransform: "uppercase", fontWeight: 700, color: "#aaa" }}>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Awards */}
        <section className="section-padding" style={{ borderTop: "var(--border)" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
            <div
              style={{
                border: "var(--border)",
                padding: "30px",
                background: "var(--accent)",
                boxShadow: "var(--shadow)",
              }}
            >
              <p style={{ fontFamily: "Unbounded, sans-serif", fontWeight: 800, fontSize: "20px", textTransform: "uppercase", lineHeight: 1.2, marginBottom: "10px" }}>
                Премия Moscow Urban Forum 2022
              </p>
              <p style={{ fontSize: "14px", color: "#444" }}>Лучший городской сервис для питомцев в столице</p>
            </div>
            <div
              style={{
                border: "var(--border)",
                padding: "30px",
                background: "white",
                boxShadow: "var(--shadow)",
              }}
            >
              <p style={{ fontFamily: "Unbounded, sans-serif", fontWeight: 800, fontSize: "20px", textTransform: "uppercase", lineHeight: 1.2, marginBottom: "10px" }}>
                Топ-100 стартапов Rusbase
              </p>
              <p style={{ fontSize: "14px", color: "#444" }}>Вошли в список перспективных стартапов по версии Rusbase</p>
            </div>
          </div>
        </section>

        {/* Instagram gallery */}
        <section className="section-padding">
          <h2 className="section-title" style={{ marginBottom: "40px", textAlign: "center" }}>
            @ГУЛЯЙ.ВИЛЯЙ
          </h2>
          <div className="social-grid">
            <div className="social-item">
              <img
                src="https://cdn.poehali.dev/projects/6079896c-6b7b-4aa1-803c-f1f0403dfa00/files/582bd34d-8f21-4627-a8ad-1b6929d3ec2f.jpg"
                alt="Прогулка 1"
              />
            </div>
            <div className="social-item">
              <img
                src="https://cdn.poehali.dev/projects/6079896c-6b7b-4aa1-803c-f1f0403dfa00/files/cc0da679-2880-41b3-83cc-cfe7a56a2e97.jpg"
                alt="Прогулка 2"
              />
            </div>
            <div className="social-item">
              <img
                src="https://cdn.poehali.dev/projects/6079896c-6b7b-4aa1-803c-f1f0403dfa00/files/b98cb308-c282-4326-bc28-b6c6b69aaf72.jpg"
                alt="Прогулка 3"
              />
            </div>
            <div className="social-item">
              <img
                src="https://cdn.poehali.dev/projects/6079896c-6b7b-4aa1-803c-f1f0403dfa00/files/2b5853be-84c0-4e1b-b067-68add83e95b5.jpg"
                alt="Прогулка 4"
              />
            </div>
          </div>
        </section>

        {/* New service banner */}
        <section style={{ margin: "0 20px 40px", border: "var(--border)", background: "var(--secondary)", color: "white", padding: "30px", boxShadow: "var(--shadow)" }}>
          <p style={{ fontWeight: 800, textTransform: "uppercase", fontSize: "12px", marginBottom: "8px", color: "var(--accent)" }}>
            Новая услуга
          </p>
          <h3 style={{ fontFamily: "Unbounded, sans-serif", fontWeight: 800, fontSize: "24px", marginBottom: "10px" }}>
            Кинология в «Гуляй Виляй»!
          </h3>
          <p style={{ fontSize: "14px", marginBottom: "20px", color: "#ccc" }}>
            Поможем воспитать собаку, адаптироваться к дому, поладить с другими питомцами и научиться новому.
          </p>
          <button className="btn-cta" style={{ background: "var(--accent)", color: "var(--dark)" }}>
            Подробнее
          </button>
        </section>
      </main>

      <footer id="faq">
        <div>
          <div className="footer-logo">ПЁС*ПАТРУЛЬ</div>
          <p style={{ color: "#666", lineHeight: 1.6 }}>
            Лучший сервис выгула собак в Москве. Рейтинг 5.0 на Яндексе. Работаем во всех округах столицы.
          </p>
        </div>
        <div className="footer-links">
          <h4>Навигация</h4>
          <ul>
            <li>
              <a href="#prices" style={{ color: "inherit", textDecoration: "none" }}>
                Цены
              </a>
            </li>
            <li>
              <a href="#how" style={{ color: "inherit", textDecoration: "none" }}>
                Как это работает
              </a>
            </li>
            <li>
              <a href="#about" style={{ color: "inherit", textDecoration: "none" }}>
                О нас
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                Политика
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-links">
          <h4>Контакты</h4>
          <ul>
            <li>Яндекс.Карты</li>
            <li>ВКонтакте</li>
            <li>Telegram</li>
            <li>Instagram</li>
          </ul>
        </div>
        <div className="footer-links">
          <h4>Часы работы</h4>
          <ul>
            <li>Пн–Пт: 08:00–22:00</li>
            <li>Сб–Вс: 09:00–21:00</li>
            <li style={{ color: "#f97316", fontWeight: 700 }}>Срочный выгул: +25%</li>
            <li>Ночной (00–06): +25%</li>
          </ul>
        </div>
      </footer>
    </>
  );
}