
const userNameValue = window.localStorage.getItem('user-name');

document.querySelector('#tittle').innerHTML = "Welcome "+userNameValue+"";

const keys = [];                              //array of keys 1 to 50

for(let i = 1; keys.length < 50; i++){

    keys.push(i);
}

const stars = [];                              //array of stars 1 to 12

for(let i = 1; stars.length < 12; i++){

    stars.push(i);
}
                                                        // adding events to the buttons
const myBet = document.querySelector('#myBey');                 
const random = document.querySelector('#random');

myBet.addEventListener('click', () => myBetPressed());
random.addEventListener('click', () => randomPressed());


                                                        //functions

function myBetPressed(){

    window.location = "index3.html"
}

function randomPressed(){

    reloadLocalStorage();

    const randomKeys = randomArray(keys, 5);
    const randomStars = randomArray(stars, 2);

    window.localStorage.setItem('user-keys', randomKeys);      //we save the random keys and stars in local storage
                                                                // so we can use it in the next page
    window.localStorage.setItem('user-stars', randomStars);
    
    window.location = 'index4.html';
}

function getRandomItem(array){

    //get random index
    const randomIndex = Math.floor( Math.random() * array.length );

    //get random item
    const randomItem = array[randomIndex];

    return randomItem;
}

function randomArray(arr, max){

    const randomArray = [];
                                                // while the randomArray doesn't have the length that we want,
    do {                                        //we must keep pushing items into it. that's why we use a 'do while'  
        const item = getRandomItem(arr);

        if(!randomArray.includes(item)){
            randomArray.push(item);
        }

    } while (randomArray.length < max);

    return randomArray;
}

function reloadLocalStorage(){
    localStorage.removeItem('winner-keys');
    localStorage.removeItem('winner-stars');

    const newWinnerKeys = randomArray(keys, 5);
    const newWinnerStars = randomArray(stars, 2);

    localStorage.setItem('winner-keys', newWinnerKeys);
    localStorage.setItem('winner-stars', newWinnerStars);
}