import AOS from './node_modules/aos/dist/aos.js';

AOS.init();
$(window).on('load', function() {
    AOS.refresh();
});