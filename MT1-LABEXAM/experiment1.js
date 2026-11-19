const EventEmitter = require('events');
const button = new EventEmitter();

// Click event
button.on('click', () => {
    console.log("Button clicked!");
});

// Mouseover event
button.on('mouseover', () => {
    console.log("Mouse is over the button!");
});

// Keypress event
button.on('keypress', (key) => {
    console.log("Key pressed:", key);
});

// Trigger events
button.emit('click');
button.emit('mouseover');
button.emit('keypress', 'Enter');