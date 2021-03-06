function addLiterature(id) {
    const emri = document.getElementById('name');
    const description = document.getElementById('description');
    const author = document.getElementById('author');
    const file = document.getElementById('file');

    const item = {
      emri: emri.value,
      description: description.value,
      author: author.value,
      file: file.files[0].name
    };

    fetch(`http://localhost:8080/literature/${id}`,{
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
      document.getElementById('description').value = "";
      document.getElementById('author').value = "";
      document.getElementById('file').value = "";

  }

submitForms = function(){
    document.getElementById("form1").submit();
    document.getElementById("form2").submit();
}