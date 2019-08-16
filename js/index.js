/*
module.exports.testFunction = function(x) {
    return x;
*/


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
    document.getElementById('task-list__tasks').setAttribute('contenteditable', 'true');
}