import React from "react";
import footer from '../css/footer.module.css';

function Footer() {
  return (
    <footer>
      <div className={footer.line_footer}></div>
      <div className={footer.footer_container}>
        <div className={footer.footer_text}>
          <span className={footer.t_one}>Поддержка</span>
          <a className={footer.t_other} href="#">Правила возврата</a>
          <a className={footer.t_other} href="#">Связаться с нами</a>
          <a className={footer.t_other} href="#">Политика конфидециальности</a>
        </div>
        <div className={footer.icons_and_text}>
          <span className={footer.social_text}>Мы в соц.сетях</span>
          <div className={footer.icons}>
            <a href="https://www.facebook.com/">
              <img className={footer.icon} src="../img/facebook.png" />
            </a>
            <a href="https://www.instagram.com/">
              <img className={footer.icon} src="../img/instagram.png" />
            </a>
            <a href="https://www.youtube.com/">
              <img className={footer.icon} src="../img/youtube.png" />
            </a>   
          </div>
        </div>
      </div>
      <span className={footer.footer_text_rights}>©Беларусь сквозь сердце, 2025. Все права защищены</span>
    </footer>
  );
}

export default Footer;
