import styles from '../css/homepage.module.css';
import Footer from "./footer";
import travel from '../css/travel.module.css';
import { useSelector } from "react-redux";
import NavigationForTravels from "./NavigationForTravels";
import BookingForm from "./bookingForm";
import React, { useState, useEffect } from "react";


function TravelPage()
{

    const {trips, selectedTripId} = useSelector((state) => state.travels);
    const trip = trips.find((t) => t.id === selectedTripId);

    const [showBooking, setShowBooking] = useState(false);

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

    if(!trip)
    {
        return(
            <div>
                <main style={{ 
                    marginBlockStart: '20%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    }}>
                    <h2>Путешествие не выбрано.</h2>
                    <h2>Вернитесь на предыдущую страницу.</h2>
                </main>
            </div>
        );
    }

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        
        <div
            style={{backgroundImage: `url(${trip.main_img})`}}
            className={travel.travelpage}>
            <div className={styles.go_up} onClick={scrollToTop}>
                <span className={styles.go_up_text}>↑</span>
            </div>
            <NavigationForTravels />
            <main>

                <div className={travel.travelpage_block_one}>
                    <div className={travel.travelpage_text}>
                        <span className={travel.travelpage_first}>{trip.heading_one}</span>
                        <span className={travel.travelpage_first}>{trip.heading_two}</span>
                    </div>
                    <button className={travel.travelpage_button} onClick={() => setShowBooking(true)}>Забронировать</button>
                </div>
               
               <div className={travel.travelpage_block_two}>
                    <div className={travel.content_block}>
                        <span className={travel.info}>Немного о городе</span>
                        <span className={travel.info_text}>
                         {trip.description}
                        </span>
                    </div>
                    <div 
                       style={{backgroundImage: `url(${trip.info_img})`}}
                       className={travel.foto}></div>
               </div>

               <div className={travel.travelpage_block_three}>
                    <span className={travel.text_programm}>Программа</span>
                    <span className={travel.text_type}><b>Тип:</b>{trip.type}</span>
                    <span className={travel.text_type}><b>Продолжительность:</b>{trip.duration}</span>
                    <span className={travel.text_view}>Что увидите</span>

                    <div className={travel.programm_info}>

                        <div className={travel.block_info_obj}>
                            <span className={travel.name_obj}>{trip.one}</span>
                            <span className={travel.info_obj}>{trip.one_desc}</span>
                            <div 
                                style={{backgroundImage: `url(${trip.one_img})`}}
                                className={travel.foto_obj}></div>
                        </div>

                        <div className={travel.block_info_obj}>
                            <span className={travel.name_obj}>{trip.two}</span>
                            <span className={travel.info_obj}>{trip.two_desc}</span>
                            <div 
                                style={{backgroundImage: `url(${trip.two_img})`}}
                                className={travel.foto_obj}
                            ></div>
                        </div>

                    </div>

                    <div className={travel.programm_info}>
                        <div className={travel.block_info_obj}>
                            <span className={travel.name_obj}>{trip.three}</span>
                            <span className={travel.info_obj}>{trip.three_desc}</span>
                            <div 
                                style={{backgroundImage: `url(${trip.three_img})`}}
                                className={travel.foto_obj}></div>
                        </div>

                        <div className={travel.block_info_obj}>
                            <span className={travel.name_obj}>{trip.four}</span>
                            <span className={travel.info_obj}>{trip.four_desc}</span>
                            <div 
                                style={{backgroundImage: `url(${trip.four_img})`}}
                                className={travel.foto_obj}></div>
                        </div>
                    </div>
               </div>

                <div className={travel.travelpage_block_four}>
                    <span className={travel.travel_plan_text}>План путешествия</span>
                    <div className={travel.days_content}>
                        {trip.program.map((item, index) => (
                        <div className={travel.day} key={index}>
                            <span className={travel.day_num}>{item.day}</span>
                            <span className={travel.day_info}>{item.text}</span>
                        </div>
                        ))}
                    </div>
                    <span className={travel.cost}>Стоимость: {trip.price} USD</span>
                    <button className={travel.button_to_book} onClick={() => setShowBooking(true)}>Забронировать</button>
                </div>

                {showBooking && <BookingForm onClose={() => setShowBooking(false)} />}
            </main>
            <Footer/>
        </div>
    )
}

export default TravelPage;
