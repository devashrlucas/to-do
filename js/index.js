/*
module.exports.testFunction = function (x) {
    return x;
*/
let taskList = document.getElementById('task-list__tasks');

function addTask() {
    let li = document.createElement('li');
    document.getElementById('task-list__tasks').append(li);
  
}
