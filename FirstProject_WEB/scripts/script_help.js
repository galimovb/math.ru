const formRef = document.getElementById("form");
formRef.addEventListener('submit', event => {
    event.preventDefault();
    const formData = new FormData(formRef);
    const formValues = Object.fromEntries(formData);
    console.log(formValues);

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(formValues)
    })
        .then(response => {
            if (response.ok) {
                alert('Над вашим вопросом уже работают специалисты!');
            } else {
                throw new Error('Ошибка при отправке данных');
            }
        })
        .catch(error => {
            console.log(error);
        });
});