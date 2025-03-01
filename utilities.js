function minimizer(task) {
    if (task == 1) {
        alert("All Task Completed");
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
    
    let date = new Date();

    let n = date.toLocaleString([], {
        hour: "2-digit",
        minute: "2-digit",
    });

    const noticediv = document.createElement('div');
    const notice = document.createElement('p');
    notice.innerText = `You have Completed the Task ${header} issued at ${n}`;
    noticediv.appendChild(notice);
    noticediv.classList.add('bg-blue-50','p-5','rounded-xl','mb-3');
    addActivity.appendChild(noticediv);

}