function Line(){

    var wrap = $('.main__wrap'),
        header = $('header'),
        mainhead = $('.main__head');

    var item1 = $('.item1'),
         num1X = item1.position().left + item1.width()/2,
         num1Y = item1.offset().top+item1.height()/2- header.height() - mainhead.outerHeight();

    var item2 = $('.item2'),
         num2X = item2.position().left + item2.width()/2,
         num2Y = item2.offset().top+item1.height()/2- header.height() - mainhead.outerHeight();

    var item3 = $('.item3'),
         num3X = item3.position().left + item3.width()/2,
         num3Y = item3.offset().top+item1.height()/2- header.height() - mainhead.outerHeight();

    var item4 = $('.item4'),
         num4X = item4.position().left + item4.width()/2,
         num4Y = item4.offset().top+item1.height()/2- header.height() - mainhead.outerHeight();

    var item5 = $('.item5'),
         num5X = item5.position().left + item5.width()/2,
         num5Y = item5.offset().top+item1.height()/2- header.height() - mainhead.outerHeight();

    var item6 = $('.item6'),
         num6X = item6.position().left + item6.width()/2,
         num6Y = item6.offset().top+item1.height()/2- header.height() - mainhead.outerHeight();

    console.log(num1X)
    var svg = $('#svg-line');

    var line12 = svg.find('.line-1-2'),
        line13 = svg.find('.line-1-3'),
        line23 = svg.find('.line-2-3'),
        line34 = svg.find('.line-3-4'),
        line45 = svg.find('.line-4-5'),
        line46 = svg.find('.line-4-6'),
        line56 = svg.find('.line-5-6');

    line12.attr({'x1': num1X, 'y1': num1Y, 'x2': num2X, 'y2': num2Y});
    line13.attr({'x1': num1X, 'y1': num1Y, 'x2': num3X, 'y2': num3Y});
    line23.attr({'x1': num2X, 'y1': num2Y, 'x2': num3X, 'y2': num3Y});
    line34.attr({'x1': num3X, 'y1': num3Y, 'x2': num4X, 'y2': num4Y});
    line45.attr({'x1': num4X, 'y1': num4Y, 'x2': num5X, 'y2': num5Y});
    line46.attr({'x1': num4X, 'y1': num4Y, 'x2': num6X, 'y2': num6Y});
    line56.attr({'x1': num5X, 'y1': num5Y, 'x2': num6X, 'y2': num6Y});


}

$(window).on('load resize', function () {
    Line();
});


