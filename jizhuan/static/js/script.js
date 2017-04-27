$(document).ready(function() {

    // 点击用户信息面板
    $('.panel-user').click(function() {
        if ($(this).hasClass('panel-user-check')) {
            $(this).removeClass('panel-user-check');
        } else {
            $(this).addClass('panel-user-check');
        }
    })

    // 点击“提交”按钮
    $('#submit-user').click(function() {
        location.href = './order_confirm.html';
    })
})