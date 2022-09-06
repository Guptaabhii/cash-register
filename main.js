const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-button");
const message = document.querySelector("#error-msg")
checkButton.addEventListener("click", function checkBillAndCashAmount(){
    hideMessage();
    
    if(billAmount.value>0){
        if(cashGiven.value>=billAmount.value){

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