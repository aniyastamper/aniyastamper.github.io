alert('Welcome to Aniya Stampers Home-Page! Always Remember We <3 Nerds')


const hours = new Date().getHours() // get the current hour

const isMorning = hours >= 4 && hours < 12 // is it morning?
const isAfternoon = hours >= 12 && hours < 17 // is it afternoon?
const isEvening = hours >= 17 || hours < 4 // is it evening?

const welcomeDiv=document.querySelector('#welcome')

if(isEvening){
    welcomeDiv.textContent=('Hey Its time for Bed!')
}

if(isMorning){
    welcomeDiv.textContent=('Hey Rise & Shine!')
}

if(isAfternoon){
    welcomeDiv.textContent=('Hey GoodAfternoon!')
}