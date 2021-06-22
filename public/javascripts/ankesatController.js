// function getItems() {
//     fetch('http://localhost:5000/api/ankesat')
//       .then(response => response.json())
//       .then(data => _displayItems(data))
//       .catch(error => console.error('Unable to get items.', error));
//   }
  
  function addAnkesa() {
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const content = document.getElementById('content');
  
    const item = {
      name: name.value,
      email: email.value,
      content: content.value,
    };
  
    fetch('http://localhost:5000/api/ankesat',{
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
      document.getElementById('email').value = "";
      document.getElementById('content').value = "";

  
  }
  