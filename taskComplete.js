// total taskCompleted number change


// handling card complete Buttons
const completeButton = document.querySelectorAll('.completeButton');
for (let i = 0; i < completeButton.length; i++) {
    completeButton[i].addEventListener('click', function () {
        alert("Board Updated Successfully");
        completeButton[i].setAttribute('disabled', true);
        let taskAssignedStr = document.getElementById('taskAssigned').innerText;
        let taskAssignedInt = stringToInt(taskAssignedStr);
        let totalTaskCompleted = minimizer(taskAssignedInt);
        document.getElementById('taskAssigned').innerText = "0"+totalTaskCompleted;
    })
}







