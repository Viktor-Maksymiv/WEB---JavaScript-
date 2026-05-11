var hamburgerBtn = document.getElementById('hamburgerBtn');
var mobileMenu = document.getElementById('mobileMenu');
 
hamburgerBtn.addEventListener('click', function () {
  mobileMenu.classList.toggle('open');
});

var track = document.getElementById('carouselTrack');
var dotsWrap = document.getElementById('carouselDots');
var slides = track.querySelectorAll('.carousel-slide');
var total = slides.length;
var current = 0;
var timer = null;
 
for (var i = 0; i < total; i++) {
    var dot = document.createElement('button');
    dot.className = 'dot' + (i === 0 ? ' active' : '');
    dot.dataset.index = i;
    dotsWrap.appendChild(dot);
}
 
var dots = dotsWrap.querySelectorAll('.dot');

function goToSlide(index) {
    if (index < 0) index = total - 1;
    if (index >= total) index = 0;
    current = index;
    track.style.transform = 'translateX(-' + (current * 100) + '%)';
    dots.forEach(function (d, i) {
      d.classList.toggle('active', i === current);
    });
}

function startAuto() {
    timer = setInterval(function () { goToSlide(current + 1); }, 3000);
}
 
function resetAuto() {
    clearInterval(timer);
    startAuto();
}
 
document.getElementById('prevBtn').addEventListener('click', function () { goToSlide(current - 1); resetAuto(); });
document.getElementById('nextBtn').addEventListener('click', function () { goToSlide(current + 1); resetAuto(); });

dots.forEach(function (dot) {
    dot.addEventListener('click', function () { goToSlide(parseInt(this.dataset.index)); resetAuto(); });
});
 
startAuto();
