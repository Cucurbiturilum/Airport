$(document).ready(function () {
    var arrivalBtn = $('#btn-arrival');
    var departureBtn = $('#btn-departure');

    var arrivalContent = $('#content-arrival');
    var departureContent = $('#content-departure');

    arrivalContent.show();
    departureContent.hide();

    arrivalBtn.click(function () {
        departureBtn.removeClass('active');
        arrivalBtn.addClass('active');
        arrivalContent.show();
        departureContent.hide();
    });

    departureBtn.click(function () {
        departureBtn.addClass('active');
        arrivalBtn.removeClass('active');
        arrivalContent.hide();
        departureContent.show();
    });
    $('#datetimepicker1').datetimepicker({
        format: 'L'
    });
    $('#datetimepicker2').datetimepicker({
        format: 'LT'
    });
    $('#datetimepicker3').datetimepicker({
        format: 'L'
    });
    $('#datetimepicker4').datetimepicker({
        format: 'LT'
    });
    $('#datetimepicker5').datetimepicker({
        format: 'L'
    });
});