document.addEventListener('DOMContentLoaded', function() {
    var calculateButton = document.getElementById('calculateButton');
    mInput.value = localStorage.getItem('seven_mInputValue') || '';
    nInput.value = localStorage.getItem('seven_nInputValue') || '';
    kInput.value = localStorage.getItem('seven_kInputValue') || '';
    calculateButton.addEventListener('click', function() {
        var mInput = document.getElementById('mInput');
        var nInput = document.getElementById('nInput');
        var kInput = document.getElementById('kInput');
        var resultOutput = document.getElementById('resultOutput');
        var result;
        // Получаем значения из полей ввода
        var m = parseInt(mInput.value);
        var n = parseInt(nInput.value);
        var k = parseInt(kInput.value);

        if(k<m && k<n && m <=n){
            result = combinations(m,k)/combinations(n,k)
            resultOutput.value = result;
            resultOutput.classList.remove('error');
        }else{
            resultOutput.value = "Проверьте введенные данные";
            resultOutput.classList.add('error');
        }
        localStorage.setItem('seven_mInputValue', mInput.value);
        localStorage.setItem('seven_nInputValue', nInput.value);
        localStorage.setItem('seven_kInputValue', kInput.value);
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
const combinations= (n, k) =>{
    let result
    if (k > n){
        return 0;
    }else{
        result = fact(n)/(fact(k)*fact(n-k));
    }
    return result;
}
//привет