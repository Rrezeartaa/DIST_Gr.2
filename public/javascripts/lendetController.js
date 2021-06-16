function addLenda() {
  const addNameTextbox = document.getElementById('emri');

  const item = {
    emri: addNameTextbox.value
  };

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
}