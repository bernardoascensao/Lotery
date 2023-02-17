
//keys
const key1 = document.querySelector('#key1');
const key2 = document.querySelector('#key2');
const key3 = document.querySelector('#key3');
const key4 = document.querySelector('#key4');
const key5 = document.querySelector('#key5');


//stars
const star1 = document.querySelector('#star1');
const star2 = document.querySelector('#star2');


//buttons
const quitButton = document.querySelector('#quitButton');
const submitButton = document.querySelector('#submitButton');

const keys = [];                              //array of keys 1 to 50

for(let i = 1; keys.length < 50; i++){

    keys.push(i);
}

const stars = [];                              //array of stars 1 to 12

for(let i = 1; stars.length < 12; i++){

    stars.push(i);
}


submitButton.addEventListener('click', () => {
                                                        /*have to create arrays only when the 
                                                        /user click 'submit' button, otherwise the array will have NaN values */
    const userKeys = [parseInt(key1.value), parseInt(key2.value), parseInt(key3.value), parseInt(key4.value), parseInt(key5.value)];
    const userStars = [parseInt(star1.value), parseInt(star2.value)];

                                                        //verify if all fields are filled
    if(userKeys.includes(NaN) || userStars.includes(NaN)){
        alert('Preenche todos os campos!');
    }
    else if(!areValidNumbers()){
        alert('Preenche os campos com valores válidos');
    }
    else{                                               //in case of every fields are filled,
                                                        //save the data in local storage and chande to next page
        reloadLocalStorage();                       //is needed to delet the old winner keys and stars combination

        window.localStorage.setItem('user-keys', userKeys);
        window.localStorage.setItem('user-stars', userStars);

        window.location = 'index4.html';
    }

})
                                                    //if button quit is pressed, change to previous page
quitButton.addEventListener('click', () => {

    window.location = 'index2.html';
})
                                                    //functions
function areValidNumbers(){

    const userKeys = [parseInt(key1.value), parseInt(key2.value), parseInt(key3.value), parseInt(key4.value), parseInt(key5.value)];
    const userStars = [parseInt(star1.value), parseInt(star2.value)];

    const validKeys = userKeys.filter(key => { return(key < 51); });
    const validStars = userStars.filter(star => { return(star < 13); });

    return (validKeys.length === 5 && validStars.length === 2);
}
function reloadLocalStorage(){
    localStorage.removeItem('winner-keys');
    localStorage.removeItem('winner-stars');

    const newWinnerKeys = randomArray(keys, 5);
    const newWinnerStars = randomArray(stars, 2);

    localStorage.setItem('winner-keys', newWinnerKeys);
    localStorage.setItem('winner-stars', newWinnerStars);
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