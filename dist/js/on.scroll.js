function moveInit() {
    $('.movable').each(function (index, element) {
        $(element).data('top', $(element).offset().top);
        $(element).data('left', $(element).offset().left);
    });
}

function moveMe(selector, direction, speed, scroll) {
    switch (direction) {
        case 'top':
            $(selector)[0].style.setProperty('top', parseInt($(selector).data('top')) + parseInt(scroll * speed) + 'px', 'important');
            break;
        case 'right':
            $(selector)[0].style.setProperty('left', parseInt($(selector).data('left')) + parseInt(scroll * speed) + 'px', 'important');
            break;
        case 'bottom':
            $(selector)[0].style.setProperty('top', parseInt($(selector).data('top')) - parseInt(scroll * speed) + 'px', 'important');
            break;
        case 'left':
            $(selector)[0].style.setProperty('left', parseInt($(selector).data('left')) - parseInt(scroll * speed) + 'px', 'important');
            break;
    }
}

function hideMe(selector, speed, scroll) {
    $(selector)[0].style.setProperty('opacity', parseFloat(1) - parseFloat(scroll * (speed/300)), 'important');
}