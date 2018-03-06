onmessage = function(e) {
    setInterval(showMessage, 5000);  
}

function showMessage(){
    let date = new Date();
    let time = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    getAccountsCount().then(count => { postMessage([count, time]) });
}

async function getAccountsCount(){
    var collection = await fetch("http://localhost:2403/accounts", {method: 'GET'})
        .then(response => {return response.json()})
        .then(obj => {return obj.length});

    return collection;					
}