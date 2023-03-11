
                                                            //get elements by localStorage but these 
                                                            //turned into strings, when we passed them into localStoeage
                                                            // have to put them in an array using the split() method
const userKeys = localStorage.getItem('user-keys').split(',');
const userStars = localStorage.getItem('user-stars').split(',');

const winnerKeys = localStorage.getItem('winner-keys').split(','); 
const winnerStars = localStorage.getItem('winner-stars').split(',');

const checkEqualsNumbers = checkEquals();

if(checkEqualsNumbers === 52){
    document.querySelector('.text-tittle').innerHTML = 'Congratulations! You Won!';
}
else if(checkEqualsNumbers === 42){
    document.querySelector('.text-tittle').innerHTML = 'Congratulations! Second Place!';
}
else if(checkEqualsNumbers === 32){
    document.querySelector('.text-tittle').innerHTML = 'Congratulations! Third Place!';
}
else if(checkEqualsNumbers === 51){
    document.querySelector('.text-tittle').innerHTML = 'Congratulations! Just 1 Star Missing!';
}
else if(checkEqualsNumbers === 41){
    document.querySelector('.text-tittle').innerHTML = 'Congratulations! Just 1 Star and 1 Key Missing!';
}
else if(checkEqualsNumbers === 31){
    document.querySelector('.text-tittle').innerHTML = 'Congratulations! Almost There!';
}
else if(checkEqualsNumbers === 50){
    document.querySelector('.text-tittle').innerHTML = 'Congratulations! All the Keys!';
}
else if(checkEqualsNumbers === 40){
    document.querySelector('.text-tittle').innerHTML = "Congratulations! You're Learning!";
}
else if(checkEqualsNumbers === 30){
    document.querySelector('.text-tittle').innerHTML = "WOW! 3 Keys, You're on Fire!";
}
else{
    document.querySelector('.text-tittle').innerHTML = 'Keep trying'
}

function turnGreen(number){

    const element = document.querySelector('#uk'+number+'');

    element.classList.remove('ukey');
    element.classList.add('ukeyGreen');
}

function turnYellow(number){

    const element =document.querySelector('#us'+number+'');

    element.classList.remove('ustar');
    element.classList.add('usYellow');
}
function checkEquals(){
    const equalKeys = [];
    const equalStars = [];

    for(let i = 0; i < userKeys.length; i++){

        if(winnerKeys.includes(userKeys[i])){
            equalKeys.push(userKeys[i]);
            turnGreen(i+1);
            console.log(equalKeys, i);
        }
    }
 
    for(let i = 0; i < userStars.length; i++){

        if(winnerStars.includes(userStars[i])){
            equalStars.push(userStars[i]);
            turnYellow(i+1);
        }
    }
    if(equalKeys.length === 5 && equalStars.length === 2){
        return 52
    }
    else if(equalKeys.length === 4 && equalStars.length === 2){
        return 42
    }
    else if(equalKeys.length === 3 && equalStars.length === 2){
        return 32
    }
    else if(equalKeys.length === 5 && equalStars.length === 1){
        return 51
    }
    else if(equalKeys.length === 4 && equalStars.length === 1){
        return 41
    }
    else if(equalKeys.length === 3 && equalStars.length === 1){
        return 31
    }
    else if(equalKeys.length === 5 && equalStars.length === 0){
        return 50
    }
    else if(equalKeys.length === 4 && equalStars.length === 0){
        return 40
    }
    else if(equalKeys.length === 3 && equalStars.length === 0){
        return 30
    }
}


const winnerKey1 = document.querySelector('#wkm1');                     //winner keys
const winnerKey2 = document.querySelector('#wkm2');
const winnerKey3 = document.querySelector('#wkm3');
const winnerKey4 = document.querySelector('#wkm4');
const winnerKey5 = document.querySelector('#wkm5');

const userKey1 = document.querySelector('#ukm1');                       //user keys
const userKey2 = document.querySelector('#ukm2');
const userKey3 = document.querySelector('#ukm3');
const userKey4 = document.querySelector('#ukm4');
const userKey5 = document.querySelector('#ukm5');

const userStar1 = document.querySelector('#usm1');                       //user stars
const userStar2 = document.querySelector('#usm2');

const winnerStar1 = document.querySelector('#wsm1');                    //winner stars
const winnerStar2 = document.querySelector('#wsm2');

const button = document.querySelector('#button');                       //button

button.addEventListener('click', () => {
    window.location = 'index2.html';
});

                                                                        //set them on the page
userKey1.innerHTML = userKeys[0];
userKey2.innerHTML = userKeys[1];
userKey3.innerHTML = userKeys[2];
userKey4.innerHTML = userKeys[3];
userKey5.innerHTML = userKeys[4];

winnerKey1.innerHTML = winnerKeys[0];
winnerKey2.innerHTML = winnerKeys[1];
winnerKey3.innerHTML = winnerKeys[2];
winnerKey4.innerHTML = winnerKeys[3];
winnerKey5.innerHTML = winnerKeys[4];

winnerStar1.innerHTML = winnerStars[0];
winnerStar2.innerHTML = winnerStars[1];

userStar1.innerHTML = userStars[0];
userStar2.innerHTML = userStars[1];

