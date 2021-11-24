function visitLink(path) {
	if (localStorage.getItem('Pg1')===null||localStorage.getItem('Pg2')===null||localStorage.getItem('Pg3')===null) {
		localStorage.setItem('Pg1','0')
		localStorage.setItem('Pg2','0')
		localStorage.setItem('Pg3','0')
	}
	let counterO = parseInt(localStorage.getItem('Pg1'))
	let counterT = parseInt(localStorage.getItem('Pg2'))
	let counterTr = parseInt(localStorage.getItem('Pg3'))

	if (path === 'Page1') {
		counterO ++
		localStorage.setItem('Pg1',counterO)
	} else if (path === 'Page2'){

		counterT ++
		localStorage.setItem('Pg2',counterT)
	} else{

		counterTr ++
		localStorage.setItem('Pg3',counterTr)
	}
	
}

function viewResults() {
		let page1 = '<li>You visited Page1 '+ localStorage.getItem('Pg1') +' time(s)</li><br>'
		let page2 = '<li>You visited Page2 '+ localStorage.getItem('Pg2') +' time(s)</li><br>'
		let page3 = '<li>You visited Page3 '+ localStorage.getItem('Pg3') +' time(s)</li>'
		let entry = document.createElement('div');
		let button = document.querySelector('.container')
		entry.appendChild(document.createTextNode(page1));
		entry.innerHTML = page1+page2+page3
		button.appendChild(entry);
		document.querySelector('button').disabled = true;
		localStorage.clear()
}



 