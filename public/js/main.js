/**
 * Created by JasmineYuan on 5/25/16.
 */
$(document).ready(function() {
    //cat data
    var catCollection = [
        {
            name: 'DogEgg',
            pic: 'public/img/DogEgg.jpg'
        },
        {
            name: 'CatEgg',
            pic: 'public/img/CatEgg.jpg'
        },
        {
            name: 'BaiBai',
            pic: 'public/img/BaiBai.jpg'
        },
        {
            name: 'MeowMeow',
            pic: 'public/img/MeowMeow.jpg'
        },
        {
            name: 'KunKun',
            pic: 'public/img/Sleepy.jpg'
        }
    ];

    //handlebars cat template
    var catTemplateScript = $('#cat-group-tpl').html();
    var catTemplate = Handlebars.compile(catTemplateScript);

    //generate html using template and data
    $('#cat-container').append(catTemplate(catCollection));
    
    //set the first container visible when loaded
    $($('#cat-container').find('.group')[0]).addClass('show');

    //handle list template
    var catListScript = $('#cat-list-tpl').html();
    var catListTemplate = Handlebars.compile(catListScript);

    $('#cat-list ul').append(catListTemplate(catCollection));

    //bind click event to each group
    $('.group img').click(function(e) {
        //add counter when clicking the picture
        var current = $(this).siblings('p').find($('.number'))[0];
        $(current).text(parseInt($(current).text()) + 1);
    });

    $('.cat-li').click(function(e) {
        //add clicked class to this li and remove this class from others
        $(this).addClass('clicked');
        $(this).siblings().removeClass('clicked');

        //handle related cat container
        var related = $(this).find('span').data('related');
        $('#' + related).addClass('show');
        $('#' + related).siblings().removeClass('show');
    });
});