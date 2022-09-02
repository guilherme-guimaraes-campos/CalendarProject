const monthEl = document.querySelector(".data h1")
const fullDateEl = document.querySelector(".data p")
const diasEl = document.querySelector(".dias")

const monthInx = new Date().getMonth()

const lastDay = new Date(new Date().getFullYear(), monthInx + 1, 0).getDate()

const firstDay = new Date(new Date().getFullYear(), monthInx , 1).getDay() -1



const months = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro"

]

monthEl.innerText = months[monthInx]
fullDateEl.innerText = new Date().toLocaleDateString()


let days = "";

for(let i = firstDay; i > 0; i--){
    days += `<div class="empty"></div>`
}

for(let i = 1; i <= lastDay; i++){
    
    if( i === new Date().getDate()){
        days += `<div class="today">${i}</div>`;
    } else {
        days += `<div>${i}</div>`;
    }
}

diasEl.innerHTML = days

