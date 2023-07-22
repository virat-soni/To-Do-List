var inputfield = document.getElementById('inputfield');
var button = document.getElementById('btn');
var todoc = document.getElementById('todo');




button.addEventListener('click', function () {


    var items = inputfield.value;
    var par = document.createElement('p');
    par.classList.add('todoclass');
    todoc.appendChild(par);

    par.innerHTML = `
     ${items}
      <i class="fas fa-times"></i> `;
    inputfield.value = "";

    par.addEventListener('click', () => { par.style.textDecoration = "line-through" });
    par.addEventListener('dblclick', () => { par.style.textDecoration = "none" });
    par.querySelector('i').addEventListener('click', () => { todoc.removeChild(par) });

})
alert('नमस्ते, कृपया Input-Field में कुछ दर्ज करें और Add-ToDo बटन दबाएं')
