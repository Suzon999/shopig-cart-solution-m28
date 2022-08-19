function updatePhoneNumber(isIncrise) {
    const phoneField = document.getElementById("phone-input-field");
    const phoneFieldString = phoneField.value;
    const perveousPnoneNumber = parseInt(phoneFieldString);
    let newPhoneNumber;
    if (isIncrise === true) {
        newPhoneNumber = perveousPnoneNumber + 1;
    }
    else {
        newPhoneNumber = perveousPnoneNumber - 1;
    }
    phoneField.value = newPhoneNumber;
    return newPhoneNumber;
}
function updatePhonePrice(newPhonePrice) {
    const phonetotalElemet = document.getElementById("phone-total");
    const phoneTotalPrice = newPhonePrice * 1219;
    phonetotalElemet.innerText = phoneTotalPrice;
}



document.getElementById("phone-btn-plus").addEventListener("click", function () {
    const phoneNewNumber = updatePhoneNumber(true);
    updatePhonePrice(phoneNewNumber);

    // calculate total 
    calculateSubTotal()

});
document.getElementById("phone-btn-minues").addEventListener("click", function () {
    const phoneNewNumber = updatePhoneNumber(false);
    updatePhonePrice(phoneNewNumber);
    calculateSubTotal()
})