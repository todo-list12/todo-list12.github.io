let clock;
let clockTime;
let clockDate;
setInterval(() => {
    clock = new Date();
    clockTime = clock.getHours() + ':' + clock.getMinutes() + ':' + clock.getSeconds();
    clockDate = clock.toLocaleDateString();
    document.getElementById('time').innerHTML = clockTime;
    document.getElementById('date').innerHTML = clockDate;
}, 1000);

let colorChanger = document.getElementById('cc');
function change(){
    alert("April");
}