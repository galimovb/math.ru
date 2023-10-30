document.addEventListener('DOMContentLoaded', function() {
    var calculateButton = document.getElementById('calculateButton');
    var mInput = document.getElementById('mInput');
    var nInput = document.getElementById('nInput');
    var kInput = document.getElementById('kInput');
    var rInput = document.getElementById('rInput');
    var resultOutput = document.getElementById('resultOutput');

    // Восстановление значений полей ввода из localStorage
    mInput.value = localStorage.getItem('mInputValue') || '';
    nInput.value = localStorage.getItem('nInputValue') || '';
    kInput.value = localStorage.getItem('kInputValue') || '';
    rInput.value = localStorage.getItem('rInputValue') || '';

    calculateButton.addEventListener('click', function() {
        // Получаем значения из полей ввода
        var m = parseInt(mInput.value);
        var n = parseInt(nInput.value);
        var k = parseInt(kInput.value);
        var r = parseInt(rInput.value);

        if (k < m && k < n && m <= n && r < m && r < k) {
            var result = (combinations(m, r) * combinations(n - m, k - r)) / combinations(n, k);
            resultOutput.value = result;
            resultOutput.classList.remove('error');
        } else {
            resultOutput.value = "Проверьте введенные данные";
            resultOutput.classList.add('error');
        }

        // Сохранение значений полей ввода в localStorage
        localStorage.setItem('mInputValue', mInput.value);
        localStorage.setItem('nInputValue', nInput.value);
        localStorage.setItem('kInputValue', kInput.value);
        localStorage.setItem('rInputValue', rInput.value);
    });
});

const fact = (n) => {
    if (n === 0 || n === 1) {
        return 1;
    }

    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }

    return result;
};

const combinations = (n, k) => {
    if (k > n) {
        return 0;
    } else {
        return fact(n) / (fact(k) * fact(n - k));
    }
};