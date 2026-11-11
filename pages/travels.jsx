import React, { useRef } from "react";
import { Link } from "react-router-dom";
import styles from '../css/homepage.module.css';
import travels from '../css/travels.module.css';
import Footer from "./footer";
import { useDispatch } from "react-redux";
import { selectTrip } from '../store/travelSlice.js';
import { useNavigate } from "react-router-dom";
import NavigationForTravels from "./NavigationForTravels";

function Travels() {
  
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleMoreClick = (id) => {
    dispatch(selectTrip(id));
    navigate("/TravelPage");
  }

  const travelsRef = useRef(null);
  const scrollToTravels = () => {
        travelsRef.current.scrollIntoView({ behavior: "smooth" });
    };

  return (  
    <div className={travels.travels}>
      <NavigationForTravels scrollToTravels={scrollToTravels}/>

      <main>
        <div className={travels.text_for_travels}>
          <span className={travels.where}>Так куда </span>
          <span className={travels.where}>держим путь</span>
          <span className={travels.where}>на этот раз?</span>
        </div>

        <div className={styles.container_one}>
          <div ref={travelsRef} className={travels.available_travels}>Доступные путешествия</div>
          <div className={travels.info}>
            <div className={travels.travels_block}>

              <div className={travels.travel}>
                <div className={travels.travel_foto_Mozyr}></div>
                <span className={travels.travel_name}>Поездка в Мозырь</span>
                <span className={travels.travel_view}>Природно-исторический отдых</span>
                <button className={travels.travel_info}
                  onClick={() => handleMoreClick(1)}>
                  Подробнее</button>
              </div>

              <div className={travels.travel}>
                <div className={travels.travel_foto_Grodno}></div>
                <span className={travels.travel_name}>Поездка в Гродно</span>
                <span className={travels.travel_view}>Культурно-архитектурный тур с прогулками по природе</span>
                <button className={travels.travel_info}
                  onClick={() => handleMoreClick(2)}>
                  Подробнее</button>
              </div>

              <div className={travels.travel}>
                <div className={travels.travel_foto_Vitebsk}></div>
                <span className={travels.travel_name}>Поездка в Витебск</span>
                <span className={travels.travel_view}>Культурно-архитектурный тур с прогулками по природе</span>
                <button className={travels.travel_info}
                  onClick={() => handleMoreClick(3)}>
                  Подробнее</button>
              </div>

            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Travels;
