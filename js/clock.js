const hu = document.querySelector('#hu')
const min = document.querySelector('#min')
const sec = document.querySelector('#sec')
const deg = 6;



setInterval(() => {
    let newTime = new Date()
    let hh = newTime.getHours() * 30
    let mm = newTime.getMinutes() * deg;
    let ss = newTime.getSeconds() * deg;

    hu.style.transform = `rotateZ(${(hh)+(mm/12)}deg)`
    min.style.transform = `rotateZ(${mm}deg)`
    sec.style.transform = `rotateZ(${ss}deg)`
})
