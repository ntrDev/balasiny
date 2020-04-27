import * as $ from 'jquery';
import 'slick-carousel';
import './css/custom_icons/css/balysiny_icon.css';
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


var $slider = $("#slider_range");
var $fill = $(".bar .fill");

function setBar() {
	$fill.css("width", $slider.val() + "%");
}

$slider.on("input", setBar);

setBar();

////////////////// decrement & incremetn

//// filter price 
