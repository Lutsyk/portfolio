const appRoot = document.getElementById('app-root');
const radio = document.getElementsByName('searchOne');
const region = document.getElementById("region");
const languege = document.getElementById("languege");
const defaultV = document.getElementById("defaultV");
const disableStart = document.getElementById("lableSelect");
const tabelCreate = document.getElementById("myTable");
const tableBody = document.getElementById("tbody");
const tableHead = document.querySelectorAll('thead');
let regionValue = externalService.getRegionsList();
let languageValue = externalService.getLanguagesList();
let i = 0; let chooseVal; let valueOfSearch; let radioClick
let parametrOfObjElement; let counter

function sortTableByColumn(table, column, asc = true) {
    const dirModifier = asc ? 1 : -1;
    const tBody = table.tBodies[0];
    const rows = Array.from(tBody.querySelectorAll("tr"));

    //sort each rows
    const sortedRows = rows.sort((a,b) => {
        const aColText = a.querySelector(`td:nth-child(${ column + 1})`).textContent.trim();
        const bColText = b.querySelector(`td:nth-child(${ column + 1})`).textContent.trim();


        return aColText > bColText ? 1 * dirModifier : -1 * dirModifier
    })

    // console.log(sortedRows) rem all exist TRS from the table
    while (tBody.firstChild) {
        tBody.removeChild(tBody.firstChild);
    }

    // re add sort rows

    tBody.append(...sortedRows);

    // remember how the colum curr sort 

    table.querySelectorAll("th").forEach(th => th.classList.remove("th-sort-asc", "th-sort-desc"));
    table.querySelector(`th:nth-child(${ column + 1})`).classList.toggle("th-sort-asc", asc);
    table.querySelector(`th:nth-child(${ column + 1})`).classList.toggle("th-sort-desc", !asc);
}

document.querySelectorAll('.table-sortable th').forEach(headerCell => {
    headerCell.addEventListener('click', () => {
        const tableElement = headerCell.parentElement.parentElement.parentElement;
        const headerIndex = Array.prototype.indexOf.call(headerCell.parentElement.children, headerCell);
        const currentIsAscending = headerCell.classList.contains('th-sort-asc');
        
        sortTableByColumn(tableElement, headerIndex, !currentIsAscending);

    });
});

function nameA(valueOfRadio) {
    if (i > 0) {
        if (chooseVal === 'region') {
            for (let index = 0; index < languageValue.length; index++) {
                disableStart.innerHTML = '';
                i = 0
            }
        } else{
            for (let index = 0; index < regionValue.length; index++) {
                disableStart.innerHTML = '';
                i = 0
            }
        }
    }
    if (valueOfRadio === 'region') {
        chooseVal = regionValue
        
    } else {
        chooseVal = languageValue
    }
    createList(chooseVal)
}

function createList(chooseVal) {
    i ++
    for (let index = 0; index < chooseVal.length; index++) {
        let create = document.createElement('option');
        create.value = chooseVal[index];
        create.innerHTML = chooseVal[index];
        disableStart.appendChild(create);
    }
}

function handleClick(radio) {
    disableStart.disabled = false;
    if (radio.value==='region') {
        defaultV.style.display = "none";
        radioClick = 'region'
        nameA('region')
    } else {
        defaultV.style.display = "none";
        radioClick = 'languege'
        nameA('languege')
    } 
}

function chooseValue() {
  let x = document.getElementById("lableSelect").selectedIndex;
  valueOfSearch = document.getElementsByTagName("option")[x].value;
  if (radioClick ==='region') {
    tabelCreate.style.display = "unset"
    parametrOfObjElement = externalService.getCountryListByRegion(valueOfSearch)
    tableCreate(parametrOfObjElement);



  } else {
    parametrOfObjElement = externalService.getCountryListByLanguage(valueOfSearch)
    tabelCreate.style.display = "unset"
    tableCreate(parametrOfObjElement);

  }
  
}

function tableCreate(param) {
    let objectParam = param;
    if (counter === 1) {
        tabelCreate.lastChild.remove();
        counter = 0
    }
    counter = 1
    tabelCreate.setAttribute('border', '1');
    let tbdy = document.createElement('tbody');
    
    for (let i = 0; i < objectParam.length; i++) {
      let tr = document.createElement('tr');
      for (let j = 0; j < 6; j++) {
        if (i === objectParam.length && j === 1) {
          break
        } else {
          let td = document.createElement('td');
          if (j===0) {
            td.appendChild(document.createTextNode(objectParam[i].name))
          } else if (j===1) {
            td.appendChild(document.createTextNode(objectParam[i].capital))
          } else if (j===2) {
            td.appendChild(document.createTextNode(objectParam[i].region))
          } else if (j===3) {
            for (const key in objectParam[i].languages) {
                if (Object.hasOwnProperty.call(objectParam[i].languages, key)) {
                    const element = objectParam[i].languages[key];
                    td.appendChild(document.createTextNode(element+' '))
                }
            }
            
          } else if (j===4) {
            td.appendChild(document.createTextNode(parseInt(objectParam[i].area)))
          } else {
            var x = document.createElement("IMG");
            let imgValue = objectParam[i].flagURL 
            x.setAttribute("src", '' + imgValue);
            td.appendChild(x)
          }
          
          
          i === 1 && j === 1 ? td.setAttribute('rowSpan', '1') : null;
          tr.appendChild(td)
        }
      }
      tbdy.appendChild(tr);
    }
    tabelCreate.appendChild(tbdy);
}
  
