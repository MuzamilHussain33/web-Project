let userinput = document.querySelector("#userinput");
let btn = document.querySelectorAll("button");

let str = '';
let arr = Array.from(btn);
arr.forEach(btn => {
    btn.addEventListener("click", (e) => {
        if (e.target.innerHTML == '=') {
            str = eval(str);
            userinput.value = str;
        }
        else if(e.target.innerHTML == 'AC'){
            str = '';
            userinput.value = str;
        }
        else if (e.target.innerHTML == 'DEL'){
            str = str.substring(0,str.length-1);
            userinput.value = str;
        }
        else{
            str +=e.target.innerHTML;
            userinput.value = str;
        }
    })
})

