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


/*Inputting A Secrect message using Local Storage*/ 


/*We are using a input field to type the text then applying that text to 
a key and assigning our mesaage to its value*/ 

const button= document.querySelector('button')

//button.addEventListener('click', ()=> {
 //  const Secrect= document.querySelector('input').value
  // console.log({Secrect}) //it works, Now its time to add to local storage
//
//  localStorage.setItem(`It's a secret to everybody.`,Secrect)
//})

localStorage.setItem(`It's a secret to everybody.`,"tonights dinner: Large krusty krab pizza & A Kelp Shake")

//** SECRECT RESTART TO ADD TO CONSOLE

//const Secrect=['tonights dinner: medium krusty krab pizza']
//localStorage.setItem('Secrect',JSON.stringify(Secrect))





