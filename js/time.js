var countDown = document.getElementById('times').children[1];
countDown.style.color = "red";
countDown.style.fontSize = "50px";

var dom = '<span style="font-size:50px; color: green">' + '天' + '</span>'

var endTime = new Date();
endTime.setFullYear(2021);
endTime.setMonth(11);
endTime.setDate(25);
endTime.setHours(8);
endTime.setMinutes(30);
endTime.setSeconds(0);

function changeTime() {
    var nowTime = new Date();
    time = endTime.getTime() - nowTime.getTime();
    time = Math.round(time/1000/3600/24);

    countDown.innerHTML = time + dom;
}
changeTime();
setInterval(changeTime,2000*3600);