var swiper = new Swiper(".swiperImg__pegination", {
  loop: true,
  spaceBetween: 10,
  slidesPerView: 3,
  freeMode: true,
  watchSlidesProgress: true,
});
var swiper2 = new Swiper(".swiperImg", {
  loop: true,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiperImg__arrowBtn-rightBtn",
    prevEl: ".swiperImg__arrowBtn-leftBtn",
  },
  thumbs: {
    swiper: swiper,
  },
});

var SwiperNewsPage = new Swiper('.swiper-container', {
  slidesPerView: 1,
  spaceBetween: 50,
  loop: true,
  navigation: {
      nextEl: '.question__swipperBtn-rightBtn',
      prevEl: '.question__swipperBtn-leftBtn',
  },
});

$('.news__action-btn').on('click', function() {
  for (var i = 0; i < 3; i++) {
    const newsCard__two = `
      <a href="#" class="newsCard">
        <div class="newsCard__img">
          <img src="./img/CardBG1.png" alt="CardBG">
        </div>
        <div class="newsCard__title">
          <p class="newsCard__title-date">12 ноября 2023</p>
          <p class="newsCard__title-head">Поздравляем! Новое свидетельство от РосПатента!</p>
          <p class="newsCard__title-text">Научный коллектив ИРБиС, состоящий из студентов и преподавателей, разработал интересный сервис, позволяющий при помощи программы быстро и качественно определять подлинность денежной банкноты.</p>
          <p class="newsCard__footer">Читать далее<span class="icon-arrow"></span></p>
        </div>
      </a>`;

    $('.news__two .news__content').append(newsCard__two);
  }
});


$(document).ready(function () {
  updateLastCardClass();

  $(window).on('resize', function () {
    updateLastCardClass();
  });

  $('.news__action-btn').on('click', function () {
    updateLastCardClass();
  });

  function updateLastCardClass() {
    var screenWidth = $(window).width();

    if (screenWidth < 768) {
      $('.news__two .newsCard').removeClass('newsCard--last');
      return; 
    }
    if (screenWidth > 993) {
      $('.news__two .newsCard').removeClass('newsCard--last');
      return; 
    }
    var newsCardCount = $('.news__two .newsCard').length;

    $('.news__two .newsCard').removeClass('newsCard--last');

    if (screenWidth < 993 && newsCardCount % 2 === 0) {
      $('.news__two .newsCard:nth-last-child(-n+2)').addClass('newsCard--last');
    } else if (screenWidth < 993 && newsCardCount % 2 !== 0) {
      $('.news__two .newsCard:last').addClass('newsCard--last');
    }
  }
});






// main page ----------------------------
const header = document.querySelector('.header');
const navContainer = document.querySelector('.navContainer');

const updateNavMargin = () => {
  if (window.innerWidth <= 992) {
    const headerMarginLeft = parseInt(window.getComputedStyle(header).marginLeft, 10);
    const headerMarginLeft1 = Math.max(headerMarginLeft - 20, 0); 
    navContainer.style.marginLeft = headerMarginLeft1 + 'px';
  } else {
    navContainer.style.marginLeft = '0';
  }
};

window.addEventListener('resize', updateNavMargin);
updateNavMargin();

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

  $(window).resize(function () {
    if ($(window).width() > 993) {
      $('#burger-dropdown').removeClass('open');
      $('.burger__menu-icon').removeClass('open');
      $('.burger__menu').removeClass('open');
      $('html, body').removeClass('overflow-hidden');
    }
  });
});
const videoContainersNews = document.querySelectorAll('.questionSwiper__slide-video');

videoContainersNews.forEach(videoContainer => {
  const video = videoContainer.querySelector('video');
  const playPauseBtn = videoContainer.querySelector('button');

  videoContainer.addEventListener('mouseenter', () => {
    playPauseBtn.style.opacity = '1';
  });

  videoContainer.addEventListener('mouseleave', () => {
    if (!video.paused) {
      playPauseBtn.style.opacity = '0';
    }
  });

  playPauseBtn.addEventListener('click', () => {
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  });

  video.addEventListener('ended', () => {
    playPauseBtn.style.opacity = '1';
  });

  video.addEventListener('play', () => {
    playPauseBtn.style.opacity = '0';
  });

  video.addEventListener('pause', () => {
    playPauseBtn.style.opacity = '1';
  });
});

// второй  код
const videoContainers = document.querySelectorAll('.questionSwiper__slide-video');
const videoContainer = document.getElementById('videoContainer');
const video = document.getElementById('specialtiesVideo');
const playPauseBtn = document.getElementById('playPauseBtn');
if (videoContainer) {
  videoContainer.addEventListener('mouseenter', () => {
    if (!video.paused) {
      playPauseBtn.style.opacity = '1';
    }
  });

  videoContainer.addEventListener('mouseleave', () => {
    if (!video.paused) {
      playPauseBtn.style.opacity = '0';
    }
  });

  if (playPauseBtn) {
    playPauseBtn.addEventListener('click', () => {
      if (video.paused) {
        video.play();
      } else {
        video.pause();
      }
    });
  }

  if (video) {
    video.addEventListener('ended', () => {
      playPauseBtn.style.opacity = '1';
    });

    video.addEventListener('play', () => {
      playPauseBtn.style.opacity = '0';
    });

    video.addEventListener('pause', () => {
      playPauseBtn.style.opacity = '1';
    });
  }
}







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
  const image = document.getElementById("image0_68_1872");
  const newImagePath = `./img/bg${slideIndex}.png`; // изображения  bg0.png bg1.png bg2.png
  image.setAttribute("xlink:href", newImagePath);
}





  // SwiperNews -----------
  
  const swiperContainer = document.querySelector(".newsSwiper");
  const leftBtn = document.querySelector('.news__header-leftBtn');
  const rightBtn = document.querySelector('.news__header-rightBtn');
  
  if (swiperContainer) {
    const swiper = new Swiper(swiperContainer, {
      spaceBetween: 15,
  
      breakpoints: {
        993: {
          slidesPerView: 3.2,
          slidesPerGroup: 1,
        },
        769: {
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
  
    if (leftBtn) {
      leftBtn.addEventListener('click', function (event) {
        event.preventDefault(); 
        swiper.slidePrev();
      });
    }
  
    if (rightBtn) {
      rightBtn.addEventListener('click', function (event) {
        event.preventDefault(); 
        swiper.slideNext();
      });
    }
  }
  
  
  // SwiperReviews -----------
  
  const swiperReviewsContainer = document.querySelector(".swiperReviews");
  const reviewsLeftBtn = document.querySelector('.reviewsContainer__action-leftBtn');
  const reviewsRightBtn = document.querySelector('.reviewsContainer__action-rightBtn');
  
  if (swiperReviewsContainer) {
    const SwiperReviews = new Swiper(swiperReviewsContainer, {
      spaceBetween: 15,
      breakpoints: {
        769: {
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
  
    if (reviewsLeftBtn) {
      reviewsLeftBtn.addEventListener('click', function (event) {
        event.preventDefault(); 
        SwiperReviews.slidePrev();
      });
    }
  
    if (reviewsRightBtn) {
      reviewsRightBtn.addEventListener('click', function (event) {
        event.preventDefault(); 
        SwiperReviews.slideNext();
      });
    }
  }
  document.addEventListener('DOMContentLoaded', function () {
    const iconArrows = document.querySelectorAll('.icon-arrow');
    const dropdowns = document.querySelectorAll('.navContainer__list-dropdown');
    const wrappers = document.querySelectorAll('.navContainer__list-wrapper');
    const dropdownContents = document.querySelectorAll('.navContainer__list-dropdownContent');
  
    function closeAllDropdowns() {
      iconArrows.forEach((iconArrow, index) => {
        const dropdown = dropdowns[index];
        const wrapper = wrappers[index];
        const content = dropdownContents[index];
  
        if (dropdown && wrapper && content) {
          dropdown.classList.remove('navContainer__list-dropdown--active');
          wrapper.classList.remove('navContainer__list-wrapper--active');
          content.classList.remove('navContainer__list-dropdownContent--active');
        }
      });
    }
  
    function toggleDropdown(index) {
      closeAllDropdowns();
  
      const dropdown = dropdowns[index];
      const wrapper = wrappers[index];
      const content = dropdownContents[index];
  
      if (dropdown && wrapper && content) {
        const isActive = dropdown.classList.contains('navContainer__list-dropdown--active');
  
        dropdown.classList.toggle('navContainer__list-dropdown--active', !isActive);
        wrapper.classList.toggle('navContainer__list-wrapper--active', !isActive);
        content.classList.toggle('navContainer__list-dropdownContent--active', !isActive);
      }
    }
  
    iconArrows.forEach((iconArrow, index) => {
      iconArrow.addEventListener('click', (event) => {
        event.preventDefault();
        toggleDropdown(index);
      });
    });
  
    document.addEventListener('click', function (event) {
      const isDropdown = event.target.closest('.navContainer__list-dropdown');
      if (!isDropdown) {
        closeAllDropdowns();
      }
    });
  });
  
  
  
  
  
  
  
  

  

  
jQuery(document).ready(function($){
    $("#my-accordion").accordionjs({
        activeIndex : 3,
    });
});

  //  all ----------------------------
  function expandCardCircle(event, element) {
    let timeoutId;
    let circle;
  
    function createCircle() {
      circle = document.createElement('div');
      circle.classList.add('circle');
      element.appendChild(circle);
  
      const rect = element.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
  
      circle.style.left = x + 'px';
      circle.style.top = y + 'px';
      circle.style.transform = 'translate(-50%, -50%) scale(0)';
      void circle.offsetWidth;
  
      circle.style.width = circle.style.height = Math.max(rect.width, rect.height) * 3 + 'px';
      circle.style.transform = 'translate(-50%, -50%) scale(1)';
    }
  
    function resetCardCircle() {
      if (circle) {
        circle.style.transform = 'translate(-50%, -50%) scale(0)';
        timeoutId = setTimeout(() => {
          circle.remove();
        }, 200);
      }
    }
  
    function handleMouseLeave() {
      resetCardCircle();
      element.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mousemove', checkCardCursor);
    }
  
    function checkCardCursor(e) {
      const rect = element.getBoundingClientRect();
      if (
        e.clientX < rect.left ||
        e.clientX > rect.right ||
        e.clientY < rect.top ||
        e.clientY > rect.bottom
      ) {
        resetCardCircle();
        document.removeEventListener('mousemove', checkCardCursor);
        element.removeEventListener('mouseleave', handleMouseLeave);
      }
    }
  
    createCircle();
  
    document.addEventListener('mousemove', checkCardCursor);
    element.addEventListener('mouseleave', handleMouseLeave);
  }
  
  const cards = document.querySelectorAll('.about__cardContainer-card');
  cards.forEach((card) => {
    card.addEventListener('mouseenter', (event) => expandCardCircle(event, card));
  
    card.addEventListener('mousemove', (event) => {
      event.stopPropagation();
    });
  });
  
  const cardsCollege = document.querySelectorAll('.cardCollege');
  cardsCollege.forEach((card) => {
    card.addEventListener('mouseenter', (event) => expandCardCircle(event, card));
  
    card.addEventListener('mousemove', (event) => {
      event.stopPropagation();
    });
  });
  
  

  //  grey  ----------------------------
  let timeoutIdBtn;

  function expandBtnCircle(event, element) {
    clearTimeout(timeoutIdBtn);
  
    const existingCircle = element.querySelector('.circleBtn');
    if (existingCircle) {
      return;
    }
  
    const circle = document.createElement('div');
    circle.classList.add('circleBtn');
    element.appendChild(circle);
  
    const rect = element.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
  
    circle.style.left = x + 'px';
    circle.style.top = y + 'px';
    circle.style.transform = 'translate(-50%, -50%) scale(0)';
    void circle.offsetWidth;
  
    circle.style.width = circle.style.height = Math.max(rect.width, rect.height) * 3 + 'px';
    circle.style.transform = 'translate(-50%, -50%) scale(1)';
  
    document.addEventListener('mousemove', checkBtnCursor);
  
    function checkBtnCursor(event) {
      if (
        event.clientX < rect.left ||
        event.clientX > rect.right ||
        event.clientY < rect.top ||
        event.clientY > rect.bottom
      ) {
        resetBtnCircle(element);
        document.removeEventListener('mousemove', checkBtnCursor);
      }
    }
  }
  
  function resetBtnCircle(element) {
    const circle = element.querySelector('.circleBtn');
    if (circle) {
      circle.style.transform = 'translate(-50%, -50%) scale(0)';
      timeoutIdBtn = setTimeout(() => {
        circle.remove();
      }, 200);
    }
  }
  
  const greyBtns = document.querySelectorAll('.grayBtn');
  greyBtns.forEach((btn) => {
    btn.addEventListener('mouseenter', (event) => expandBtnCircle(event, btn));
    btn.addEventListener('mouseleave', () => {
      resetBtnCircle(btn);
    });
    btn.addEventListener('mousemove', (event) => {
      event.stopPropagation();
    });
  });
  
  //  pink ----------------------------
  let timeoutIdBtnPink;

  function expandBtnPinkCircle(event, element) {
    clearTimeout(timeoutIdBtnPink);
  
    const existingCircle = element.querySelector('.circleBtn-pink');
    if (existingCircle) {
      return;
    }
  
    const circle = document.createElement('div');
    circle.classList.add('circleBtn-pink');
    element.appendChild(circle);
  
    const rect = element.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
  
    circle.style.left = x + 'px';
    circle.style.top = y + 'px';
    circle.style.transform = 'translate(-50%, -50%) scale(0)';
    void circle.offsetWidth;
  
    circle.style.width = circle.style.height = Math.max(rect.width, rect.height) * 3 + 'px';
    circle.style.transform = 'translate(-50%, -50%) scale(1)';
  
    document.addEventListener('mousemove', checkBtnPinkCursor);
  
    function checkBtnPinkCursor(event) {
      if (
        event.clientX < rect.left ||
        event.clientX > rect.right ||
        event.clientY < rect.top ||
        event.clientY > rect.bottom
      ) {
        resetBtnPinkCircle(element);
        document.removeEventListener('mousemove', checkBtnPinkCursor);
      }
    }
  }
  
  function resetBtnPinkCircle(element) {
    const circle = element.querySelector('.circleBtn-pink');
    if (circle) {
      circle.style.transform = 'translate(-50%, -50%) scale(0)';
      timeoutIdBtnPink = setTimeout(() => {
        circle.remove();
      }, 200);
    }
  }
  
  const pinkBtns = document.querySelectorAll('.pinkBtn');
  pinkBtns.forEach((btn) => {
    btn.addEventListener('mouseenter', (event) => expandBtnPinkCircle(event, btn));
    btn.addEventListener('mouseleave', () => {
      resetBtnPinkCircle(btn);
    });
    btn.addEventListener('mousemove', (event) => {
      event.stopPropagation();
    });
  });
  
// deatil ----------------------------------------

let timeoutIdBtnDetail;

function expandBtnDetailCircle(event, element) {
  clearTimeout(timeoutIdBtnDetail);

  const existingCircle = element.querySelector('.circleBtn-detailBtn');
  if (existingCircle) {
    return;
  }

  const circle = document.createElement('div');
  circle.classList.add('circleBtn-detailBtn');
  element.appendChild(circle);

  const rect = element.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;

  circle.style.left = x + 'px';
  circle.style.top = y + 'px';
  circle.style.transform = 'translate(-50%, -50%) scale(0)';
  void circle.offsetWidth;

  circle.style.width = circle.style.height = Math.max(rect.width, rect.height) * 3 + 'px';
  circle.style.transform = 'translate(-50%, -50%) scale(1)';

  document.addEventListener('mousemove', checkBtnDetailCursor);

  function checkBtnDetailCursor(event) {
    if (
      event.clientX < rect.left ||
      event.clientX > rect.right ||
      event.clientY < rect.top ||
      event.clientY > rect.bottom
    ) {
      resetBtnDetailCircle(element);
      document.removeEventListener('mousemove', checkBtnDetailCursor);
    }
  }
}

function resetBtnDetailCircle(element) {
  const circle = element.querySelector('.circleBtn-detailBtn');
  if (circle) {
    circle.style.transform = 'translate(-50%, -50%) scale(0)';
    timeoutIdBtnDetail = setTimeout(() => {
      circle.remove();
    }, 200);
  }
}

const detailBtns = document.querySelectorAll('.cardCollege__content-detailBtn');
detailBtns.forEach((btn) => {
  btn.addEventListener('mouseenter', (event) => expandBtnDetailCircle(event, btn));
  btn.addEventListener('mouseleave', () => {
    resetBtnDetailCircle(btn);
  });
  btn.addEventListener('mousemove', (event) => {
    event.stopPropagation();
  });
});
