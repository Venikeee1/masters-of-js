import '../css/styles.scss';
import 'swiper/swiper.min.css';
import 'swiper/components/effect-fade/effect-fade.min.css';
import Swiper from 'swiper';
// import svg from '../img/banjo.svg';

// const galleryIconRef = document.querySelector('.gallery-icon');
// galleryIconRef.innerHTML = svg;

const swiper = new Swiper('.swiper-container', {
  speed: 400,
  // spaceBetween: 100,
  effect: 'fade',
  slidesPerView: 1,
  fadeEffect: {
    crossFade: true,
  },
});
