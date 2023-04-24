// Два друга грають у гру, вони обидва загадують число. 
// Перший повинен перетворити одне число на інше
// за допомогою множення цього числа на 2 (10 * 2 = 20) або додаванням одиниці праворуч (10 + 1 = 101). 

// Потрібно написати програму, яка буде знаходити,
// чи можливо одне число перетворити на інше, використовуючи лише перераховані вище операції.

function getRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

const num1 = getRandomNumber(1, 100);
const num2 = getRandomNumber(1, 250);

console.log(num1, num2); 

function checkNumberToDevide(num){

    while(num % 2 == 0){
        num = num / 2;

        console.log(num)
    } 

    return num == 1 ? console.log('чісло можно получіти множенням на 2 ') : console.log('чісло не можна получіти множенням на 2 ');
};

function checkNumberToAddOne(num){
    return num % 10 == 1 ? console.log('чісло можно получіти додаванням 1 у кінці') : console.log('чісло не можна получіти додаваням 1 у  кінці ');
}

checkNumberToDevide(num1);
checkNumberToDevide(num2);

checkNumberToAddOne(num1);
checkNumberToAddOne(num2)