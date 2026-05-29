document.addEventListener('DOMContentLoaded', () => {
  const dropdownButtons = document.querySelectorAll('.dropdown-btn');

  dropdownButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      // Toggle a class to open/close menus
      const parent = e.target.parentElement;
      parent.classList.toggle('active');
      console.log(`${e.target.textContent} dropdown clicked!`);
    });
  });
});
