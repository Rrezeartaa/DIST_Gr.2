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
