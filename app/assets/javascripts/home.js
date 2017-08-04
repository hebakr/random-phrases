var phrases = [];
$(function () {
    $("#fetchBtn").click(function () {
        $.get('/fetch', null, function (data) {

            if (phrases.indexOf(data.id) !== -1) return;
            phrases.push(data.id);
            $('<li>').append($('<div>', {
                text: data.title,
                'class': 'alert alert-info'
            })).appendTo($('ul'))

            //console.log();
        });
    })
})