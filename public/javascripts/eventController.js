// const queue = require('C:/Users/Admin/DIST_PROJECT_Gr.2/public/javascripts/queue.js')

const uri = 'http://localhost:5000/api/events';

let events = [];

function getItems() {
  fetch(uri)
    .then(response => response.json())
    .then(data => _displayItems(data))
    .catch(error => console.error('Unable to get items.', error));
}

function addItem() {
  const addNameTextbox = document.getElementById('title');
  const addNameTextbox1 = document.getElementById('event_date');
  const addNameTextbox2 = document.getElementById('theme');

  const item = {
    title: addNameTextbox.value.trim(),
    event_date: addNameTextbox1.value.trim(),
    theme: addNameTextbox2.value.trim()
  };

  fetch(uri,{
    method: 'POST',
    headers: {
      'Access-Control-Allow-Origin':  'http://localhost:3000',
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(item)
  })
    .then(response => response.json())
    .catch(error => console.error('Unable to add item.', error));
    // queue.send('incoming', 'Eshte krijuar nje event i ri!')
}

function deleteItem(id) {
  fetch(`${uri}/${id}`, {
    method: 'DELETE'
  }) 
  .then(() => getItems())
  //e rregullon qe kur te bohet delete mu fshi paraprakja
  .catch(error => console.error('Unable to delete item.', error));
}

function updateItem() {
  const itemId = document.getElementById('edit-id').value;
  const item = {
    ngjarjaid: itemId,
    title: document.getElementById('edit-title').value,
    event_date: document.getElementById('edit-date').value,
    theme: document.getElementById('edit-theme').value,
  };

  fetch(`${uri}`, {
    method: 'PUT',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
     'Access-Control-Allow-Methods': '*'

    },
    body: JSON.stringify(item)
  })
  .then(() => getItems())
    //e rregullon qe kur te bohet delete mu fshi paraprakja
  .catch(error => console.error('Unable to update item.', error));

  return false;
}

function _displayCount(itemCount) {
  const name = (itemCount === 1) ? 'to-do' : 'to-dos';

  // document.getElementById('counter').innerText = `${itemCount} ${name}`;
}

function displayEditForm(id) {
  const item = todos.find(item => item.ngjarjaid === id);
  
  document.getElementById('edit-title').value = item.title;
  document.getElementById('edit-theme').value = item.theme;
  document.getElementById('edit-id').value = item.ngjarjaid;
  document.getElementById('edit-date').value = item.event_date;
  document.getElementById('edit-title').readOnly = false;
  document.getElementById('edit-theme').readOnly = false;
  document.getElementById('edit-date').readOnly = false;
  document.getElementById('btnSubmit').disabled = false;
  document.getElementById('editForm').style.display = 'block';
}

function _displayItems(data) {
  const tBody = document.getElementById('todos');
  // tBody.innerHTML = '';

  _displayCount(data.length);

  const button = document.createElement('button');

  data.forEach(item => {

    let editButton = button.cloneNode(false);
    editButton.innerText = 'Edit';
    editButton.setAttribute('onclick', `displayEditForm('${item.ngjarjaid}')`);
    editButton.style.marginRight = "20px";
    editButton.style.padding = "6px 10px 6px 10px";
    editButton.style.backgroundColor = "green";
    editButton.style.color = "white";
    editButton.style.borderRadius = "5px";

    let deleteButton = button.cloneNode(false);
    deleteButton.innerText = 'Delete';
    deleteButton.setAttribute('onclick', `deleteItem('${item.ngjarjaid}')`);
    deleteButton.style.color = "red";

    let tr = tBody.insertRow();

    let td2 = tr.insertCell(0);
    let textNode = document.createTextNode(item.title);
    td2.appendChild(textNode);

    let td3 = tr.insertCell(1);
    let textNode1 = document.createTextNode(item.event_date);
    td3.appendChild(textNode1);

    let td4 = tr.insertCell(2);
    let textNode2 = document.createTextNode(item.theme);
    td4.appendChild(textNode2);

    let td5 = tr.insertCell(3);
    td5.appendChild(editButton);

    let td6 = tr.insertCell(4);
    td6.appendChild(deleteButton);
  });

  todos = data;
}