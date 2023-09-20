function moveInit() {
    $('.movable').each(function (index, element) {
        $(element).data('top', $(element).offset().top);
        $(element).data('left', $(element).offset().left);
    });
}

function moveMe(selector, direction, speed) {
    let scrollVal = window.scrollY;
    console.log(scrollVal);
    switch (direction) {
        case 'top':
            $(selector)[0].style.setProperty('top', parseInt($(selector).offset().top) + parseInt(scrollVal * speed) + 'px', 'important');
            break;
        case 'right':
            $(selector)[0].style.setProperty('right', parseInt($(selector).offset().left) + parseInt(scrollVal * speed) + 'px', 'important');
            break;
        case 'bottom':
            $(selector)[0].style.setProperty('top', parseInt($(selector).offset().top) - parseInt(scrollVal * speed) + 'px', 'important');
            break;
        case 'left':
            console.log('left');
            $(selector)[0].style.setProperty('left', parseInt($(selector).offset().left) - parseInt(scrollVal * speed) + 'px', 'important');
            break;
    }
}