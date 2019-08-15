/*
module.exports.testFunction = function (x) {
    return x;
*/
let taskList = document.getElementById('task-list__tasks');

function addTask() {
    let li = document.createElement('li');
    let liText = document.createTextNode('');
    let taskText = document.getElementById('task-list__add').value;

    liText = taskText;
    li.append(liText);
    document.getElementById('task-list__tasks').append(li);
  
}
