const textBox = document.querySelector(".textBox");
const greetBtn = document.querySelector(".greetBtn");
const greetTxt = document.querySelector(".greetText");
const erroTxt = document.querySelector(".errorTxt");
const resetBtn = document.querySelector(".restBtn");
const formInput = document.querySelector(".input-class")
const counterNumber = document.querySelector(".numberCount");

let data = localStorage.getItem("key") ? JSON.parse(localStorage.getItem("key")) : []
const factoryFunction = greeting(data);

console.log(data.length);


var interger = 0;
var resertNumber = 0;
var alphabets = /^[a-zA-Z]+$/g;

counterNumber.innerHTML = data.length;

function greet() {
    var name = textBox.value;


    const radioBtn = document.querySelector('input[name="btn"]:checked');
    erroTxt.innerHTML = " "

    if (alphabets.test(name) && radioBtn !== null) {
        greetTxt.innerHTML = factoryFunction.velidName(name, radioBtn.value)
        localStorage.setItem("key", JSON.stringify(factoryFunction.getArr()));
        counterNumber.innerHTML = factoryFunction.getArr().length;
    } else {

        if (radioBtn === null) {
            greetTxt.innerHTML = "select language"
        }
        // if (alphabets.test(name) && radioBtn !== null)
        else if (data.includes(name) && radioBtn !== null) {

            greetTxt.innerHTML = factoryFunction.existingName(name, radioBtn.value)

        }
        else if (alphabets.test(name) === false && radioBtn !== null) {
            console.log(!alphabets.test(name))
            console.log(name)
            console.log(radioBtn.value);
            greetTxt.innerHTML = factoryFunction.invelidName(name, radioBtn.value)

        } else {

            greetTxt.innerHTML = factoryFunction.velidName(name, radioBtn.value)
            localStorage.setItem("key", JSON.stringify(factoryFunction.getArr()));
            counterNumber.innerHTML = factoryFunction.getArr().length;

        }
    }

    formInput.reset()
    setTimeout(() => {
        greetTxt.innerHTML = ''

    }, "3000")
}

greetBtn.addEventListener("click", greet)


resetBtn.addEventListener("click", function () {

    localStorage.clear();
    erroTxt.innerHTML = "YOU HAVE CLEARD THE THE MEMORRY"
    counterNumber.innerHTML = 0;
    interger = 0
    greetTxt.innerHTML = ""
    textBox.innerHTML = "Enter name"
    setTimeout(() => {
        erroTxt.innerHTML = ""
    }, "3000")

});