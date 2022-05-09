
setInterval(() => {
    const mon = ["january", "fabruary", "march", "April", "May"
        , "June", "July ", "August ", "Setember", "October", "November",
        "December"];
    var a = new Date();
    d = a.getDate();
    m = mon[a.getMonth()]; // 0to 11 ;
    y = a.getFullYear();
    // var time= a.getHours() + a.getMinutes() + a.getSeconds() ;
    time = a.getHours() + ':' + a.getMinutes() + ':' + a.getSeconds();
    document.getElementById("date").innerHTML = "Time: " + time + "<br>"
        + "Date: " + d + m + y;
}, 1000);

