function updateCaseNumber(isIncrise) {
    const caseField = document.getElementById("case-input-field");
    const caseFieldString = caseField.value;
    const previousCaseNumber = parseInt(caseFieldString);
    let newCaseNumber;
    if (isIncrise === true) {
        newCaseNumber = previousCaseNumber + 1;
    }
    else {
        newCaseNumber = previousCaseNumber - 1;
    }
    caseField.value = newCaseNumber;
    return newCaseNumber;

}
function updateCasePrice(newCaseNumber) {
    const caseTotalPrice = newCaseNumber * 59;
    const caseTotalElement = document.getElementById("case-total");
    caseTotalElement.innerText = caseTotalPrice
}
// case button handle 
document.getElementById("btn-case-plus").addEventListener("click", function () {
    const newCaseNumber = updateCaseNumber(true);
    updateCasePrice(newCaseNumber)
    calculateSubTotal()
});

document.getElementById("btn-case-minus").addEventListener("click", function () {
    const newCaseNumber = updateCaseNumber(false);
    updateCasePrice(newCaseNumber)
    calculateSubTotal()
})

// phone button hanle 


