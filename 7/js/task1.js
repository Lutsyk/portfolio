let amount;
let years;
let percentage;
let yearsT;
let maxAmount = 1000;
let maxYears = 1;
let maxPercentage = 100;
let indexNegative = -1;

amount = parseInt(prompt('Inputs initial amount'));
let amountT = isNaN(amount);
  for (let index = 0; index < 1; index++) {
    if (amountT === true || amount === null || amount < maxAmount) {
        alert('Invalid input data')
        amount = parseInt(prompt('Inputs initial amount'));
        amountT = isNaN(amount);
        index = indexNegative;
    } else {
        if (yearsT === true || years === null || years === undefined || years < maxYears) {
            years = parseInt(prompt('Number of years'));
            yearsT = isNaN(years);
            if (yearsT === true || years === null || years === undefined || years < maxYears) {
                alert('Invalid input data');
            } 
            index = indexNegative;
        } else {
            percentage = parseInt(prompt('Percentage of a year'));
            let percentageT = isNaN(percentage);
            if (percentageT === true || percentage === null || percentage > maxPercentage) {
                alert('Invalid input data')
                index = indexNegative;
            } else {
                index = index++;
                let procent = 100;
                let fixDuration = 2;
                let total = (amount*Math.pow(1+percentage/procent,years)).toFixed(fixDuration);
                let profit = (total - amount).toFixed(fixDuration);
                alert('Initial amount: '+ amount +'\nNumber of years: '+ 
                years +'\nPercentage of year: '+ percentage +'\nTotal profit: '+ profit +'\nTotal amount: '+ total);
            }
        }
    }
  }
  

