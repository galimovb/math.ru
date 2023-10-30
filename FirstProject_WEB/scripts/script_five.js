document.addEventListener('DOMContentLoaded', function() {
    mInput.value = localStorage.getItem('five_mInputValue') || '';
    nInput.value = localStorage.getItem('five_nInputValue') || '';
    var calculateButton = document.getElementById('calculateButton');
    calculateButton.addEventListener('click', function() {
        var mInput = document.getElementById('mInput');
        var nInput = document.getElementById('nInput');
        var resultOutput = document.getElementById('resultOutput');

        // Получаем значения из полей ввода
        var m = parseInt(mInput.value);
        var n = parseInt(nInput.value);

        if(m<=n){
            resultOutput.value= fact(n)/(fact(m)*fact((n-m)));
            resultOutput.classList.remove('error');
        }else{
            resultOutput.value = "Проверьте введенные данные";
            resultOutput.classList.add('error');
        }
        localStorage.setItem('five_mInputValue', mInput.value);
        localStorage.setItem('five_nInputValue', nInput.value);
    });
});
const fact= (n) =>{
    if (n === 0 || n === 1) {
        return 1;
    }

    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }

    return result;
}
