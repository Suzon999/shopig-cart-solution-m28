function getElemantValueById(elementId) {
    const totalElemant = document.getElementById(elementId);
    const totalElemantString = totalElemant.innerText;
    const currentTotal = parseInt(totalElemantString);
    return currentTotal;
}
function getTextElemantValueById(elementId, value) {
    const subTotalNumber = document.getElementById(elementId);
    subTotalNumber.innerText = value;
}

// calculate 
function calculateSubTotal() {
    // sub total 
    const phoneTotal = getElemantValueById("phone-total");
    const caseTotal = getElemantValueById("case-total");
    const subTotal = phoneTotal + caseTotal;
    getTextElemantValueById('sub-total', subTotal)
    // text 
    const taxtAmountString = (subTotal * 0.1).toFixed(2);
    const taxtAmount = parseFloat(taxtAmountString);

    getTextElemantValueById('taxt-amount', taxtAmount)
    // final total 
    const finalTotal = subTotal + taxtAmount;
    getTextElemantValueById('final-total', finalTotal)

}