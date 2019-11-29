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

});


