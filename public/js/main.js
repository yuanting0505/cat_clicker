/**
 * Created by JasmineYuan on 5/25/16.
 */
$(document).ready(function() {
    $('#cat').click(function(e) {
        //add counter when clicking the picture
        $('#number').text(parseInt($('#number').text()) + 1);
    });
});