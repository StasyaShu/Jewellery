const handleMobileMenu = (() => {
  const siteNavigation = document.querySelector('.page-header');
  const siteNavigationToggle = document.querySelector('.page-header__toggle');
  const body = document.querySelector('body');

  return {
    showNav: () => {
      if (siteNavigationToggle) {

        siteNavigationToggle.addEventListener('click', (evt) => {
          evt.preventDefault();
          siteNavigation.classList.toggle('page-header--open');
          body.style.overflow = 'hidden';

          if (!siteNavigation.classList.contains('page-header--open')) {
            body.style.overflow = 'scroll';
          }
        })
      }
    }
    // clickNavLink: () => {
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
  }
})()

handleMobileMenu.showNav();
// handleMobileMenu.clickNavLink();
