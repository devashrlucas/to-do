
function addTask() {
  const li = document.createElement('li');
  let liText = document.createTextNode('');
  const taskText = document.getElementById('task-list__input').value;

  liText = taskText;
  li.append(liText);
  document.getElementById('task-list__tasks').append(li);
  document.getElementById('task-list__tasks').setAttribute('contenteditable', 'false');
  document.getElementById('task-list__input').value = '';
}


function editTask() {
  if (document.getElementById('task-list__edit').checked === true) {
    document.getElementById('task-list__tasks').setAttribute('contenteditable', 'true');
  } else if (document.getElementById('task-list__edit').checked === false) {
    document.getElementById('task-list__tasks').setAttribute('contenteditable', 'false');
  }
}

const deleteTaskEventHandler = function (event) {
  const tgt = event.target;
  if (tgt.tagName.toUpperCase() === 'LI') {
    tgt.parentNode.removeChild(tgt);
  }
};


function deleteTask() {
  if (document.getElementById('task-list__delete').checked === true) {
    document.getElementById('task-list__tasks').addEventListener('click', deleteTaskEventHandler, true);
  } else if (document.getElementById('task-list__delete').checked === false) {
    document.getElementById('task-list__tasks').removeEventListener('click', deleteTaskEventHandler, true);
  }
}


const completeTaskEventHandler = function (event) {
  const tgt = event.target;
  if (tgt.tagName.toUpperCase() === 'LI') {
    tgt.style.textDecoration = 'line-through';
  }
};

function completeTask() {
  if (document.getElementById('task-list__complete').checked === true) {
    document.getElementById('task-list__tasks').addEventListener('click', completeTaskEventHandler, true);
  } else if (document.getElementById('task-list__complete').checked === false) {
    document.getElementById('task-list__tasks').removeEventListener('click', completeTaskEventHandler, true);
  }
}
/*
const undoCompleteTaskEventHandler = function (event) {
  const tgt = event.target;
  if (tgt.tagName.toUpperCase() === 'LI') {
    tgt.style.textDecoration = 'none';
  }
};

function undoComplete() {
  if (document.getElementById('task-list__undo').checked === true) {
    document.getElementById('task-list__tasks').addEventListener('click', undoCompleteTaskEventHandler, true);
  } else if (document.getElementById('task-list__undo').checked === false) {
    document.getElementById('task-list__tasks').removeEventListener('click', undoCompleteTaskEventHandler, true);
  }
}
*/