
// handling card complete Buttons
const completeButton = document.querySelectorAll('.completeButton');
// getting the notice section
const activitySection = document.getElementById('activity');
for (let i = 0; i < completeButton.length; i++) {
    completeButton[i].addEventListener('click', function () {
        alert("Board Updated Successfully");
        completeButton[i].setAttribute('disabled', true);

        // changing the total task number
        let taskAssignedStr = document.getElementById('taskAssigned').innerText;
        let taskAssignedInt = stringToInt(taskAssignedStr);
        let totalTaskCompleted = minimizer(taskAssignedInt);
        document.getElementById('taskAssigned').innerText = "0"+totalTaskCompleted;

        // adding notice of task complete in activity log
        const header = document.getElementsByClassName('cardHeading')[i].innerText;
        console.log(header);
        noticeAdder(activitySection,header);
    })
}








