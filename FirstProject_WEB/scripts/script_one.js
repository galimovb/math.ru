document.addEventListener('DOMContentLoaded', function() {
    var calculateButton = document.getElementById('calculateButton');
    mInput.value = localStorage.getItem('one_mInputValue') || '';
    nInput.value = localStorage.getItem('one_nInputValue') || '';
    calculateButton.addEventListener('click', function() {
        var mInput = document.getElementById('mInput');
        var nInput = document.getElementById('nInput');
        var resultOutput = document.getElementById('resultOutput');

        // Получаем значения из полей ввода
        var m = parseInt(mInput.value);
        var n = parseInt(nInput.value);

        // Вычисляем результат по формуле или логике, которую вы предпочитаете использовать
        if(m>=n){
            resultOutput.value = "Проверьте введенные данные";
            resultOutput.classList.add('error');
        }else {
            resultOutput.value= fact(n)/fact(n-m);
            resultOutput.classList.remove('error');

        }
        localStorage.setItem('one_mInputValue', mInput.value);
        localStorage.setItem('one_nInputValue', nInput.value);
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