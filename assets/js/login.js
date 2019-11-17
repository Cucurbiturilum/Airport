$(document).ready(function () {
    var toggle = $('.password-visibility');
    var loginPassword = $('.login-password');

    toggle.on('click', function () {
        $(this).toggleClass('fa-eye-slash fa-eye');
        if (loginPassword.attr('type') == 'password'){
            loginPassword.attr('type', 'text');
        } else {
            loginPassword.attr('type', 'password');
        }
    })
});