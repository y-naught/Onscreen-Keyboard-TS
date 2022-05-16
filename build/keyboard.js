export default class Keyboard {
    constructor(dom, _w, _h, clss) {
        this.dom = dom;
        this.width = _w;
        this.height = _h;
        this.container = this.dom.createElement('div');
        this.numRows = 4;
        this.layoutToggle = false;
        this.shiftToggle = false;
        this.container.classList.add(clss);
        this.container.style.width = this.width.toString();
        this.container.style.height = this.height.toString();
        this.keys = new Array();
        this.rows = this.constructKeyboard();
        this.rows.forEach((row) => {
            this.container.appendChild(row);
        });
        this.dom.body.appendChild(this.container);
    }
    //this method allows you to set a target for the input box to modify
    setTarget(input) {
        this.keys.forEach((key) => {
            key.setInputTarget(input);
        });
        this.inputTarget = input;
    }
    // this is where we define the layout of our keyboard and create all of our objects
    // I'm sure there is a way to make this code cleaner and more professional, 
    // but sometimes speed of development is a priority
    constructKeyboard() {
        let rows;
        rows = [];
        //create the div elements for each row
        for (let i = 0; i < this.numRows; i++) {
            rows[i] = this.dom.createElement('div');
        }
        // create row 1 of keys
        rows[0].classList.add("row");
        let q = new Key('q', '1', 1, 'letter', this.dom, this);
        let w = new Key('w', '2', 1, 'letter', this.dom, this);
        let e = new Key('e', '3', 1, 'letter', this.dom, this);
        let r = new Key('r', '4', 1, 'letter', this.dom, this);
        let t = new Key('t', '5', 1, 'letter', this.dom, this);
        let y = new Key('y', '6', 1, 'letter', this.dom, this);
        let u = new Key('u', '7', 1, 'letter', this.dom, this);
        let i = new Key('i', '8', 1, 'letter', this.dom, this);
        let o = new Key('o', '9', 1, 'letter', this.dom, this);
        let p = new Key('p', '_', 1, 'letter', this.dom, this);
        let del = new Key('del', 'null', 2, 'delete', this.dom, this);
        rows[0].appendChild(q.getKey());
        rows[0].appendChild(w.getKey());
        rows[0].appendChild(e.getKey());
        rows[0].appendChild(r.getKey());
        rows[0].appendChild(t.getKey());
        rows[0].appendChild(y.getKey());
        rows[0].appendChild(u.getKey());
        rows[0].appendChild(i.getKey());
        rows[0].appendChild(o.getKey());
        rows[0].appendChild(p.getKey());
        rows[0].appendChild(del.getKey());
        const rowOneObjects = [q, w, e, r, t, y, u, i, o, p, del];
        rowOneObjects.forEach((key) => {
            this.keys.push(key);
        });
        // create row 2 of keys
        rows[1].classList.add("row");
        let a = new Key('a', '!', 1, 'letter', this.dom, this);
        let s = new Key('s', '@', 1, 'letter', this.dom, this);
        let d = new Key('d', '#', 1, 'letter', this.dom, this);
        let f = new Key('f', '$', 1, 'letter', this.dom, this);
        let g = new Key('g', '%', 1, 'letter', this.dom, this);
        let h = new Key('h', '^', 1, 'letter', this.dom, this);
        let j = new Key('j', '&', 1, 'letter', this.dom, this);
        let k = new Key('k', '*', 1, 'letter', this.dom, this);
        let l = new Key('l', '/', 1, 'letter', this.dom, this);
        //let ret = new Key('q', '1', 1, 'return', this.dom, this);
        rows[1].appendChild(a.getKey());
        rows[1].appendChild(s.getKey());
        rows[1].appendChild(d.getKey());
        rows[1].appendChild(f.getKey());
        rows[1].appendChild(g.getKey());
        rows[1].appendChild(h.getKey());
        rows[1].appendChild(j.getKey());
        rows[1].appendChild(k.getKey());
        rows[1].appendChild(l.getKey());
        //rows[1].appendChild(ret);
        const rowTwoObjects = [a, s, d, f, g, h, j, k, l];
        rowTwoObjects.forEach((key) => {
            this.keys.push(key);
        });
        // create row 3 of keys
        rows[2].classList.add("row");
        let lShft = new Key('shift', 'null', 2, 'shift', this.dom, this);
        let z = new Key('z', '-', 1, 'letter', this.dom, this);
        let x = new Key('x', '+', 1, 'letter', this.dom, this);
        let c = new Key('c', '\'', 1, 'letter', this.dom, this);
        let v = new Key('v', ';', 1, 'letter', this.dom, this);
        let b = new Key('b', '(', 1, 'letter', this.dom, this);
        let n = new Key('n', ')', 1, 'letter', this.dom, this);
        let m = new Key('m', ',', 1, 'letter', this.dom, this);
        let dot = new Key('.', '.', 1, 'letter', this.dom, this);
        let rShft = new Key('shift', 'null', 2, 'shift', this.dom, this);
        rows[2].appendChild(lShft.getKey());
        rows[2].appendChild(z.getKey());
        rows[2].appendChild(x.getKey());
        rows[2].appendChild(c.getKey());
        rows[2].appendChild(v.getKey());
        rows[2].appendChild(b.getKey());
        rows[2].appendChild(n.getKey());
        rows[2].appendChild(m.getKey());
        // rows[2].appendChild(com);
        rows[2].appendChild(dot.getKey());
        rows[2].appendChild(rShft.getKey());
        const rowThreeObjects = [lShft, z, x, c, v, b, n, m, dot, rShft];
        rowThreeObjects.forEach((key) => {
            this.keys.push(key);
        });
        // create row 4 of keys
        rows[3].classList.add("row");
        let symToggle = new Key('?!123', 'abc', 3, 'toggle', this.dom, this);
        let spaceBar = new Key(' ', ' ', 6, 'letter', this.dom, this);
        let dotCom = new Key('.com', '.com', 3, 'combined', this.dom, this);
        rows[3].appendChild(symToggle.getKey());
        rows[3].appendChild(spaceBar.getKey());
        rows[3].appendChild(dotCom.getKey());
        const rowFourObjects = [symToggle, spaceBar, dotCom];
        rowFourObjects.forEach((key) => {
            this.keys.push(key);
        });
        return rows;
    }
    // Allows us to toggle between normal character and special character layouts
    toggleLayout() {
        if (!this.layoutToggle) {
            // set all of the keys to the secondary layout
            this.keys.forEach((key) => {
                key.toggleText();
            });
            this.layoutToggle = true;
        }
        else {
            // set all of the keys to the primary layout
            this.keys.forEach((key) => {
                key.toggleText();
            });
            this.layoutToggle = false;
        }
    }
    // Allows us to toggle between lower and upper case letters
    toggleShift() {
        if (!this.shiftToggle) {
            // set all keys to shifted
            this.keys.forEach((key) => {
                key.toggleKeyCase();
            });
            this.shiftToggle = true;
        }
        else {
            // set all keys to normal
            this.keys.forEach((key) => {
                key.toggleKeyCase();
            });
            this.shiftToggle = false;
        }
    }
    // returns the number of rows in our keyboard, important for calculating size of keys
    getNumRows() {
        return this.numRows;
    }
    getWidth() {
        return this.width;
    }
    getHeight() {
        return this.height;
    }
    show() {
        // sets the opacity of the contanier to 1
        this.container.style.opacity = '1.0';
        this.container.style.transitionProperty = 'opacity';
        this.container.style.transitionDuration = '1.0';
    }
    hide() {
        // sets the opacity of the containier to 0
        this.container.style.opacity = '0.0';
        this.container.style.transitionProperty = 'opacity';
        this.container.style.transitionDuration = '1.0';
    }
}
// key object will be created for each key in the keyboard class
// Abstracting they key object will help us abstract away the complexity of
// setting and resetting event handlers, cases, etc
/**
 * type possible values
 *      - 'letter' - for keys that would be case sensative
 *      - 'combined' - for keys that are combinations of keys or are not case sensative
 *      - 'delete' - for the backspace key
 *      - 'toggle' - for layout key toggle to reveal special keys
 *      - 'shift'  - for the shift keys
 *
 */
class Key {
    constructor(text, altText, spacing, type, dom, parent) {
        this.text = text;
        this.altText = altText;
        this.spacing = spacing;
        this.dom = dom;
        this.keyType = type;
        this.keyCase = false;
        this.altKey;
        this.parent = parent;
        const keyDiv = this.dom.createElement('div');
        const keyText = this.dom.createElement('p');
        if (this.keyType == 'letter' || this.keyType == 'combined') {
            keyDiv.addEventListener('click', () => this.addValueToTarget());
        }
        else if (this.keyType == 'delete') {
            keyDiv.addEventListener('click', () => this.removeLastVal());
        }
        else if (this.keyType == 'shift') {
            keyDiv.addEventListener('click', () => this.sendToggleShiftMessage());
        }
        else if (this.keyType == 'toggle') {
            keyDiv.addEventListener('click', () => this.sendToggleLayout());
        }
        else {
            console.log('Key type not valid');
        }
        this.keyText = keyText;
        keyText.classList.add('keyText');
        keyText.innerHTML = this.text;
        keyDiv.appendChild(this.keyText);
        keyDiv.style.width = this.calcWidth().toString() + 'px';
        keyDiv.style.height = this.calcHeight().toString() + 'px';
        keyDiv.classList.add('key');
        this.keyDiv = keyDiv;
    }
    // directs the key to where to output when the event listener is triggered
    setInputTarget(input) {
        this.inputTarget = input;
    }
    //ammends the value of the form
    addValueToTarget() {
        if (this.inputTarget) {
            if (!this.altKey) {
                let newVal = this.inputTarget.value + this.text;
                this.inputTarget.value = newVal;
            }
            else {
                let newVal = this.inputTarget.value + this.altText;
                this.inputTarget.value = newVal;
            }
        }
        else {
            console.log("no input target selected!");
        }
    }
    // used exclusively for the delete key
    removeLastVal() {
        if (this.inputTarget) {
            if (this.inputTarget.value.length > 0)
                this.inputTarget.value = this.inputTarget.value.substring(0, this.inputTarget.value.length - 1);
        }
    }
    // called when hitting the shift key
    toggleKeyCase() {
        if (this.keyType == 'letter')
            if (this.keyCase) {
                this.text = this.text.toLowerCase();
                this.updateKeyVal();
                this.keyCase = false;
            }
            else {
                this.text = this.text.toUpperCase();
                this.updateKeyVal();
                this.keyCase = true;
            }
    }
    // called when toggling the special character layout key
    toggleText() {
        if (!this.altKey && this.keyType == 'letter') {
            this.keyText.innerHTML = this.altText;
            this.altKey = true;
        }
        else if (this.keyType == 'letter') {
            this.keyText.innerHTML = this.text;
            this.altKey = false;
        }
    }
    updateKeyVal() {
        if (!this.altKey) {
            this.keyText.innerHTML = this.text;
        }
        else {
            this.keyText.innerHTML = this.altText;
        }
    }
    //these functions allow for communication to the parent object
    sendToggleShiftMessage() {
        if (this.keyType == 'shift') {
            // send message to parent object here
            this.parent.toggleShift();
        }
    }
    sendToggleLayout() {
        if (this.keyType == 'toggle') {
            this.parent.toggleLayout();
        }
    }
    calcWidth() {
        return (this.parent.getWidth() / this.parent.getNumRows()) * this.spacing;
    }
    calcHeight() {
        return (this.parent.getHeight() / this.parent.getNumRows());
    }
    //returns the key object to append it to the designated row
    getKey() {
        console.log(this.keyDiv);
        return this.keyDiv;
    }
}
