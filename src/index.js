
import * as $ from 'jquery';
import 'slick-carousel';
import './css/style.css';
import '../node_modules/slick-carousel/slick/slick-theme.css';
// import 'font-awesome';
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
    speed: 1500,
    slidesToShow: 1,
    adaptiveHeight: true
});

/*$('.slider_gallery').slick({
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 5
    
});*/
