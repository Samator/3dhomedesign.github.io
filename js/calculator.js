const packageLight = document.querySelector('.light');
const packageMedium = document.querySelector('.medium');
const packageFull = document.querySelector('.full');

const resultPackage = document.querySelector('#result_package');
var resultPrice = document.querySelector('#result-price');
const resultArea = document.querySelector('#result-area');

const inputArea = document.querySelector('.input_area');
function fun1(){
    resultArea.textContent = inputArea.value + " м2";
}



packageLight.addEventListener('click', function(event){
    packageLight.classList.add('package__active');
    packageMedium.classList.remove('package__active');
    packageFull.classList.remove('package__active');
    resultPackage.textContent = "Light";
});
packageMedium.addEventListener('click', function(event){
    packageLight.classList.remove('package__active');
    packageMedium.classList.add('package__active');
    packageFull.classList.remove('package__active');
    resultPackage.textContent = "Medium";
});
packageFull.addEventListener('click', function(event){
    packageLight.classList.remove('package__active');
    packageMedium.classList.remove('package__active');
    packageFull.classList.add('package__active');
    resultPackage.textContent = "Full";
});



