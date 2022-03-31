function showtime(){
    var date = new Date ();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    var session = "AM";

    if(h == 0){
        h=12;
    }


    if(h > 12){
        h = h - 12;
        session = "PM";
    }

  h = (h < 10) ? "0" + h : h; /* h stands for hours*/
  m = (m < 10) ? "0" + m : m; /* m stands for minutes*/
  s = (s < 10) ? "0" + s : s; /* s stands for seconds*/

  var time = h + ":" + m + ":" + s + " " + session;
  document.getElementById("ClockDisplay").innerText = time;
  document.getElementById("ClockDisplay").textContent = time;

  setTimeout(showtime, 1000);

}

showtime();


