/*
module.exports.testFunction = function(x) {
    return x;
*/

function addTask() {
  let li = document.createElement('li');
  let liText = document.createTextNode('');
  let taskText = document.getElementById('task-list__input').value;

  document.getElementById('task-list__edit').value = 'OFF';
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

let taskListEventHandler = function (event) {
  var tgt = event.target;
  if (tgt.tagName.toUpperCase() == 'LI') {
    tgt.parentNode.removeChild(tgt);
  }
};


function deleteTask() {
  if (document.getElementById('task-list__delete').checked === true) {
    document.getElementById('task-list__tasks').addEventListener('click', taskListEventHandler, true);
  } else if (document.getElementById('task-list__delete').checked === false) {
    document.getElementById('task-list__tasks').removeEventListener('click', taskListEventHandler, true);
  }
}


function completeTask() {

}
