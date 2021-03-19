 // Take input from HTML and create Biblography

 main();

 function main() {
     getValues();
 }

 function getValues() {
     let screenheight = screen.height;
     let screenwidth = screen.width;
     let windowheight = window.innerHeight;
     let windowwidth = window.innerWidth;
     let host = location.hostname;

     document.getElementById('info').innerHTML = `The height of your screen is ${screenheight}pixels and the width is ${screenwidth} 
        pixels.<br>The height of the browser window is ${windowheight}pixels and the width of the browser is ${windowwidth} pixels.<br>The host website
        name is ${host}.`
 }