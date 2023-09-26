let celciusInput= document.querySelector('#celcius > input')
let FahrenheitInput= document.querySelector('#Fahrenheit > input')
let KelvinInput= document.querySelector('#Kelvin > input')

let btn = document.querySelector('.button button')

function roundnumber(number){
    return  Math.round(number*100)/100
}

celciusInput.addEventListener('input',function(){

    let cTemp= parseFloat(celciusInput.value)
    let fTemp=(cTemp*(9/5))+32
    let kTemp=cTemp+273.15

    FahrenheitInput.value = roundnumber(fTemp)
    KelvinInput.value = roundnumber(kTemp)


})

FahrenheitInput.addEventListener('input',function(){

    let fTemp= parseFloat(celciusInput.value)
    let cTemp=(fTemp-32)*(5/9)
    let kTemp=(fTemp-32)*(5/9)+273.15

    celciusInput.value = roundnumber(cTemp)
    KelvinInput.value = roundnumber(kTemp)


})


KelvinInput.addEventListener('input',function(){

    let kTemp= parseFloat(celciusInput.value)
    let cTemp=kTemp-273.5
    let fTemp=(kTemp-273.15)*(9/5)+32

    FahrenheitInput.value = roundnumber(fTemp)
    celciusInput.value = roundnumber(cTemp)


})

btn.addEventListener('click',()=>{
    celciusInput.value=""
    FahrenheitInput.value=""
    KelvinInput.value=""
    
})