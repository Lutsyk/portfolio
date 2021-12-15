// Set the date we're counting down to
let countDownDate = new Date('Jan 21, 2022 05:23:23').getTime();

// Update the count down every 1 second
let x = setInterval(function() {

  // Get today's date and time
  let now = new Date().getTime();
    
  // Find the distance between now and the count down date
  let distance = countDownDate - now;
    
  // Time calculations for hours, minutes and seconds
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element
  document.querySelectorAll('.timer-section').forEach((timer) => {
    timer.innerHTML = '<h2>'+ hours + '<span> hr </span> :  '
    + minutes + '<span> min </span> :  ' + '<span>'+seconds+'</span>' + '<span> sec </span></h2>';
  });
    
  // If the count down is over, write EXPIRED 
  if (distance < 0) {
    clearInterval(x);
    document.querySelectorAll('.timer-section').forEach((timer) => {
        timer.innerHTML = '<h2>EXPIRED</h2>';
    });
  }
}, 1000);

