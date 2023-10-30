document.addEventListener('DOMContentLoaded', function() {
    var calculateButton = document.getElementById('calculateButton');
    mInput.value = localStorage.getItem('four_mInputValue') || '';
    nInput.value = localStorage.getItem('four_nInputValue') || '';
    calculateButton.addEventListener('click', function() {
        var mInput = document.getElementById('mInput');
        var nInput = document.getElementById('nInput');
        var resultOutput = document.getElementById('resultOutput');

        // Получаем значения из полей ввода
        var m = parseInt(mInput.value);
        var n = nInput.value;

        var array = n.split(',').map((item)=>item.trim()).map((x)=>parseInt(x));
        var n_top = 0;
        var n_fact=1;
        if (m===array.length){
            for(var i=0;i<array.length;i++){
                n_top+=array[i];
                n_fact = n_fact * fact(array[i])
            }
            resultOutput.value = fact(n_top)/n_fact;
            resultOutput.classList.remove('error');
        }else{
            resultOutput.value= "Проверьте введенные данные";
            resultOutput.classList.add('error');
        }
        localStorage.setItem('four_mInputValue', mInput.value);
        localStorage.setItem('four_nInputValue', nInput.value);

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