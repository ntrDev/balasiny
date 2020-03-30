
import * as $ from 'jquery';
import 'slick-carousel';
import './css/style.css';
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel';
// import 
// import './img/services_item/item_1.jpg';
// require('html-loader!./services.html');
console.log('i');
// import '../src/about.html';

$('.slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true
});


