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
  document.addEventListener('click', function (event) {
    if (event.target.closest('#task-list__tasks')) {
      document.getElementById('task-list__tasks').setAttribute('contenteditable', 'true');
    } else {
      document.getElementById('task-list__tasks').setAttribute('contenteditable', 'false');
    }
  });
}
