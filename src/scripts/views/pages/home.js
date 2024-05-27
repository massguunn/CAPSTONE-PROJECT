const home = {
  async render() {
    return `
    <div id="hero" class="hero">
    <div class="hero__title">
        <h1>Jelajah Keindahan Panorama dengan Trigunar.</h1>
        <button class="cta-button">Daftar Kota</button>
    </div>
</div>
<section id="new-spot" class="main-content__new-spot">
            <h2>NEW SPOT</h2>
            <div class="main-content__new-spot__list-card">
                <div class="destination-card">
                    <img src="./lombok/desa-sade.jpeg" alt="Desa Sade" />
                    <h3>Desa Sade</h3>
                    <p>Destinasi</p>
                    <div class="rating"> Rating : 4.3 </div>
                </div>
                <div class="destination-card">
                <img src="./lombok/desa-sade-2.jpeg" alt="Desa Sade" />
                    <h3>Gili Trawangan</h3>
                    <p>Destinasi</p>
                    <div class="rating"> Rating : 4.3 </div>
                </div>
                <div class="destination-card">
                    <img src="./lombok/sembalun-1.jpg" alt="senggigi" />
                    <h3>Sembalun</h3>
                    <p>Destinasi</p>
                    <div class="rating"> Rating : 4.3 </div>
                </div>
                <div class="destination-card">
                <img src="./lombok/pantai-kuta-2.jpeg" alt="Desa Sade" />
                    <h3>Pantai Kuta</h3>
                    <p>Destinasi</p>
                    <div class="rating"> Rating : 4.3 </div>
                </div>
                <div class="destination-card">
                <img src="./lombok/gili-trawangan-2.jpg" alt="pantai sengigi" />
                    <h3>Pantai Sengigi</h3>
                    <p>Destinasi</p>
                    <div class="rating"> Rating : 4.3 </div>
                </div>
                <div class="destination-card">
                <img src="./lombok/senggigi-2.jpg" alt="Senggigi" />
                    <h3>Sengigi</h3>
                    <p>Destinasi</p>
                    <div class="rating"> Rating : 4.3 </div>
                </div>
            </div>
        </section>

        <section id="event" class="event">
        <h2><i class="fas fa-calendar-alt"></i> EVENT</h2>
        <div class="event__carousel">
            <button class="carousel__button carousel__button--left is-hidden" aria-label="Previous">
                <span>&lt;</span>
            </button>
            <div class="pembungkus-event">
                <div class="carousel__track-container">
                    <ul class="carousel__track">
                        <li class="carousel__slide current-slide">
                            <h3>Juni</h3>
                            <div class="event__item">
                                <div class="event__date">14</div>
                                <div class="event__description">
                                    MotoGP Mandalika<br />Lombok
                                </div>
                            </div>
                            <div class="event__item">
                                <div class="event__date">18</div>
                                <div class="event__description">
                                    Wayangan Alun-Alun<br />Banyumas
                                </div>
                            </div>
                            <div class="event__item">
                                <div class="event__date">23</div>
                                <div class="event__description">
                                    Festival Dayung Sungai<br />Batanghari Jambi
                                </div>
                            </div>
                            <h3>Juli</h3>
                            <div class="event__item">
                                <div class="event__date">10</div>
                                <div class="event__description">Bau Nyale<br />Lombok</div>
                            </div>
                            <div class="event__item">
                                <div class="event__date">18</div>
                                <div class="event__description">
                                    Festival Makanan Rita Mall<br />Banyumas
                                </div>
                            </div>
                        </li>
                        <li class="carousel__slide">
                            <h3>Agustus</h3>
                            <div class="event__item">
                                <div class="event__date">5</div>
                                <div class="event__description">
                                    Festival Merdeka<br />Jakarta
                                </div>
                            </div>
                            <div class="event__item">
                                <div class="event__date">17</div>
                                <div class="event__description">
                                    Lomba Panjat Pinang<br />Surabaya
                                </div>
                            </div>
                            <div class="event__item">
                                <div class="event__date">25</div>
                                <div class="event__description">
                                    Karnaval Kemerdekaan<br />Bandung
                                </div>
                            </div>
                            <h3>September</h3>
                            <div class="event__item">
                                <div class="event__date">10</div>
                                <div class="event__description">Festival Film<br />Yogyakarta</div>
                            </div>
                            <div class="event__item">
                                <div class="event__date">18</div>
                                <div class="event__description">
                                    Pameran Seni<br />Bali
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <button class="carousel__button carousel__button--right" aria-label="Next">
                <span>&gt;</span>
            </button>
        </div>
        <div class="carousel__nav">
            <button class="carousel__indicator current-slide"></button>
            <button class="carousel__indicator"></button>
        </div>
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

  async afterRender() {},
};

export default home;
