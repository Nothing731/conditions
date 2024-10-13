// //Conditions

// let login = prompt('Enter login')
// let pass =  prompt('Enter your password')

// if (login === 'admin' && pass === 'root' || login === 'root' && pass === 'admin') {
//     alert('Welcome');
// } else {
//     alert('Not Welcome')
// }

// let num1 =  +prompt("Enter first number")
// let num2 = +prompt('Enter second number')

// if (!isNaN(num1) && !isNaN(num2)) {
//     if(num1 === num2){
//         alert('Equal')
//     }else{
//         alert('Not equal')
//     }
// } else {
//     alert('It\'s not a number')
// }

let weekday = +prompt("Enter week day")

switch (weekday) {
    case 1:
        alert('Monday')
        break;
    case 2: 
        alert('Tuesday')
        break;
    case 3: 
        alert('Wednesday')
        break;
    case 4: 
        alert('Thursday')
        break;
    case 5: 
        alert('Friday')
        break;
    case 6: 
        alert('Saturday')
        break;
    case 7:
        alert('Sunday')
        break;
}