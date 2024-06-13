const home = {
  async render() {
    return `
    <!-- Hero Section -->
    <div id="hero" class="hero">
        <div class="hero__title">
            <h1>Jelajah Keindahan Panorama Kota-Kota Pilihan dengan Trigunar.</h1>
            <button class="cta-button">Daftar Kota</button>
        </div>
    </div>

    <!-- NEW SPOT Section -->
    <section id="new-spot" class="main-content__new-spot">
      <h2><i class=" fas fa-solid fa-bullseye"></i> NEW SPOT</h2>
      <div class="main-content__new-spot__list-card">
        <div class="destination-card">
          <img src="./lombok/desa-sade.jpeg" alt="Desa Sade" />
          <p>Destinasi</p>
          <h3>Desa Sade</h3>
          <div class="destination-card__desc">
            <div class="rating"><p> Rating: 4.3</p> </div>
            <div class="price"><p> Rp 35.000 </p> </div>
          </div>
        </div>
        <div class="destination-card">
          <img src="./lombok/desa-sade-2.jpeg" alt="Desa Sade" />
          <p>Destinasi</p>
          <h3>Gili Trawangan</h3>
          <div class="destination-card__desc">
            <div class="rating"> Rating: 4.3 </div>
            <div class="price"> Rp 35.000 </div>
          </div>
        </div>
        <div class="destination-card">
          <img src="./lombok/sembalun-1.jpg" alt="senggigi" />
          <p>Destinasi</p>
          <h3>Sembalun</h3>
          <div class="destination-card__desc">
            <div class="rating"> Rating: 4.3 </div>
            <div class="price"> Rp 35.000 </div>
          </div>
        </div>
        <div class="destination-card">
          <img src="./lombok/pantai-kuta-2.jpeg" alt="Desa Sade" />
          <p>Destinasi</p>
          <h3>Pantai Kuta</h3>
          <div class="destination-card__desc">
            <div class="rating"> Rating: 4.3 </div>
            <div class="price"> Rp 35.000 </div>
          </div>
        </div>
        <div class="destination-card">
          <img src="./lombok/gili-trawangan-2.jpg" alt="pantai sengigi" />
          <p>Destinasi</p>
          <h3>Pantai Sengigi</h3>
          <div class="destination-card__desc">
            <div class="rating"> Rating: 4.3 </div>
            <div class="price"> Rp 35.000 </div>
          </div>
        </div>
        <div class="destination-card">
          <img src="./lombok/senggigi-2.jpg" alt="Senggigi" />
          <p class="category">Destinasi</p>
          <h3>Sengigi</h3>
          <div class="destination-card__desc">
            <div class="rating"> Rating: 4.3 </div>
            <div class="price"> Rp 35.000 </div>
          </div>
        </div>
      </div>
    </section>

    <!-- EVENT Section -->
    <section class="event-section">
    <h2><i class="fas fa-calendar-alt"></i> EVENT </h2>

    <div class="swiper mySwiper">
      <div class="swiper-wrapper content">
      <div class="swiper-slide ">
      <div class="event-card">
        <div class="event-card__card-content">
          <h3>Juni</h3>
          <div class="event__item">
            <div class="event__date">
              <p>14 Juni</p>
            </div>
            <div class="event__description">
              <p> MotoGP Mandalika<br />Lombok </p>
            </div>
          </div>

          <div class="event__item">
            <div class="event__date">
              <p>18 Juni</p>
            </div>
            <div class="event__description">
              <p> Wayangan Alun-Alun<br />Banyumas </p>
            </div>
          </div>

          <div class="event__item">
            <div class="event__date">
              <p>23 Juni</p>
            </div>
            <div class="event__description">
              <p> Festival Dayung Sungai<br />Batanghari Jambi
              <p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="swiper-slide ">
    <div class="event-card">
      <div class="event-card__card-content">
        <h3>Juli</h3>
        <div class="event__item">
          <div class="event__date">
            <p>14 Juli</p>
          </div>
          <div class="event__description">
            <p> MotoGP Mandalika<br />Lombok </p>
          </div>
        </div>

        <div class="event__item">
          <div class="event__date">
            <p>18 Juli</p>
          </div>
          <div class="event__description">
            <p> Wayangan Alun-Alun<br />Banyumas </p>
          </div>
        </div>

        <div class="event__item">
          <div class="event__date">
            <p>23 Juli</p>
          </div>
          <div class="event__description">
            <p> Festival Dayung Sungai<br />Batanghari Jambi
            <p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="swiper-slide ">
  <div class="event-card">
    <div class="event-card__card-content">
      <h3>Agutus</h3>
      <div class="event__item">
        <div class="event__date">
          <p>14 Agutus</p>
        </div>
        <div class="event__description">
          <p> MotoGP Mandalika<br />Lombok </p>
        </div>
      </div>

      <div class="event__item">
        <div class="event__date">
          <p>18 Agutus</p>
        </div>
        <div class="event__description">
          <p> Wayangan Alun-Alun<br />Banyumas </p>
        </div>
      </div>

      <div class="event__item">
        <div class="event__date">
          <p>23 Agutus</p>
        </div>
        <div class="event__description">
          <p> Festival Dayung Sungai<br />Batanghari Jambi
          <p>
        </div>
      </div>
    </div>
  </div>
  <br />
</div>

      <div class="swiper-button-next"></div>
      <div class="swiper-button-prev"></div>
      
      <div class="swiper-pagination"></div>
  </section>

        <!-- Promo Section -->
        <section id="promo" class="promo">
            <div class="promo__content">
                <div class="promo__text">
                    <h2>Promo 50%</h2>
                    <p class="promo__countdown">3 <span>hari</span> : 12 <span>jam</span> : 47 <span>menit</span></p>
                    <p>Mojo Savanna merupakan lorem ipsum dolor sit amet consectetur. Feugiat bibendum varius nunc
                        tellus amet at laoreet. Nam tristique egestas quam praesent quis.</p>
                </div>
                <div class="promo__card">
                    <img src="./lombok/Desa-Sade-4.jpeg" alt="Mojo Savanna">
                    <div class="promo__card-details">
                        <h3>Destinasi</h3>
                        <h4>Desa Sade</h4>
                        <p class="promo__card-price"><del>Rp.1.000.000,-</del> <span>Rp.300.000,-</span></p>
                    </div>
                </div>
            </div>
        </section>
            `;
  },

  async afterRender() {
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 30,
      slidesPerGroup: 1,
      loop: true,
      grabCursor: true,
      loopFillGroupWithBlank: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        // min-width
        480: {
          slidesPerView: 2,
          spaceBetween: 5,
          slidesPerGroup: 1,
        },
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  },
};

export default home;
