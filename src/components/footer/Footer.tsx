import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTelegramPlane,
  FaTwitterSquare,
  FaYoutubeSquare,
} from "react-icons/fa";
import styles from "./Footer.module.scss";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <hr id={styles.footerHr} />
      <div className={styles.footerContent}>
        <div>Всі права захищені ©K-spot Cinema, 2023</div>
        <div className={styles.social}>
          <Link to="">
            <FaInstagramSquare />
          </Link>
          <Link to="">
            <FaFacebookSquare />
          </Link>
          <Link to="">
            <FaTwitterSquare />
          </Link>
          <Link to="">
            <FaYoutubeSquare />
          </Link>
          <Link to="">
            <FaTelegramPlane />
          </Link>
        </div>
        <div>Розробка сайту кінотеатру K-spot</div>
      </div>
    </footer>
  );
};

export default Footer;
