$(document).ready(function() {
    $('.header__video--watch').click(function() {
        $('header, .header__navigation, .header-info>h1, .header-info>p, .header-info>.btn-download, .header__video--watch').addClass('active-video');
        return false;
    });
    $('.header__video--watch').click(function() {
        setTimeout(function() {
            $('.header__youtube').addClass('active-video');
        }, 1300)
    });

    $('.header__video--close').click(function() {
        $('header, .header__youtube, .header__navigation, .header-info>h1, .header-info>p, .header-info>.btn-download, .header__video--watch').removeClass('active-video');
    })
});

//плавная прокрутка
var linkNav = $('[href^="#"]'),
    V = 0.3; // скорость, может иметь дробное значение через точку
for (var i = 0; i < linkNav.length; i++) {
    linkNav[i].addEventListener('click', function(e) {
        e.preventDefault();
        var w = window.pageYOffset, // прокрутка
            hash = this.href.replace(/[^#]*(.*)/, '$1'); // id элемента, к которому нужно перейти
        t = document.querySelector(hash).getBoundingClientRect().top,
        start = null;
        requestAnimationFrame(step);

        function step(time) {
            if (start === null) start = time;
            var progress = time - start,
                r = (t < 0 ? Math.max(w - progress / V, w + t) : Math.min(w + progress / V, w + t));
            window.scrollTo(0, r);
            if (r != w + t) {
                requestAnimationFrame(step)
            } else {
                location.hash = hash
            }
        }
    }, false);
}