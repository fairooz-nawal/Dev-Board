// getting the notice section
const activitySection = document.getElementById('activity');

// getting current date
document.getElementById('date').innerText = new Date().toDateString();

// handling card complete Buttons
const completeButton = document.querySelectorAll('.completeButton');

for (let i = 0; i < completeButton.length; i++) {
    completeButton[i].addEventListener('click', function () {
        alert("Board Updated Successfully");
        completeButton[i].setAttribute('disabled', true);

        // changing the points in header
        let Currentpoint = document.getElementById('points').innerText;
        let currentPointInt = stringToInt(Currentpoint);
        document.getElementById('points').innerText = currentPointInt + 1;

        // changing the total task number
        let taskAssignedStr = document.getElementById('taskAssigned').innerText;
        let taskAssignedInt = stringToInt(taskAssignedStr);
        let totalTaskCompleted = minimizer(taskAssignedInt);
        document.getElementById('taskAssigned').innerText = "0"+totalTaskCompleted;

        // adding notice of task complete in activity log
        const header = document.getElementsByClassName('cardHeading')[i].innerText;
        noticeAdder(activitySection,header);
    })
}

// clearing history
  document.getElementById('clearHistory').addEventListener('click',function(){
      activitySection.innerHTML= '';
  })

// 
document.getElementById('theme').addEventListener('click',function(){
    document.body.classList.remove('bg-blue-50','bg-green-100','bg-red-100','bg-yellow-100');
    const colors = ['bg-blue-50','bg-green-100','bg-red-100','bg-yellow-100'];
    const pick = Math.floor(Math.random() * colors.length);
    console.log(pick);
    document.body.classList.add(colors[pick]);
});






