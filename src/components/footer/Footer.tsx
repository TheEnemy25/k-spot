import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTelegramPlane,
  FaTwitterSquare,
  FaYoutubeSquare,
} from "react-icons/fa";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <hr id={styles.footerHr} />
      <div className={styles.footerContent}>
        <div>Всі права захищені ©K-spot Cinema, 2023</div>
        <div className={styles.social}>
          <a href="">
            <FaInstagramSquare />
          </a>
          <a href="">
            <FaFacebookSquare />
          </a>
          <a href="">
            <FaTwitterSquare />
          </a>
          <a href="">
            <FaYoutubeSquare />
          </a>
          <a href="">
            <FaTelegramPlane />
          </a>
        </div>
        <div>Розробка сайту кінотеатру K-spot</div>
      </div>
    </footer>
  );
};

export default Footer;
