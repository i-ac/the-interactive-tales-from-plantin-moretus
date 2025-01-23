{
    // code derived from classes and modified to fit the project
    // source: https://codepen.io/simonvanherweghe/pen/xxoJyXW

      const $navButton = document.querySelector('.main-nav__button');
      const $navList = document.querySelector('.main-nav__list');
      const $navLangList = document.querySelector('.header__lang-nav');
      const $primaryButton = document.querySelector('.header__primary-button');
      const $iconOpen = document.querySelector('.button__svg #menu_open');
      const $iconClose = document.querySelector('.button__svg #menu_close');

      // Function to toggle visibility of navigation elements
      const toggleVisibility = (isOpen) => {
          $navButton.setAttribute("aria-expanded", isOpen);
          $iconOpen.classList.toggle("hidden", isOpen);
          $iconClose.classList.toggle("hidden", !isOpen);
          $navList.classList.toggle("hidden", !isOpen);
          $navLangList.classList.toggle("hidden", !isOpen);
          $primaryButton.classList.toggle("hidden", !isOpen);
      }

      const toggleNavigation = () => {
          const isOpen = $navButton.getAttribute("aria-expanded") === "true";
          toggleVisibility(!isOpen);
      }

      const handleBlur = (event) => {
        if (!event.relatedTarget || !$primaryButton.contains(event.relatedTarget)) {
          toggleVisibility(false);
        }
      }

      // Initialize the mobile navigation with js
      const init = () => {
          $navButton.classList.remove('hidden');
          toggleVisibility(false); // Start with navigation closed
          $navButton.addEventListener("click", toggleNavigation);

          // Add event to the last item in the list to trigger the disclosure to close if the user tabs out of the disclosure
          $primaryButton.addEventListener("blur", handleBlur);

          // Close the disclosure if a user presses the escape key
          window.addEventListener("keyup", (e) => {
              if (e.key === "Escape") {
                  $navButton.focus();
                  toggleVisibility(false);
              }
          });
      }

      init();
  }
