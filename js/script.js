//variabili

let km;
const priceKm = 0.21;
let priceTicket;

const discountOver65 = 0.6; //sconto over 65
const discountMinor = 0.8;  //sconto minorenni

const myButton = document.getElementById('myButton');

let infoTicket = document.getElementById('infoTicket');

let optionAge;
//Setto il mio bottone
myButton.addEventListener('click', function(){
    km = document.getElementById('km');
    kmValue = parseInt(km.value);
    document.getElementById('kmInput').innerHTML = kmValue;
    
    userName = document.getElementById('userName');
    userNameValue = userName.value;
    
    userLastName = document.getElementById('userLastName');
    userLastNameValue = userLastName.value;

    document.getElementById('userNameInput').innerHTML = userNameValue + " " + userLastNameValue;
    
    optionAge = document.getElementById('optionAge');
    optionAge = optionAge.value;
    document.getElementById('ageUserInput').innerHTML = optionAge;
    console.log('option', optionAge, typeof optionAge);

    //applico scontistica in base all'età
    if (optionAge == 'minorenne'){
        //sconto minori
        console.log('Sconto minori');
        priceTicket = kmValue * priceKm * discountMinor;
        document.getElementById('price').innerHTML = priceTicket.toFixed(2) + '€ (scontato del 20%, sconto minori)';
        console.log('prezzo', priceTicket.toFixed(2));
    }
    else if (optionAge == 'over65'){
        //sconto over
        console.log('Sconto over');
        priceTicket = kmValue * priceKm * discountOver65;
        document.getElementById('price').innerHTML = priceTicket.toFixed(2) + '€ (scontato del 40%, sconto over 65)';
        console.log('prezzo', priceTicket.toFixed(2));
    }
    else{
        //niente sconto 
        console.log('niente sconto');
        priceTicket = kmValue * priceKm;
        document.getElementById('price').innerHTML = priceTicket.toFixed(2) + '€';
    }

    //azzero il compilamento dell'utente

    km.value = '';
    userName.value = '';
    userLastName.value = '';
})





