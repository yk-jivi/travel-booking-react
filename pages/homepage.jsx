import React, { useRef, useState, useEffect } from "react";
import styles from '../css/homepage.module.css';
import Navigation from "./navigation";
import Footer from "./footer";
import BookingForm from "./bookingForm";

function HomePage() {
    const [showBooking, setShowBooking] = useState(false);
    const aboutRef = useRef(null);
    const aboutProgramm = useRef(null);


    useEffect(() => {
        if (showBooking) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [showBooking]);


    const scrollToAbout = () => {
        aboutRef.current.scrollIntoView({ behavior: "smooth" });
    };

    const scrollToProgramm = () => {
        aboutProgramm.current.scrollIntoView({ behavior: "smooth" });
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <div className={styles.homepage}>
            <div className={styles.go_up} onClick={scrollToTop}>
                    <span className={styles.go_up_text}>↑</span>
            </div>
            
            <Navigation scrollToAbout={scrollToAbout} scrollToProgramm={scrollToProgramm} />

            <main>
                <div className={styles.text}>
                    <span className={styles.bel}>Где живёт</span>
                    <span className={styles.bel}> белорусская</span> 
                    <span className={styles.bel}> душа?</span>
                </div>

                <div className={styles.container_one}>
                    <div ref={aboutRef} className={styles.about_us}>О нас</div>
                    <div className={styles.info}>
                        <div className={styles.foto}></div>
                        <div className={styles.container_for_text}>
                            <p className={styles.text_about_us}>«Беларусь сквозь сердце» — это больше, чем просто проект о путешествиях.</p>
                            <p className={styles.text_about_us}>Это приглашение почувствовать страну так, как чувствуют её те, кто влюблён в каждую тропинку, каждое озеро, каждую легенду.</p>
                        </div>
                    </div>
                </div>

                <div className={styles.container_two}>
                    <span className={styles.heart}>Наш путь сквозь сердце страны:</span>

                    <div className={styles.block_info}>
                        <div className={styles.block}>
                            <span className={styles.infoblock}>Создаём маршруты по малоизвестным, но удивительным местам</span>
                        </div>
                        <div className={styles.block}>
                            <span className={styles.infoblock}>Посещаем достопримечательности — от легендарных замков и 
                                монастырей до природных чудес, музеев и городских тайников</span>
                        </div>
                        <div className={styles.block}>
                            <span className={styles.infoblock}>Делимся историями, фото и эмоциями из наших поездок</span>
                        </div>
                        <div className={styles.block}>
                            <span className={styles.infoblock}>Помогаем путешественникам открыть Беларусь вне шаблонов</span>
                        </div>
                        <div className={styles.block}>
                            <span className={styles.infoblock}>Исследуем культурные коды, традиции и гастрономию каждого уголка страны</span>
                        </div>
                        <div className={styles.block}>
                            <span className={styles.infoblock}>Организуем тематические походы, велопоездки и экспедиции по регионам</span>
                        </div>
                    </div>
                </div>

                <div className={styles.container_three}>
                    <div className={styles.general_info}>
                        <div className={styles.block_text}>
                            <span ref={aboutProgramm} className={styles.one_text}>Общая программа</span>
                            <span className={styles.two_text}><b>Продолжительность:</b> 8 дней/ 7 ночей</span>
                            <span className={styles.three_text}><b>Формат:</b> автобусный тур с проживанием и экскурсионной программой</span>
                            <span className={styles.four_text}><b>Старт и финиш:</b> Минск</span>
                        </div>
                        <div className={styles.foto_Minsk}></div>
                    </div>
                    <div className={styles.line}></div>

                    <div className={styles.days_info}>
                        <div className={styles.day_block}>
                            <span className={styles.day}>День 1</span>
                            <span className={styles.info_day}>Минск: знакомство с сердцем страны</span>
                        </div>
                        <div className={styles.day_block}>
                            <span className={styles.day}>День 2</span>
                            <span className={styles.info_day}>Заславль и Воложин: древность и лес</span>
                        </div>
                    
                        <div className={styles.day_block}>
                            <span className={styles.day}>День 3</span>
                            <span className={styles.info_day}>Мир и Несвиж: замки и легенды</span>
                        </div>
                        <div className={styles.day_block_last}>
                            <span className={styles.day}>День 4</span>
                            <span className={styles.info_day}>Березинский биосферный заповедник</span>
                        </div>
                    </div>

                    <div className={styles.days_info}>
                        <div className={styles.day_block}>
                            <span className={styles.day}>День 5</span>
                            <span className={styles.info_day}>Полоцк: духовность и история</span>
                        </div>
                        <div className={styles.day_block}>
                            <span className={styles.day}>День 6</span>
                            <span className={styles.info_day}>Витебск: город Шагала</span>
                        </div>
                        <div className={styles.day_block}>
                            <span className={styles.day}>День 7</span>
                            <span className={styles.info_day}>Озеро Нарочь: отдых и размышления</span>
                        </div>
                        <div className={styles.day_block_last}>
                            <span className={styles.day}>День 8</span>
                            <span className={styles.info_day}>Возвращение в Минск</span>
                        </div>
                    </div>
                </div>

                <div className={styles.container_four}>
                    <div className={styles.general_cost}>
                        <span className={styles.cost_text}>Общая стоимость:</span>
                        <span className={styles.cost}>580 USD</span>
                    </div>
                    <div className={styles.to_book_block}>
                        <button className={styles.to_book} onClick={() => setShowBooking(true)}>Забронировать</button>
                        <span className={styles.to_book_text}>*При бронировании вы получаете подтверждение и подробности программы</span>
                    </div>
                </div>
                {showBooking && <BookingForm onClose={() => setShowBooking(false)} />}
            </main>
            <Footer />
        </div>
    );
}

export default HomePage;
