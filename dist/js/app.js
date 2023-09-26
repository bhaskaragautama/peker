$('.dropdown').click(function (e) { 
    e.preventDefault();
    $('.dropdown-list').not($(this).closest('.dropdown-container').find('.dropdown-list')).each(function() {
        $(this).slideUp('fast');
    });
    $(this).closest('.dropdown-container').find('.dropdown-list').slideToggle('fast', function() {
        $('.dropdown-container').each(function() {
            if($(this).find('.dropdown-list').is(':visible')) {
                $(this).find('.dropdown-icon').addClass('dropdown-opened');
            } else {
                console.log('remove');
                $(this).find('.dropdown-icon').removeClass('dropdown-opened');
            }
        });
    });
});