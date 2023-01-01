let elHjmi = document.querySelector('.hajmi')
let elBtn = document.querySelector('.btn')
let elBtn1 = document.querySelector('.btn1')
let elBtn2 = document.querySelector('.btn2')
let elBtn3 = document.querySelector('.btn3')
let elSelect = document.querySelector('.select')
let elForm = document.querySelector('.form')
let elSpan1 = document.querySelector('.span1')
let elInput1 = document.querySelector('.inp1')
let elInput2 = document.querySelector('.inp2')
let elInput3= document.querySelector('.inp3')
let elInput4 = document.querySelector('.inp4')
let elInput5 = document.querySelector('.inp5')
let elInput6 = document.querySelector('.inp6')
let elInput8 = document.querySelector('.inp7')
let elSelect1 = document.querySelector('.select_yupqa')
let elSelect2 = document.querySelector('.select_orta')
let elSelect3 = document.querySelector('.select_qalin')
let elHamiri = document.querySelector('.hamiri')
let elUstida = document.querySelector('.ustida')
let elUsti1 = document.querySelector('.usti1')
let elUsti2 = document.querySelector('.usti2')
let elUsti3 = document.querySelector('.usti3')
let elUsti4 = document.querySelector('.usti4')
let elUsti5 = document.querySelector('.usti5')
let elUsti6 = document.querySelector('.usti6')
let elQoshimcha = document.querySelector('.qoshimcha')
let elRadio1 = document.querySelector('.input7')
let elRadio2 = document.querySelector('.input8')
let elTheme =  document.querySelector('.theme')
let elBody = document.querySelector('body')
let elTitle = document.querySelector('.title')
let elChegara = document.querySelector('.chegara')

// Web Site Theme

elTheme.addEventListener('click',function(){
    console.log('ok');
    elBody.classList.toggle("light")
    
})





function GetChange(){
    elHamiri.textContent = elSelect.value
}
function hajmi1(){
    elHjmi.textContent = "25 sm"
}
function hajmi2(){
    elHjmi.textContent = "30 sm"
}
function hajmi3(){
    elHjmi.textContent = "35 sm"
}
function radio1(){
    elQoshimcha.textContent = " Achchiq"
}
function radio2(){
    elQoshimcha.textContent = " Pishloq"
}

elInput1.addEventListener('change',function(){
    elUsti1.textContent = 'Pomidor, '
})
elInput2.addEventListener('change',function(){
    elUsti6.textContent = "Kurka go'shti, "
})
elInput3.addEventListener('change',function(){
    elUsti3.textContent = "Zaytun, "
})
elInput4.addEventListener('change',function(){
    elUsti2.textContent = "Tuzlangan Bodiring, "
})
elInput5.addEventListener('change',function(){
    elUsti4.textContent = "Qo'ziqorin, "
})
elInput6.addEventListener('change',function(){
    elUsti5.textContent = "Qazi, "
})
