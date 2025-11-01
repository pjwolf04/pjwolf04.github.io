favMonth = prompt('What is your favorite month  ')
favMonth = favMonth.toLowerCase();

switch(favMonth) {
    case 'january':
        console.log('Welcome to the first Month')
    break 
    case 'february':
        console.log('Welcome to the end of winter')
    break
    case 'march': 
        console.log('Welcome to baseball')
    break
    case 'april': 
        console.log('enough fooling around')
    break
    case 'may':
        console.log('The end of spring is here')
    break
    case 'june':
        console.log('summer is here') 
    break
    case 'july': 
        console.log('Is it time to shoot of fireworks yet?')
    break 
    case 'august': 
        console.log('Harvest Season')
    break 
    case 'september': 
        console.log('Starting classes again. ')
    break 
    case 'october':
        console.log('Spooky Season')
    break 
    case 'november': 
        console.log('time to turn back time')
    break
    case 'december': 
    console.log(' Christmas time ') 
break}

if ( (favMonth === 'january' || favMonth === 'february' || favMonth === 'december')
) {
  console.log('You love the winter months!')
} else if ((favMonth === 'june' || favMonth === 'july' || favMonth === 'august')
 ) {
  console.log('you love summer months!')
} else {
console.log('Other months are interesting too!')
}