//Mood Changer using event delegation
// Parker Story 11/21/2025


// Step 1: Select the mood display element from the DOM
const moodDisplay = document.getElementById('moodDisplay');
// step 2:define objects with configs
// holds background color, text color, and message for each mood 
const mood = {
    happy: { bg: '#ff9800', text: '#3e273', message: 'Pumpkin spice everything!' },
    calm: {bg: '#4f3be6ff', text: '#18d8d8ff', message : 'peaceful vibes of the ocean'} ,
    excited: {bg: '#c6fc04ff' ,text: 'rgba(204, 60, 17, 0.91)', message: 'Lets have fun' },
    chill: {bg: '#0ff1ce', text: '#0a3d62', message: 'chill office vibes'},
    mysterious: {bg: '#000000', text: '#3c0372ff', message: 'Into the unknown'}
    };

// This listens for clicks anywhere on the page and checks if it's a mood button
document.addEventListener('click', function (event) {
  // Check if the clicked element has the class 'mood-btn'
  if (event.target.classList.contains('mood-btn')) {

    const moodName = event.target.getAttribute('data-mood');
    console.log(moodName);

    const config = mood[moodName];
    console.log(config);



  document.body.style.backgroundColor = config.bg;
// Update the text color of the body
    document.body.style.color = config.text
// Update the display message
   moodDisplay.textContent = config.message;
  }
});
