const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-button");
const message = document.querySelector("#error-msg");
const totalNotes = document.querySelectorAll(".total-notes");
const notes = [2000, 500, 100, 50, 20, 10, 5, 1];


checkButton.addEventListener("click", function checkBillAndCashAmount(){
    hideMessage();
    
    if(billAmount.value>0){
        if(cashGiven.value>=billAmount.value){
            const returedAmount = cashGiven.value - billAmount.value;
            calculatechange(returedAmount);
        }
        else{
            showMessage("put valid cash value");
        }

    }
    else{
        showMessage("invalid bill amount");

    }
});

 function hideMessage(){
    message.style.display = "none";
}

 function showMessage(msg){
    message.style.display = "block";
     message.innerText = msg;

 }

 function calculatechange(returedAmount){
    for(let i=0;i<notes.length;i++){
        const numberOfNotes = Math.trunc(returedAmount/notes[i]);
        returedAmount %= notes[i];
        totalNotes[i].innerText = numberOfNotes;

    }
 }