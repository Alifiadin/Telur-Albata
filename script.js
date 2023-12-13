// toggle class active egg menu
const navbarNav = document.querySelector('.navbar-nav');
// ketika egg menu di klik
document.querySelector('#egg-menu').onclick = (e) => {
    navbarNav.classList.toggle('active');
    e.preventDefault();
};


// klik diluar elemen
const egg = document.querySelector('#egg-menu');

document.addEventListener('click', function (e) {
    if (!egg.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
});

// modal box
const itemDetailModal = document.querySelector('#item-detail-modal');
const itemDetailButtons = document.querySelectorAll('.item-detail-button');

itemDetailButtons.forEach((btn) => {
    btn.onclick = (e) => {
        itemDetailModal.style.display = 'flex';
        e.preventDefault();
    };
});


// klik tombol close modal
document.querySelector('.modal .close-icon').onclick = (e) => {
    itemDetailModal.style.display = 'none';
    e.preventDefault();
};

// klik diluar modal
window.onclick = (e) => {
    if (e.target === itemDetailModal ) {
        itemDetailModal.style.display = 'none';
    }
}
