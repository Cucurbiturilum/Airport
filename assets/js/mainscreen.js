$(document).ready(function (){

    setInterval(function(){
        var dateTimeContainer = $('#date-time');
        var dt = new Date();
        var DD = ("0" + dt.getDate()).slice(-2);
        var MM = ("0" + (dt.getMonth() + 1)).slice(-2);
        var YYYY = dt.getFullYear();
        var hh = ("0" + dt.getHours()).slice(-2);
        var mm = ("0" + dt.getMinutes()).slice(-2);
        var ss = ("0" + dt.getSeconds()).slice(-2);
        var date_string = YYYY + "-" + MM + "-" + DD + " " + hh + ":" + mm + ":" + ss;

        dateTimeContainer.html(date_string)
    }, 1000);

});