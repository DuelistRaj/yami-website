document.addEventListener("DOMContentLoaded", function (event) {
    var element = document.body;
    var height = element.offsetHeight;
    if (height < screen.height) {
        $('#footer').addClass('stickybottom');
    }
    else {
        $('#footer').removeClass('stickybottom');
    }
}, false);