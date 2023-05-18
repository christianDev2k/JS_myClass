const messToggle = document.querySelector('.header__notify-link.mess');
const messDropdown = document.querySelector('.dropdown__menu.mess');

function showDropdown(toggle, dropdown) {
    toggle.addEventListener('click', function () {
      dropdown.classList.toggle('dropdown__menu');
      dropdown.classList.toggle('mess');
      dropdown.classList.toggle('appear');
      dropdown.classList.toggle('shadow');
    });
  }

showDropdown(messToggle, messDropdown);g