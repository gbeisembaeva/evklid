//слайдер
const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

//табы
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.how-we-are-working__tabs-btn').forEach(function(tabsBtn) {
    tabsBtn.addEventListener('click', function(event) {
      const path = event.currentTarget.dataset.path

      document.querySelectorAll('.how-we-are-working__tab-content').forEach(function (tabsContent) {
        tabsContent.classList.remove('tab-content-active')
      })
      document.querySelector(`[data-target="${path}"]`).classList.add('tab-content-active')

      document.querySelectorAll('.how-we-are-working__tabs-btn').forEach(function(tabsButton) {
        tabsButton.classList.remove('is-active')
      })
      event.currentTarget.classList.add('is-active')
    })
  })
});

//бургер меню
window.addEventListener('DOMContentLoaded', function() {
  document.querySelector('#burger').addEventListener('click', function() {
    document.querySelector('#menu').classList.toggle('is-active')
  })

  document.querySelector('.section-header__burger').addEventListener('click', (e) => {
  e.currentTarget.classList.toggle('section-header__burger--active');
  document.body.classList.toggle('open-menu')
});
});

function open() {
  document.getElementById("burger").style.display = "block";
}

function close() {
  document.getElementById("burger").style.display = "none";
}

//Аккордеон
$( function() {
  $( "#accordion" ).accordion({
    active:true,
    heightStyle: "content",
    collapsible: true
  });
} );
