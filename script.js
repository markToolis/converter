let inputRub = document.getElementById('rub'),
    inputUsd = document.getElementById('usd');

inputRub.addEventListener('input', () => {
    let request = new XMLHttpRequest();


    request.open('GET', 'server.json');
    request.setRequestHeader('Content-type', 'application/json; churset=utf-8');
    request.send();

    request.addEventListener('readystatechange', function (){
        if(request.readyState === 4 && request.status == 200 ){
            let data = JSON.parse(request.response);

            inputUsd.value = inputRub.value / data.usd;
        }else {
            inputUsd.value = "Что-то пошло не так!";
        }
    });
});