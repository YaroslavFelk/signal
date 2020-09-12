


// Can also be used with $(document).ready()
$(window).load(function() {
    $('.slickSlider').slick({
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        arrows: true,
        dots: true,
        dotsClass: 	'slick-dots',
        nextArrow: '<button class="slick__arrows nextArrow "></button>',
        prevArrow: '<button class="slick__arrows prevArrow"></button>',
        responsive: [{
            breakpoint: 1040,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 800,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
            }
        }]
    });

    $('.partnersSlider').slick({
        slidesToShow: 5,
        slidesToScroll: 5,
        infinite: true,
        arrows: true,
        dots: true,
        dotsClass: 	'slick-dots',
        nextArrow: '<button class="slick__arrows nextArrow slick__arrows_partners"></button>',
        prevArrow: '<button class="slick__arrows prevArrow slick__arrows_partners"></button>',
        responsive: [{
            breakpoint: 1440,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
            }
        },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    arrows: false,
                }
            }]
    });


    // particlesJS.load(@dom-id, @path-json, @callback (optional));
    particlesJS.load('particles-js', 'templates/js/particles.json', function() {
        console.log('callback - particles.js config loaded');
    })

    particlesJS.load('particles-js__partners', 'templates/js/particles.json', function() {
        console.log('callback - particles.js config loaded');
    })

    $('.logo__anime').css('left', '68%')
    $('.logo_block').addClass('logo__anime-line')

    $('#hamburger').on('click', navStatus);
    $('.js-search-button').on('click', function () {
        $("body").toggleClass('search-active')
    })

    setEqualHeight($('.main__partners_slick-item div'))


    // ymaps.ready(function () { init(coords,'#7C0905', '#E4E4E4') });

    for (let i = 1; i < 8; i++) {
        let hoverText = $(`#hover-text${i}`)
        $(`#placemark${i}`).click( function () {
            hoverText.offset(function(){

                let parentPos = $(`#placemark${i}`).offset();
                return {top:parentPos.top - 100, left:parentPos.left - 50};
            });
            hoverText.toggleClass("show")
        })
    }

    // console.log($('#placemark1').offset())
    // $("#hover-text1").offset(function(i,val){
    //     let parentPos = $('#placemark1').offset();
    //     return {top:parentPos.top - 70, left:parentPos.left - 50};
    // });
});



function navStatus() {
    if (document.body.classList.contains('hamburger-active')) {
        navClose();
    }
    else {
        navOpen();
    }
}

function navClose() {
    document.body.classList.remove('hamburger-active');
}

function navOpen() {
    document.body.classList.add('hamburger-active');
}


function init(coords, primaryColor, SecondColor) {
    var myMap = new ymaps.Map('map', {
            center: [62.981769, 76.994732],
            controls: [],
            zoom: 3
        })

    var myRegionObjects = new ymaps.GeoObjectCollection({}, {
        preset: "islands#redCircleIcon",
        strokeWidth: 4,
        geodesic: true
    });
    var myPointObjects = new ymaps.GeoObjectCollection({});

    coords.map((elem) => {
        ymaps.geocode(elem, {result: 1})
            .then(
                function (res) {
                    res.geoObjects.get(0).options.set('preset', 'islands#brownIcon');
                    myPointObjects.add(res.geoObjects.get(0))

                    myMap.geoObjects.add(myPointObjects);
                },
                function (err) {
                    console.log(err)
                }
            )
    })

    ymaps.regions.load('RU', {
        lang: 'ru',
        quality: 1
    }).then(function (result) {
        result.geoObjects.options.set('outline', false)
        result.geoObjects.options.set('fillColor', SecondColor)
        myRegionObjects.add(result.geoObjects);
        // Добавляем регионы на карту
        myMap.geoObjects.add(myRegionObjects);

    }, function (err) {
        console.log(err)
    })

    myRegionObjects.events.add('mouseenter', function (e) {
        myPointObjects.each(function (obj) {
            console.log(obj.getAdministrativeAreas()[0])
            console.log()
             if (obj.getAdministrativeAreas()[0] === e.get('target').properties.get('name')) {
                 obj.options.set('preset', 	'islands#grayIcon');
             }

        });
        e.get('target').options.set('fillColor', primaryColor)
        // e.get('target').options.set('outline', false)
        })
        .add('mouseleave', function (e) {
            e.get('target').options.unset('fillColor');
            myPointObjects.each(function (obj) {
                if (obj.getAdministrativeAreas()[0] === e.get('target').properties.get('name')) {
                    obj.options.set('preset', 	'islands#brownIcon');
                }

            });
        });
}

function setEqualHeight(columns) {
    var tallestcolumn = 0;
    columns.each(
        function () {
            currentHeight = $(this).height();
            if (currentHeight > tallestcolumn) {
                tallestcolumn = currentHeight;
            }
        }
    );
    columns.height(tallestcolumn);
}
