import * as $ from 'jquery';
import 'slick-carousel';
import './css/custom_icons/css/balysiny_fonts.css';
import './css/style.css';
import './css/media.css';
import '../node_modules/slick-carousel/slick/slick-theme.css';
import '../node_modules/slick-carousel/slick/slick.css';

$(document).ready(function(){
    $('.slider').slick({
        dots: true,
        infinite: true,
        speed: 1500,
        slidesToShow: 1,
        adaptiveHeight: true,
        
    });
    
    $('.slider_gal_wr').slick({
        dots: false,
        infinite: true,
        speed: 1500,
        adaptiveHeight: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1921,
                settings: {
                    slidesToShow: 8,
                    slidesToScroll: 1,
                    infinite: true
                    // dots: true
                }
            },
            {
                breakpoint: 1621,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 2,
                    infinite: true
                    // dots: true
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 2,
                    infinite: true
                    // dots: true
                }
            },
            {
                breakpoint: 975,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 2,
                    infinite: true
                    
                }
            },
            {
                breakpoint: 732,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true
                    
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
            
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
    
    $(".menu_icon").click(function(e){
        e.preventDefault();
        if($(this).hasClass("is-opened")){
            $(this).addClass("is-closed").removeClass("is-opened");
        }else{
            $(this).removeClass("is-closed").addClass("is-opened");
        }
    });
    $(".menu_icon_cross").click(function(){
        if ($(".top_mnu").is(":visible")){
            $(".top_mnu").fadeOut(800);
            $(".top_mnu li a").removeClass("fadeInUp animated");
        } else {
            $(".top_mnu").fadeIn(800);
            $(".top_mnu li a").addClass("fadeInUp animated");
        };
    });

});

window.addEventListener('load', function() {
    console.log('All assets are loaded');


    function initMap() {
        let map = new google.maps.Map(document.getElementById('map'), {
            zoom: 10,
            center: {lat: -33.9, lng: 151.2}
        });
    
        setMarkers(map);
        /// Gogle Maps 

    }

    let number1 = 1;
    let number2 = 1;
    let btnInc1 = document.getElementById("increment1");
    let btnInc2 = document.getElementById("increment2");
    let btnDec1 = document.getElementById("decrement1");
    let btnDec2 = document.getElementById("decrement2");
    let countNum1 = document.getElementById("_count_num1");
    let countNum2 = document.getElementById("_count_num2");

    btnInc1.addEventListener("click", function(e) {
        e.preventDefault();
        countNum1.textContent = ++number1;
    });
    btnInc2.addEventListener("click", function(e) {
        e.preventDefault();
        countNum2.textContent = ++number2;
    });
    btnDec1.addEventListener("click", function(e) {
        e.preventDefault();
        countNum1.textContent = --number1;
        
    });
    btnDec2.addEventListener("click", function(e) {
        e.preventDefault();
        countNum2.textContent = --number2;
    });


    let deleteBtn1 = document.getElementById('delete_btn1');
    let deleteBtn2 = document.getElementById('delete_btn2');
    deleteBtn1.onclick = function () {
        document.getElementById('basket_item1').remove();
    };
    deleteBtn2.onclick = function () {
        document.getElementById('basket_item2').remove();
    };
});



////////////////// decrement & incremetn

//// filter price 


// let inputPrice = document.getElementById('input_price');
// let priceValue = document.getElementById('_price_value');

// priceValue.innerHTML = inputPrice.value;

// inputPrice.oninput = function(){
// 	priceValue.innerHTML = this.value;
// }

// inputPrice.addEventListener("mousemove",function(){
//     let x = inputPrice.value;
//     let color =`linear-gradient(90deg, rgb(128, 160, 93) ${x}%, rgba(229, 229, 229) ${x}%)`;
//     // let color = 'linear-gradient(' + x + '%,rgba(229, 229, 229)' + x + '%)';
//     // let color = 'linear-gradient(rgb(128, 160, 93)' + x + '%)';
// 	inputPrice.style.background = color;
// });

// let start_value = input_price.getAttribute("value");

// let x = start_value;
// let color = 'linear-gradient(90deg, rgb(117, 252, 117)' + x + '% , rgb(214, 214, 214)' + x + '%)';
// input_price.style.background = color;

// inputPrice.addEventListener("mousemove", function() {
//     x = priceValue.value;
//     color = 'linear-gradient(1deg, rgb(117, 252, 117)' + x + '% , rgb(214, 214, 214)' + x + '%)';
//     inputPrice.style.background = color;
// });


// let range = document.getElementById('input_price');
// let rangeValue = document.getElementById('_price_value');

// rangeValue.innerHTML = range.value;

// range.oninput = function(){
// 	rangeValue.innerHTML = this.value;
// }

// let start_value = range.getAttribute('value');
// // console.log(start_value);
// let x = start_value;
// let color = 'linear-gradient(90deg, rgb(117, 252, 117)' + x + '1% , rgb(214, 214, 214)' + x + '0%)';
// range.style.background = color;

// range.addEventListener("mousemove", function() {
//     x = range.value;
//     color = 'linear-gradient(90deg, rgb(117, 252, 117)' + x + '1% , rgb(214, 214, 214)' + x + '0%)';
//     range.style.background = color;
// });

// var slid = document.getElementById("myRange");
// var output = document.getElementById("value");

// output.innerHTML = slid.value;

// slid.oninput = function() {
//     output.innerHTML = this.value;
// }       

// var start_value = slid.getAttribute("value");

// var x = start_value;
// var color = 'linear-gradient(90deg, rgb(117, 252, 117)' + x + '% , rgb(214, 214, 214)' + x + '%)';
// slid.style.background = color;

// slid.addEventListener("mousemove", function() {
//     x = slid.value;
//     color = 'linear-gradient(90deg, rgb(117, 252, 117)' + x + '% , rgb(214, 214, 214)' + x + '%)';
//     slid.style.background = color;
// });