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
// Аккордеон на главной странице

const handleAccordion = (() => {
  const accordion = document.getElementById('accordion');

  const hideAll = () => {
    const h3El = accordion.querySelectorAll('h3');
    const divEl = accordion.querySelectorAll('.questions__text');

    for (let i = 0; i < h3El.length; i++) {
      h3El[i].classList.remove('questions__title--select');
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

          if (targ.classList.contains('questions__title--select')) {
            hideAll();
          } else {
            hideAll();
            targ.classList.add('questions__title--select');
            showText(targ.nextElementSibling);
          }
        });
      }
    }
  };
})();

handleAccordion.manageAccordion();