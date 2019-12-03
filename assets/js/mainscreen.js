$(document).ready(function () {

    setInterval(function () {
        var dateContainer = $('#current-date');
        var dt = new Date();
        var DD = ("0" + dt.getDate()).slice(-2);
        var MM = ("0" + (dt.getMonth() + 1)).slice(-2);
        var YYYY = dt.getFullYear();
        var date_string = YYYY + "-" + MM + "-" + DD;

        var timeContainer = $('#current-time');
        var hh = ("0" + dt.getHours()).slice(-2);
        var mm = ("0" + dt.getMinutes()).slice(-2);
        var ss = ("0" + dt.getSeconds()).slice(-2);
        var time_string = hh + ":" + mm;

        dateContainer.html(date_string);
        timeContainer.html(time_string);
    }, 1000);

    $('.selectpicker').on('change', function (e) {
        var stylesPerValue = ['btn-light', 'btn-info', 'btn-success'];
        var newValue = e.target.value;
        var newDataStyle = stylesPerValue[newValue];

        stylesPerValue.forEach(function (val) {
            $(e.target).siblings('.dropdown-toggle').removeClass(val);
        });

        $(this).selectpicker('setStyle', newDataStyle);
    });

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

    for (var i = 1; i <= 2; i++){
        var elementId = '#timepicker' + i;
        $(elementId).datetimepicker({
            format: 'LT',
            useCurrent: true,
        });
        $(elementId).datetimepicker('show');
        $(elementId).datetimepicker('hide');
    }

    for (var i = 1; i <= 3; i++){
        var elementId = '#datepicker' + i;
        $(elementId).datetimepicker({
            format: 'L',
            useCurrent: true,
        });
        $(elementId).datetimepicker('show');
        $(elementId).datetimepicker('hide');
    }

});


