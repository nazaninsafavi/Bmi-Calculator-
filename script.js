let $ = document
const weightInput = $.querySelector('#weight')
const heightInput = $.querySelector('#height')
const weightVal = $.querySelector('#weight-val')
const heighVal = $.querySelector('#height-val')
const bmiResult = $.querySelector('#result')
const bmiCategory = $.querySelector('#category')


function bmiCalculator(){
    //console.log('bmi')
    
    let weightInputValue = weightInput.value 
    let heightInputValue = heightInput.value 

    weightVal.innerHTML = weightInputValue
    heighVal.innerHTML = heightInputValue

    let bmiValue =(weightInputValue / (Math.pow(heightInputValue/100,2))).toFixed(1)

    bmiResult.innerHTML = bmiValue

    if(bmiValue <18.5){
        bmiCategory.innerHTML = 'Underweight'
        bmiResult.style.color = '#ffc44d'

    }else if(bmiValue >=18.5 && bmiValue <= 24.9){
        bmiCategory.innerHTML = 'Normal weight'
        bmiResult.style.color = '#0be881'

    }else if(bmiValue >=25 && bmiValue <=29.9){
        bmiCategory.innerHTML = 'Overweight'
        bmiResult.style.color = '#ff884d'

    }else{
        bmiCategory.innerHTML = 'Obese'
        bmiResult.style.color = '#ff5e4d'

    }




}

