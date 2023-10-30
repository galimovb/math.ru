document.addEventListener('DOMContentLoaded', function() {
    var calculateButton = document.getElementById('calculateButton');
    mInput.value = localStorage.getItem('two_mInputValue') || '';
    nInput.value = localStorage.getItem('two_nInputValue') || '';
    calculateButton.addEventListener('click', function() {
        var mInput = document.getElementById('mInput');
        var nInput = document.getElementById('nInput');
        var resultOutput = document.getElementById('resultOutput');

        // Получаем значения из полей ввода
        var m = parseInt(mInput.value);
        var n = parseInt(nInput.value);

        // Вычисляем результат по формуле или логике, которую вы предпочитаете использовать
        if(m===0){
            resultOutput.value = "Проверьте введенные данные";
            resultOutput.classList.add('error');
        }else {
            resultOutput.value= Math.pow(n,m);
            resultOutput.classList.remove('error');
        }
        localStorage.setItem('two_mInputValue', mInput.value);
        localStorage.setItem('two_nInputValue', nInput.value);
    });
});
