//import our keyboard class from our typescript build folder
import Keyboard from '/build/keyboard.js'

//getting the text input HTML element from our html page so we can pass it to the keyboard object
let inputBox = document.getElementById("textbox")

//constructor for our keyboard object
let keyboard = new Keyboard(document, 800, 300, "keyboardContainer");

// you can use the .show() and .hide() to add and remove the keyboard from the screen
keyboard.show();

//you can direct the keyboard output using the .setTarget() method
keyboard.setTarget(inputBox);