let $main = $('body')
let counter = 0

$main.on('click', () => {
    let $main_block = $('.main-block' + counter)

    $main_block.addClass('active')
    $main_block.removeClass('hide')

    $main_block.fadeOut(0).fadeIn(2000)

    counter = counter + 1
})