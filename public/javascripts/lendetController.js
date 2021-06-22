function getItems() {
  fetch('http://localhost:8080/lendet')
    .then(response => response.json())
    .then(data => _displayItems(data))
    .catch(error => console.error('Unable to get items.', error));
}

function addLenda() {
  const emri = document.getElementById('name');

  const item = {
    emri: emri.value,
    // prof_id: emri.value
  };

  console.log(emri.value)
  fetch('http://localhost:8080/lendet',{
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
    document.getElementById('name').value = "";

}

function deleteItem(id) {
  fetch(`${url}/${id}`, {
    method: 'DELETE'
  }) 
  .then(() => getItems())
  //e rregullon qe kur te bohet delete mu fshi paraprakja
  .catch(error => console.error('Unable to delete item.', error));
}

function _displayItems(data) {
  // const tBody = document.getElementById('todos');
  // const button = document.createElement('button');

  data.forEach(item => {

    // let editButton = button.cloneNode(false);
    // editButton.innerText = 'Edit';
    // editButton.setAttribute('onclick', `displayEditForm('${item.ngjarjaid}')`);
    // editButton.style.marginRight = "20px";
    // editButton.style.padding = "6px 10px 6px 10px";
    // editButton.style.backgroundColor = "green";
    // editButton.style.color = "white";
    // editButton.style.borderRadius = "5px";

    // let deleteButton = button.cloneNode(false);
    // deleteButton.innerText = 'Delete';
    // deleteButton.setAttribute('onclick', `deleteItem('${item.id}')`);
    // deleteButton.style.color = "red";


    document.getElementById('id').setContent = item.id;

    document.getElementById('emri').setContent = item.emri;
    // let tr = tBody.insertRow();

    // let td2 = tr.insertCell(0);
    // let textNode = document.createTextNode(item.title);
    // td2.appendChild(textNode);

    // let td3 = tr.insertCell(1);
    // let textNode1 = document.createTextNode(item.event_date);
    // td3.appendChild(textNode1);

    // let td4 = tr.insertCell(2);
    // let textNode2 = document.createTextNode(item.theme);
    // td4.appendChild(textNode2);

    // let td5 = tr.insertCell(3);
    // td5.appendChild(editButton);

    // let td6 = tr.insertCell(4);
    // td6.appendChild(deleteButton);
  });

  todos = data;
}
