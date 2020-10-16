// Javascript / JQUERY

$(document).ready(function () {
    // to gather variables
    var value = $(this).siblings('.description').val();
    var time = $(this).parent().attr('id');

//saving input in local storage

    localStorage.setItem(time, value);
});

console.log('test')
    function hourUpdater() {
//get current hours        
        var currentHour = moment().hours();

//loop to run through the time blocks
    $('.time-block').each(function () {
        var blockHour = parseInt($(this).attr('id').split('-')[1]);

// if else statements to designate the time and color shown in planner
        if (blockHour < currentHour) {
            $(this).addClass('past');
        } else if (blockHour === currentHour) {
            $(this).removeClass('past');
            $(this).addClass('present');
        } else {
            $(this).removeClass('past');
            $(this).removeClass('present');
            $(this).addClass('future')
        }
    });
    }

    hourUpdater();

//interval check to see if current time needs updating
    var interval = setInterval(hourUpdater, 15000);

//load data that is saved in local storage (Need to get this to work)
    $('#hour-9 .description').val(localStorage.getItem('hour-9'));
    $('#hour-10 .description').val(localStorage.getItem('hour-10'));
    $('#hour-11 .description').val(localStorage.getItem('hour-11'));
    $('#hour-12 .description').val(localStorage.getItem('hour-12'));
    $('#hour-13 .description').val(localStorage.getItem('hour-13'));
    $('#hour-14 .description').val(localStorage.getItem('hour-14'));
    $('#hour-15 .description').val(localStorage.getItem('hour-15'));
    $('#hour-16 .description').val(localStorage.getItem('hour-16'));
    $('#hour-17 .description').val(localStorage.getItem('hour-17'));


    $('#currentDay').text(moment().format('MMMM Do YYYY, h:mm:ss a'));

