var tFormat = 12

document.getElementById("clockDisplay").innerText = ":";
document.getElementById("dayOfWeekAndDate").innerText = "Loading...";
document.getElementById("amPmDisplay").innerText = "--";
document.getElementById("secondsDisplay").innerText = ":";

document.getElementById("btn24hr").value="Switch to 24-Hour Format"

window.onload = function() {    
    setTimeout(showCurrentTime, 1000);

    document.getElementById("btn24hr").addEventListener("click", changeTimeFormat);
}

function showCurrentTime() {
    var monthsOfYear = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    var daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']; 

    var today = new Date();   

    var day = today.getDay();
    var strDay = daysOfWeek[day];

    var month = today.getMonth();    
    var strMonth = monthsOfYear[month];

    var dayDate = today.getDate();

    var hour = today.getHours();

    if (tFormat == 12) {
        hour = (hour == 0) ? 12 : ((hour > 12) ? (hour - 12) : hour);
    } 
    
    hour = (hour < 10) ? "0" + hour : hour;
    var min = today.getMinutes() < 10 ? "0" + today.getMinutes() : today.getMinutes();
    var sec = today.getSeconds() < 10 ? "0" + today.getSeconds() : today.getSeconds();

    if (tFormat == 12) {
        var amOrPM = today.getHours() >= 12 ? "PM" : "AM";
    } else {
        var amOrPM = "24";        
    }

    document.getElementById("dayOfWeekAndDate").innerText = 
                strDay + ", " +
                strMonth + " " +
                dayDate;
    document.getElementById("clockDisplay").innerText = 
                hour + " : " +
                min;
    document.getElementById("amPmDisplay").innerText = 
                amOrPM;
    document.getElementById("secondsDisplay").innerText = 
                ": " + sec;

    setTimeout(showCurrentTime, 1000);
}

function changeTimeFormat(){
    var btnText = ""
    if (tFormat == 12) {
        tFormat = 24;
        btnText = "Switch to 12-Hour Format"
    } else {
        tFormat = 12;
        btnText = "Switch to 24-Hour Format"
    }

    document.getElementById("btn24hr").value = btnText   
}