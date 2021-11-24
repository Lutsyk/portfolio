let eventN; const exDollar = 27.72; const exEuro = 33.12;
const form = document.getElementById('form');
const mName = document.getElementById('mName');
const time = document.getElementById('Time');
const place = document.getElementById('Place');

function eventName() {
    eventN = prompt('Event name', 'meeting');
}

function converter() {
   let ammountEuro = prompt('Amount of euro');
   let ammountDollar = prompt('Amount of dollar'); 
   let convertEuro = (parseInt(ammountEuro)*exEuro).toFixed(2);
   let convertDollar = (parseInt(ammountDollar)*exDollar).toFixed(2); 
   if (parseInt(ammountEuro) < 0|| parseInt(ammountDollar)<0 ||
   isNaN(ammountEuro) === true|| isNaN(ammountDollar) === true) {
    alert('Invalid data')
    converter()
   } else {
    alert(ammountEuro+' euros are equal '+ convertEuro +' hrns, '+ ammountDollar 
    +' dollars are equal '+ convertDollar+' hrns')
   }
   
}

form.addEventListener('submit', e => {
	e.preventDefault();
	checkInputsValid();
});

function checkInputsValid(){
    const meetingName = mName.value.trim();
    const meetingTime = time.value.trim(); 
    const meetingPlace = place.value.trim();

    if (meetingName === ''|| meetingTime === ''|| meetingPlace === '') {
        alert('Input all data')
        setErrorFor(time); setErrorFor(mName); setErrorFor(place);
    } else{
        if (!vallTime(meetingTime)) {
            alert('Enter time in format hh:mm')
            setErrorFor(time);
         } else {
             console.log('example')
             setSuccessFor(time);setSuccessFor(mName);setSuccessFor(place);
         }
    }
}

function vallTime(time) {
    return /^(2[0-3]|[01]?[0-9]):([0-5]?[0-9])$/.test(time)
}

function setErrorFor(input) {
	const inputs = input.parentElement;
	inputs.className = 'inputs error';
}

function setSuccessFor(input) {
	const inputs = input.parentElement;
	inputs.className = 'inputs success';
}

window.onload = eventName;