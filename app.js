
let userName = null;

const enterButton = document.querySelector("#enterButton");
const input = document.querySelector('#input');
const bar2 = document.querySelector('#bar2');

enterButton.addEventListener('click', () => enterClicked());

bar2.addEventListener('submit', function(e){

    e.preventDefault();
    
    const userNameValue = input.value;

    window.localStorage.setItem('user-name', userNameValue);
});


function enterClicked(){
    if((input.value).length != 0 && !(input.value).includes(" ")){
        userName = input.value;
        window.location = "index2.html";
    }
    else if((input.value).includes(" ") || (input.value).length == 0){
        alert("Introduz um Nome válido sem espaçamentos");
    }
}

