const operator = prompt(`enter a operator to perform example (*, /,  +,  -)`)
const firstNum =parseFloat( prompt('enter first number'));
const secondNum = parseFloat( prompt('enter second number'));
let totalScore =0;

if(isNaN(firstNum) || isNaN(secondNum)){
    alert('Space cannot be blank and input must be a number ')
}
else{
    if(operator ==='+'){
        totalScore =firstNum + secondNum
    }
    else if(operator ==='-'){
        totalScore =firstNum- secondNum
    }
    else if(operator ==='*'){
        totalScore = firstNum * secondNum
    }
    else if(operator ==='/'){
        totalScore =firstNum/secondNum
    }
    const output = `The total score is ${firstNum} ${operator}  ${secondNum} = ${totalScore}`
    alert(output)    
}
