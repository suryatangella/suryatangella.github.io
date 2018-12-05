// var accountBalance = 50,
//     cashInHand = 0;

document.addEventListener('contextmenu', event => event.preventDefault());

toastr.options = {
    "closeButton": true,
    "positionClass": "toast-top-full-width"
}

// function timeTicker(timeStamp) {
//     document.getElementById('time-tracker').innerHTML = timeStamp;
//     if (timeStamp == '5:00') {
//         document.body.innerHTML =='';
//         toastr("Oooops Time's Up , Better luck next time !!");
//     } else {
//         setTimeout(function() {
//             var timeStore = timeStamp.split(':');
//             if (Number(timeStore[1]) == 59) {
//                 timeStore[0] = Number(timeStore[0]) + 1;
//                 timeStore[1] = '00';
//             } else {
//                 timeStore[1] = timeStore[1] < 9 ? '0' + (Number(timeStore[1]) + 1) : Number(timeStore[1]) + 1;
//             }
//             //loop-on
//             timeTicker(timeStore.join(":"))
//         }, 100)
//     }
// }


function printConsoleMessage() {
    console.log("Wow you've opened the console , Good job ");
    console.log('You need to perform some JS magic to find the magical expression');
    console.log("or you can try your hand at some SQL injection");
    console.log('you know what just use this for both username and password and waltz your way right in---> " or ""=" ');
}

$(function() {
    printConsoleMessage();
    $('#loginModal').modal({ backdrop: 'static', keyboard: false });
    $("#login").click(function() {
        username = $("#username").val();
        password = $("#pwd").val();
        if (username == '" or ""="' && password == '" or ""="') {
            $('#loginModal').modal('hide');
            $("#rulesModal").modal();
            $("#rulesModal").on('hidden.bs.modal', function() {
                timeTicker('0:00');
            });
        } else {
            toastr.error("Login Failed Please Try again");
        }
    })
    $(".radioShopSelect").change(function(event) {
    })
});


// Set the date we're counting down to
var countDownDate = new Date("Dec 5, 2018 15:37:25").getTime();

//document.write(countDownDate);

// Update the count down every 1 second
var x = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();
    
    var currentTime = new Date();

	var currentOffset = currentTime.getTimezoneOffset();

	var ISTOffset = 330;   // IST offset UTC +5:30 

	var ISTTime = new Date(currentTime.getTime() + (ISTOffset + currentOffset)*60000);
    
    // Find the distance between now and the count down date
    var distance = countDownDate - ISTTime;
    
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Output the result in an element with id="demo"
    document.getElementById("demo").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";
    
    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
    }
}, 1000);

// var target_date = new Date("Dec 7, 2018 11:00:00").getTime() ; // set the countdown date
// var days, hours, minutes, seconds; // variables for time units

// var countdown = document.getElementById("tiles"); // get tag element

// getCountdown();

// setInterval(function () { getCountdown(); }, 1000);

// function getCountdown(){

// 	// find the amount of "seconds" between now and target
//   var currentTime = new Date();

// 	var currentOffset = currentTime.getTimezoneOffset();

// 	var ISTOffset = 330;   // IST offset UTC +5:30 

// 	var current_date = new Date(currentTime.getTime() + (ISTOffset + currentOffset)*60000);

// 	var seconds_left = (target_date - current_date) / 1000;

// 	days = pad( parseInt(seconds_left / 86400) );
// 	seconds_left = seconds_left % 86400;
		 
// 	hours = pad( parseInt(seconds_left / 3600) );
// 	seconds_left = seconds_left % 3600;
		  
// 	minutes = pad( parseInt(seconds_left / 60) );
// 	seconds = pad( parseInt( seconds_left % 60 ) );

// 	// format countdown string + set tag value
// 	countdown.innerHTML = "<span>" + days + "</span><span>" + hours + "</span><span>" + minutes + "</span><span>" + seconds + "</span>"; 
// }

// function pad(n) {
// 	return (n < 10 ? '0' : '') + n;
// }



