const body = document.querySelector('body')
const hour_hand = document.querySelector(".hour_hand")
const minute_hand = document.querySelector(".minute_hand")
const second_hand = document.querySelector(".second_hand")
let sound = false
let tiktik = new Audio('tiktik.mp3')

body.addEventListener('click',()=>{
    document.querySelector('.notification').innerHTML = ''
    sound = true
})


function time_update() {
    let time = new Date
    let hour = time.getHours()
    hour = (hour>12)? hour - 12 : hour;
    let second = time.getSeconds()
    let minute = time.getMinutes()
    hour_hand.style.transform = `rotate(${hour*30 + minute*0.5}deg)`
    minute_hand.style.transform = `rotate(${minute*6}deg)`
    second_hand.style.transform = `rotate(${second*6}deg)`
    sound ? tiktik.play() : NaN;
}

time_update()
window.setInterval(()=>{
    time_update()
},1000)
