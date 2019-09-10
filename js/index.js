/*
module.exports.testFunction = function(x) {
    return x;
*/

var taskBoxElement = document.querySelector('#task-list__tasks');


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
  if (document.getElementById('task-list__edit').value === 'OFF') {
    document.getElementById('task-list__edit').value = 'ON';
    document.getElementById('task-list__tasks').addEventListener('click', function (event) {
      var tgt = event.target;
      if (tgt.tagName.toUpperCase() == 'LI') {
        tgt.setAttribute('contenteditable', 'true');
      }
    });
  } else if (document.getElementById('task-list__edit').value === 'ON') {
    document.getElementById('task-list__edit').value = 'OFF';
  }
}

function deleteTask() {
  if (document.getElementById('task-list__delete').value === 'OFF') {
    document.getElementById('task-list__delete').value = 'ON';
    document.getElementById('task-list__tasks').addEventListener('click', function (event) {
      var tgt = event.target;
      if (tgt.tagName.toUpperCase() == 'LI') {
        tgt.parentNode.removeChild(tgt);
      }
    });
  } else if (document.getElementById('task-list__delete').value === 'ON') {
    document.getElementById('task-list__delete').value = 'OFF';
  }
}

function completeTask() {

}
