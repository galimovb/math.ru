document.addEventListener('DOMContentLoaded', function() {
    var calculateButton = document.getElementById('calculateButton');
    mInput.value = localStorage.getItem('six_mInputValue') || '';
    nInput.value = localStorage.getItem('six_nInputValue') || '';
    calculateButton.addEventListener('click', function() {
        var mInput = document.getElementById('mInput');
        var nInput = document.getElementById('nInput');
        var resultOutput = document.getElementById('resultOutput');

        // Получаем значения из полей ввода
        var m = parseInt(mInput.value);
        var n = parseInt(nInput.value);

        if(m>=n){
            resultOutput.value = "Проверьте введенные данные";
            resultOutput.classList.add('error');
        }else{

            resultOutput.value= (fact(n+m-1))/((n-1)*fact(m));
            resultOutput.classList.remove('error');
        }
        localStorage.setItem('six_mInputValue', mInput.value);
        localStorage.setItem('six_nInputValue', nInput.value);
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
