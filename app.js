//array of computer values
const comp=["paper","rock","scissors"];

//variables to store totalscores
let userTotal=0,computerTotal=0;

//function to play game
function playGame(e){
    //getting value of clicked button
    let userValue=e.value;

    //generating a index value for Computer Array
    let index=Math.floor( Math.random()*3);
    
    //pass user and computer values to function for comparison
    let res=compare(userValue,comp[index]);

    //passing res value to function to display result
    displayResult(res);

    //passing res to function to display total
    displayTotal(res);

}

//function to compare user and computer Value
function compare(userValue,computerValue){
    if(userValue===computerValue){
        return 'Draw';
    }
    else if(userValue==='paper' && computerValue==='rock' || userValue==='scissors' && computerValue==='paper' || userValue==='rock' && computerValue==='scissors'){
        return 'You Wins';
    }
    else if(computerValue==='paper' && userValue==='rock' || computerValue==='scissors' && userValue==='paper' || computerValue==='rock' && userValue==='scissors'){
        return 'Computer Wins'
    }
}
//Function to display single time result
function displayResult(res){
    let result=document.getElementById('res');
    result.innerHTML=res;
}

//Function to display total score
function displayTotal(res){
    let userScore=document.getElementById('user-score');
    let computerScore=document.getElementById('computer-score');
    if(res==='You Wins'){
        userTotal++;
    }
    else if(res==='Computer Wins'){
        computerTotal++;
    }
    userScore.innerHTML=userTotal;
    computerScore.innerHTML=computerTotal;
}