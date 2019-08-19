/*
module.exports.testFunction = function(x) {
    return x;
*/

var taskBoxElement = document.querySelector('#task-list__tasks');


function addTask() {
  let li = document.createElement('li');
  let liText = document.createTextNode('');
  let taskText = document.getElementById('task-list__add').value;

  liText = taskText;
  li.append(liText);
  document.getElementById('task-list__tasks').append(li);
  document.getElementById('task-list__tasks').setAttribute('contenteditable', 'false');
}

function editTask() {
  if (document.getElementById('edit').value === 'OFF') {
    document.getElementById('edit').value = 'ON';
    document.getElementById('task-list__tasks').setAttribute('contenteditable', 'true');
  } else if (document.getElementById('edit').value === 'ON') {
    document.getElementById('edit').value = 'OFF';
    document.getElementById('task-list__tasks').setAttribute('contenteditable', 'false');
  }
}
