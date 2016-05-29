/**
 * Created by JasmineYuan on 5/25/16.
 */
$(document).ready(function() {
    //cat data
    var catCollection = [
        {
            name: 'DogEgg',
            pic: 'public/img/dogEgg.jpg'
        },
        {
            name: 'CatEgg',
            pic: 'public/img/catEgg.jpg'
        }
    ];

    //handlebars template
    var templateScript = $('#cat-group-tpl').html();
    var template = Handlebars.compile(templateScript);

    //generate html using template and data
    $('#container').append(template(catCollection));

    //bind click event to each group
    $('.group img').click(function(e) {
        //add counter when clicking the picture
        var current = $(this).siblings('p').find($('.number'))[0];
        $(current).text(parseInt($(current).text()) + 1 );
    });
});