function getItems() {
  fetch('http://localhost:8080/lendet')
    .then(response => response.json())
    .then(data => _displayItems(data))
    .catch(error => console.error('Unable to get items.', error));
}

function addLenda(id) {
  const emri = document.getElementById('name');

  const item = {
    emri: emri.value,
  };

  console.log(emri.value)
  fetch(`http://localhost:8080/lendet/${id}`,{
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
  // .then(() => location.reload())
  .catch(error => console.error('Unable to delete item.', error));
}

