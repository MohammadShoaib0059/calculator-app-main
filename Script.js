/*let string = document.getElementById('text').value; 
let buttons = Array.from(document.querySelectorAll('button'));
buttons.map(button =>{
    button.addEventListener('click',(e) =>{
        switch(e.target.innerText){
            case 'RESET':
                string.innerText = '';
                break;
                case 'DEL':
                    if(string.innerText){
                        string.innerText = string.innerText.slice(0,-1);
                    }
                    break;
                    case '=':
                        string.innerText = eval(string.innerText);
                        break;
                    default :
                    string.innerText += e.target.innerText;
        }
    });
});
*/

let string = '';
let buttons = document.querySelectorAll("button");
Array.from(buttons).forEach((button) =>{
    button.addEventListener('click',(e) => {
        switch(e.target.innerText){
            case '=':
                string= eval(string);
                document.getElementById("text").value = string;
            break;
            case 'RESET':
                string = '';
                document.getElementById("text").value = string;
            break;
            case 'DEL':
                 string = string.slice(0,-1);
                 document.getElementById("text").value = string;
            break;
            default :
                string = string + e.target.innerText;
                document.getElementById("text").value = string;
                }    
    });
});

var theme = document.getElementById("theme");
var button = document.getElementsByClassName("btn");
var reset = document.getElementById("Rest");
var equal = document.getElementById("equal");
var del = document.getElementById("Del")
var display = document.getElementById("text");
function themeChange() {
if(theme.checked){
button.className = "bg-dark text-white";
}
}