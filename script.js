$(document).ready(function () {
  $('.burger__menu-icon').click(function (event) {
    event.stopPropagation();

    const burgerDropdown = $('#burger-dropdown');
    burgerDropdown.toggleClass('open');

    const animatedIcon3 = $('.burger__menu-icon');
    animatedIcon3.toggleClass('open');

    $('.burger__menu').toggleClass('open');

    if ($('.burger__menu').hasClass('open')) {
      $('html, body').addClass('overflow-hidden');
    } else {
      $('html, body').removeClass('overflow-hidden');
    }
  });

  $('.burger__menu-list .burger__menu-action').click(function (event) {
    event.stopPropagation();

    const dropdownContent = $(this).next('.burger__menu-dropContent');
    dropdownContent.toggleClass('show'); 
    $(this).toggleClass('active');
  });

  $('.burger__menu-list .burger__menu-dropContent a').click(function (event) {
    event.stopPropagation();
  });

});



// SwiperHero -----------
const swiperHero = new Swiper(".hero__swiper", {
  spaceBetween: 20, 
  pagination: {
    el: ".hero__pagination",
    clickable: true,
  },
  on: {
    slideChange: function () {
      updateImage(this.realIndex);
    },
  },
});

document.querySelectorAll(".hero__pagination.swiper-pagination-bullet").forEach((bullet) => {
  bullet.addEventListener("click", () => {
    swiperHero.slideTo(bullet.getAttribute("data-slide-index"));
  });
});

function updateImage(slideIndex) {
  const imgContainer = document.querySelector(".hero__img-container");
  const imagePaths = [
    "./img/Intersect.png",
    "./img/CardBG1.png",
    "./img/CardBG2.png",
    "./img/CardBG3.png",
  ];

  if (slideIndex >= 0 && slideIndex < imagePaths.length) {
    imgContainer.style.backgroundImage = `url("${imagePaths[slideIndex]}")`;
  }
}


const header = document.querySelector('.header');
const navContainer = document.querySelector('.navContainer');

const updateNavMargin = () => {
  if (window.innerWidth <= 992) {
    const headerMarginLeft = window.getComputedStyle(header).marginLeft;
    navContainer.style.marginLeft = headerMarginLeft;
  } else {
    navContainer.style.marginLeft = '0';
  }
};

window.addEventListener('load', updateNavMargin);
window.addEventListener('resize', updateNavMargin);

  // SwiperNews -----------
  
  const swiper = new Swiper(".newsSwiper", {
    spaceBetween: 15,

    breakpoints: {
      993: {
        slidesPerView: 3.2,
        slidesPerGroup: 1,
      },
      768: {
        slidesPerView: 2.2, 
        slidesPerGroup: 1,
      },
      355: {
        slidesPerView: 1.2, 
        slidesPerGroup: 1,
      },
      0: {
        slidesPerView: 1, 
        slidesPerGroup: 1,
      },
    },
  });
  
  document.querySelector('.news__header-leftBtn').addEventListener('click', function (event) {
    event.preventDefault(); 
    swiper.slidePrev();
  });
  
  document.querySelector('.news__header-rightBtn').addEventListener('click', function (event) {
    event.preventDefault(); 
    swiper.slideNext();
  });
  
  
  // SwiperReviews -----------
  
  
  
  const SwiperReviews = new Swiper(".swiperReviews", {
    spaceBetween: 15,
    breakpoints: {
      768: {
        slidesPerView: 2.2,
        slidesPerGroup: 1, 
      },
      355: {
        slidesPerView: 1.2, 
        slidesPerGroup: 1,
      },
      0: {
        slidesPerView: 1, 
        slidesPerGroup: 1,
      },
    },
  });
  
document.querySelector('.reviewsContainer__action-leftBtn').addEventListener('click', function (event) {
    event.preventDefault(); 
    SwiperReviews.slidePrev();
});

document.querySelector('.reviewsContainer__action-rightBtn').addEventListener('click', function (event) {
    event.preventDefault(); 
    SwiperReviews.slideNext();
});



  

  
jQuery(document).ready(function($){
    $("#my-accordion").accordionjs({
        activeIndex : 3,
    });
});


const videoContainer = document.getElementById('videoContainer');
const video = videoContainer.querySelector('video');
const playPauseBtn = videoContainer.querySelector('#playPauseBtn');

playPauseBtn.style.opacity = '1';

// при наведении
videoContainer.addEventListener('mouseenter', () => {
    playPauseBtn.style.opacity = '1';
});

// Скрыть кнопку 
videoContainer.addEventListener('mouseleave', () => {
    if (video.paused) {
        playPauseBtn.style.opacity = '1';
    } else {
        playPauseBtn.style.opacity = '0';
    }
});

video.addEventListener('play', () => {
    playPauseBtn.style.opacity = '0';
});

video.addEventListener('pause', () => {
    playPauseBtn.style.opacity = '1';
});

playPauseBtn.addEventListener('click', function() {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
});

