let timestamp = document.getElementById("timestamp");
let localDate = document.getElementById("localDate");
let localTime = document.getElementById("localTime");
let time = new Date();

timestamp.innerHTML = Date.now();
localDate.innerHTML = time.getDate() + "/" + (time.getMonth() + 1) + "/" + time.getFullYear();
localTime.innerHTML = time.getHours() + " h " + time.getMinutes();

let futur = new Date();

futur.setDate(time.getDate() + 2);
futur.setHours(time.getHours() + 6);


if(futur > time) {
let newDiv = document.createElement("div");
document.body.append(newDiv);
let interval = futur.getTime() - time.getTime();
let day = Math.floor(interval / 1000 / 60 / 60 / 24);
let hours = Math.floor((interval - (day * 60 * 60 * 24 * 1000)) / 1000 / 60 / 60 );
let minutes = Math.floor((interval - (day * 60 * 60 * 24 * 1000) - (hours * 60 * 60 * 1000)) / 1000 / 60 / 60 );
newDiv.innerHTML = day + " jours " + hours + " heures " +
    minutes   + " minutes avant la news.";
}

