 // Takes HTML DOM and presents tags used in page

 main();

 function main() {
     let elements = getElements();
     showElements(elements);
 }

function  getElements() {
    elements = document.getElementsByTagName("*");
    return elements;
}

function showElements(elements) {
    l = elements.length;
    for (i = 0; i < l; i++) {
        document.write(`${elements[i].tagName} <br>`);
    }
}

// Credit to: https://www.w3schools.com/jsref/dom_obj_htmlcollection.asp
// For information on displaying element names