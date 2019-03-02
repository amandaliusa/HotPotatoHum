function toggleStyle(el, styleName, value) {
    // Takes an element, a style field, and the value of the field. If the
    // current value of the element's field corresponding to styleName is
    // "", set it to value. Otherwise, reset it to "".
    if (el.style[styleName] === "") {
        el.style[styleName] = value;
    }
    else {
        el.style[styleName] = "";
    }
}

function onFormSubmit(e) {
    // Takes an event corresponding to form submission.
    var form = e.target;

    // Prevent the form from actually submitting.
    e.preventDefault();

    // Print values of foo input and bar input together to response div.
    document.getElementById("response").innerHTML = form.foo.value + ' ' +
    form.bar.value;
}

function formAlert(e) {
    // Takes an event corresponding to clicking "Or Click Me!" and
    // generates an alert displaying the foo input and bar input.
    var button = e.target;

    alert("foo: " + button.form.foo.value + "\nbar: " + button.form.bar.value);
}

function toggleBox(e) {
    // Takes an event corresponding to clicking "Button 1" and toggles
    // the display of the box from visible to invisible
    var box = document.getElementById("box");

    toggleStyle(box, "display", "none");
}

function rotateColors(e) {
    // Takes an event corresponding to clicking "Button 2" and
    // rotates the colors of the box from red to blue to green.

    var box = document.getElementById("box");

    if (box.style.backgroundColor === "red") {
        box.style.backgroundColor = "blue";
    }
    else if (box.style.backgroundColor === "blue") {
        box.style.backgroundColor ="green";
    }
    else {
        box.style.backgroundColor = "red";
    }
}

function onTagButtonClick(e) {
    // Takes an event corresponding to clicking any of the tag buttons
    // and toggles the values of style fields within each tag of the
    // appropriate type.
    var button = e.target;
    var tagsEl = document.getElementById("tags");
    var j;

    // Check id of button and get corresponding tags.
    if (button.id === "bold-btn") {
        var b = tagsEl.getElementsByTagName("B");

        // For each bold tag, toggle text color between red and default.
        for (j = 0; j < b.length; j++) {
            if (b[j].style.color === "red") {
                b[j].style.color = "initial";
            }
            else {
                b[j].style.color = "red";
            }
        }
    }
    else if (button.id === "italic-btn") {
        var i = tagsEl.getElementsByTagName("I");

        // For each italic tag, toggle background color between gray and
        // default.
        for (j = 0; j < i.length; j++) {
            if (i[j].style.backgroundColor === "gray") {
                i[j].style.backgroundColor = "initial";
            }
            else {
                i[j].style.backgroundColor = "gray";
            }
        }
    }
    else {
        var u = tagsEl.getElementsByTagName("U");

        // For each underline tag, toggle border between no border and a
        // 1 pixel-thick solid blue border
        for (j = 0; j < u.length; j++) {
            if (u[j].style.border === "1px solid blue") {
                u[j].style.border = "initial";
            }
            else {
                u[j].style.border = "1px solid blue";
            }
        }
    }
}

function initCanvas() {
    // Fills canvas with color #ddd.
    var c = document.getElementById("canvas");
    var ctx = c.getContext("2d");

    ctx.fillStyle = "#ddd";
    ctx.fillRect(0, 0, c.width, c.height); // Fill entire canvas.
}

function randomColor() {
    // Returns a random color.
    var r = (Math.random() * 256 | 0).toString(16);
    var g = (Math.random() * 256 | 0).toString(16);
    var b = (Math.random() * 256 | 0).toString(16);
    return "#" + r + g + b;
}

function drawBox(e) {
    // Takes an event corresponding to a mouse click and draws a randomly
    // colored box with width between 50 and 200 and height between 50
    // and 100 such that it is centered around the location of the mouse click.
    var c = document.getElementById("canvas");
    var ctx = c.getContext("2d");

    // Firefox doesn't set offsetX/offsetY.
    if(!e.hasOwnProperty('offsetX')) {
      e.offsetX = e.layerX - e.currentTarget.offsetLeft;
      e.offsetY = e.layerY - e.currentTarget.offsetTop;
    }
    var mouseX = e.offsetX;
    var mouseY = e.offsetY;

    var width = Math.random() * 150 + 50; // Randomly generate width.
    var height = Math.random() * 50 + 50; // Randomly generate height.

    ctx.fillStyle = randomColor(); // Fill box with random color.

    // Draw box with correct dimensions.
    ctx.fillRect(mouseX - 0.5 * width, mouseY - 0.5 * height, width, height);
}
