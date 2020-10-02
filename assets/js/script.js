let hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("open");
    document.body.classList.toggle("menu-open");
})

$('#search-modal').on('shown.bs.modal', function () {
    $('#search-modal-input').trigger('focus')
})

const comma_separator_number_step = $.animateNumber.numberStepFactories.separator(' ')
$('.count').each(function () {
    $(this).animateNumber(
        {
            number: $(this).text(),
            numberStep: comma_separator_number_step
        },
        2500
    )
});


$('#myForm input[type="search"]').on('input', function () {
    if ($(this).val() !== '') {
        $('.close-icon').addClass("appear");
    } else {
        $('.close-icon').removeClass("appear");
    }
});
