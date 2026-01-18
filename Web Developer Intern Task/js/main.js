console.log("Main JS loaded");

document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.nav-toggle');
    const navList = document.querySelector('.nav-menu');

    if (navToggle && navList) {
        navToggle.addEventListener('click', () => {
            navList.classList.toggle('nav-menu-active');
        });
    }
});
