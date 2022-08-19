document.getElementById("phone-btn-plus").addEventListener("click", function () {
    const phoneField = document.getElementById("phone-input-field");
    const phoneFieldString = phoneField.value;
    const perveousPnoneNumber = parseInt(phoneFieldString);
    const newPhoneNumber = perveousPnoneNumber + 1;
    phoneField.value = newPhoneNumber;
});
document.getElementById("phone-btn-minues").addEventListener("click", function () {
    const phoneField = document.getElementById("phone-input-field");
    const phoneFieldString = phoneField.value;
    const perveousPnoneNumber = parseInt(phoneFieldString);
    const newPhoneNumber = perveousPnoneNumber - 1;
    phoneField.value = newPhoneNumber;
})