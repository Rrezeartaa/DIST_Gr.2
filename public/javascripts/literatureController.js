function addLiterature(id) {
    const emri = document.getElementById('name');
    const description = document.getElementById('description');
    const author = document.getElementById('author');
    const file = document.getElementById('file');

    // var fileData = JSON.stringify(file, undefined, 4); // first use JSON.stringify 
    // var blob = new Blob([fileData], {type: "text/json;charset=utf-8"}); // save as Blob 
    // var fileName = "Report.json";
    // saveAs(blob, fileName); 

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
