function minimizer(task) {
    if (task == 1) {
        alert("Congrats! You have completed all the tasks");
        return 0;
    }
    else {
        return task - 1;
    }
}

function stringToInt(str) {
    return parseInt(str);
}

function noticeAdder(addActivity, header) {
    const noticediv = document.createElement('div');

    const notice = document.createElement('p');
    notice.innerText = `You have Completed the Task ${header} at ${new Date().toLocaleTimeString()}`;

    noticediv.appendChild(notice);
    noticediv.classList.add('bg-blue-50','p-5','rounded-xl','mb-3');

    addActivity.appendChild(noticediv);

}

