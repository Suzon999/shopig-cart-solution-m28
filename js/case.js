document.getElementById("btn-case-plus").addEventListener("click", function () {
    const caseField = document.getElementById("case-input-field");
    const caseFieldString = caseField.value;
    const previousCaseNumber = parseInt(caseFieldString);

    const newCaseNumber = previousCaseNumber + 1;
    caseField.value = newCaseNumber;
});

document.getElementById("btn-case-minus").addEventListener("click", function () {
    const caseField = document.getElementById("case-input-field");
    const caseFieldString = caseField.value;
    const previousCaseNumber = parseInt(caseFieldString);

    const newCaseNumber = previousCaseNumber - 1;
    caseField.value = newCaseNumber;
})

