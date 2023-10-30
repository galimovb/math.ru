document.addEventListener('DOMContentLoaded', function() {
    var calculateButton = document.getElementById('calculateButton');
    mInput.value = localStorage.getItem('three_mInputValue') || '';
    calculateButton.addEventListener('click', function() {
        var mInput = document.getElementById('mInput');
        var resultOutput = document.getElementById('resultOutput');
        var m = parseInt(mInput.value);

        if(m<0){
            resultOutput.value = "Проверьте введенные данные";
            resultOutput.classList.add('error');
        }else{
            resultOutput.value = fact(m);
            resultOutput.classList.remove('error');
        }
        localStorage.setItem('three_mInputValue', mInput.value);
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