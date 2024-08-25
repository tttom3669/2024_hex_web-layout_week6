import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

// import Swiper styles

const swiperArticle = new Swiper('.swiper-article', {
  modules: [Navigation, Pagination],
  breakpoints: {
    576: {
      slidesPerView: 2,
      spaceBetween: 48,
    },
  },
  slidesPerView: 1.08,
  spaceBetween: 24,
  pagination: {
    el: '.swiper-article__pagination',
    type: 'fraction',
  },
  navigation: {
    nextEl: '.swiper-article__btn-next',
    prevEl: '.swiper-article__btn-prev',
  },
});

const swiperPopularTheme = new Swiper('.swiper-popular-theme', {
  breakpoints: {
    576: {
      slidesPerView: 1,
    },
  },
  slidesPerView: 1.08,
  spaceBetween: 24,
});

const swiperLife = new Swiper('.swiper-life', {
  breakpoints: {
    768: {
      slidesPerView: 3,
      allowTouchMove: true,
    },
  },
  allowTouchMove: false,
  slidesPerView: 1,
  spaceBetween: 24,
  navigation: {
    nextEl: '.swiper-life__btn-next',
    prevEl: '.swiper-life__btn-prev',
  },
});

const swiperProject = new Swiper('.swiper-project', {
  breakpoints: {
    576: {
      slidesPerView: 1,
    },
  },
  slidesPerView: 1.08,
  spaceBetween: 24,
});
