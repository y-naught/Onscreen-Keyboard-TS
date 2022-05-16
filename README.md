# Purpose
Onscreen Keyboard is written in TypeScript designed for a particular use-case I ran into while producing a web-app designed to be run on a public Kiosk. For security reasons, rather than using the OS onscreen keyboard, we produced a sandboxed keyboard for filling out forms in our system

# Usage
## Add to your project
To add the keyboard to a project add the /build folder to your project and add

`import Keyboard from '/build/keyboard.js'` 

to the top of your project. 

`let keyboard = new Keyboard(document, 800, 300, "keyboardContainer")`

will create a new keyboard object.

`keyboard.show()` 

will show the keyboard on the page.

`keyboard.hide()`

will hide the keyboard on your page by setting the CSS opacity property to 0.

`keyboard.setTarget(inputText)`

will set where the output of the keyboard goes, you must pass a HTML Text Input Element for this to work properly. 

## Ammend the keyboard 
### Recompile TypeScript code
The Typescript build folder is included in this respository, but you may want to make modifications to this system, whether that be the key layout or a using a different language.

After you have made modifications you'll have to use the typescript compiler to create your new build file.

If you don't yet have typescript installed on you system run this in terminal

`npm install -g typescript`

Now you can navigate to root directory of the project where you can simply type 

`tsc` in the terminal.

Now your build file is ready to go. 

### CSS
All the styles associated with this are located in the keyboard.css file, here you can change colors, borders, fonts, etc. 