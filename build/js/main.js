"use strict";

// Мобильное бургер-меню
const handleMobileMenu = (() => {
  const siteNavigation = document.querySelector('.page-header');
  const siteNavigationToggle = document.querySelector('.page-header__toggle');
  const body = document.querySelector('body');
  return {
    showNav: () => {
      if (siteNavigationToggle) {
        siteNavigationToggle.addEventListener('click', evt => {
          evt.preventDefault();
          siteNavigation.classList.toggle('page-header--open');
          body.style.overflow = 'hidden';

          if (!siteNavigation.classList.contains('page-header--open')) {
            body.style.overflow = 'scroll';
          }
        });
      }
    } // clickNavLink: () => {
    //   const siteNavigation = document.querySelector('.main-nav');
    //   const siteNavigationList = siteNavigation.querySelector('ul');
    //   const siteNavigationItems = siteNavigationList.children;
    //   for (const item of siteNavigationItems) {
    //     item.addEventListener('click', () => {
    //       siteNavigation.classList.remove('main-nav--opened');
    //       siteNavigation.classList.add('main-nav--closed');
    //       body.style.overflow = 'scroll';
    //     })
    //   }
    // }

  };
})();

handleMobileMenu.showNav(); // handleMobileMenu.clickNavLink();
// Аккордеон

const handleAccordion = (() => {
  const accordion = document.getElementById('accordion');

  const hideAll = () => {
    const h3El = accordion.querySelectorAll('h3');
    const divEl = accordion.querySelectorAll('#tab-content');

    for (let i = 0; i < h3El.length; i++) {
      h3El[i].classList.remove('accordion-title--select');
    }

    for (let i = 0; i < divEl.length; i++) {
      divEl[i].style.height = '0';
    }
  };

  const showText = textEl => {
    textEl.style.height = textEl.scrollHeight + 'px';
  };

  return {
    manageAccordion: () => {
      if (accordion) {
        accordion.addEventListener('click', evt => {
          const targ = evt.target;
          if (targ.tagName !== 'H3') return;

          if (targ.classList.contains('accordion-title--select')) {
            hideAll();
          } else {
            hideAll();
            targ.classList.add('accordion-title--select');
            showText(targ.nextElementSibling);
          }
        });
      }
    }
  };
})();

handleAccordion.manageAccordion(); // Слайдер Swiper
// const swiper = new Swiper('.swiper', {
//   navigation: {
//     nextEl: '.swiper-button-next-slide',
//     prevEl: '.swiper-button-prev-slide',
//   },
//   pagination: {
//     el: '.swiper-pagination',
//     clickable: true,
//   },
// });
// Появление попапа с фильтром

const handlePopup = (() => {
  const filterButton = document.querySelector('.goods__button-filter');
  const filterPopup = document.querySelector('.popup-filter');
  const filterPopupCloseButton = document.querySelector('.popup-filter__close-button');
  const popupOverlay = document.querySelector('.overlay');
  const ESC_KEY_CODE = 27;
  return {
    showPopup: () => {
      if (filterButton) {
        filterButton.addEventListener('click', evt => {
          evt.preventDefault();
          filterPopup.classList.remove('popup-filter--hide');
          popupOverlay.classList.add('overlay--active');
        });
        document.addEventListener('keydown', evt => {
          if (evt.keyCode === ESC_KEY_CODE) {
            filterPopup.classList.add('popup-filter--hide');
            popupOverlay.classList.remove('overlay--active');
          }
        });
        filterPopupCloseButton.addEventListener('click', evt => {
          evt.preventDefault();
          filterPopup.classList.add('popup-filter--hide');
          popupOverlay.classList.remove('overlay--active');
        });
      }
    },
    useFilterAccordion: () => {
      const filterAccordion = document.querySelector('.filter');

      const hideAll = () => {
        const h3El = filterAccordion.querySelectorAll('h3');
        const divEl = filterAccordion.querySelectorAll('#tab-content');

        for (let i = 0; i < h3El.length; i++) {
          h3El[i].classList.remove('accordion-title--select');
        }

        for (let i = 0; i < divEl.length; i++) {
          divEl[i].style.height = '0';
        }
      };

      const showText = textEl => {
        textEl.style.height = textEl.scrollHeight + 'px';
      };

      if (filterAccordion) {
        filterAccordion.addEventListener('click', evt => {
          const targ = evt.target;
          if (targ.tagName !== 'H3') return;

          if (targ.classList.contains('accordion-title--select')) {
            hideAll();
          } else {
            hideAll();
            targ.classList.add('accordion-title--select');
            showText(targ.nextElementSibling);
          }
        });
      }
    }
  };
})();

handlePopup.showPopup();
handlePopup.useFilterAccordion();