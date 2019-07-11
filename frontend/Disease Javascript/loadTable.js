function loadDiseases(){
    $('#disease_list').html('')
    //$('#disease_list').append(showSearch())
    fetch(baseURL + '/diseases', {headers: {'Authorization': 'Basic ' + code}})
    .then((res) => res.json())
    .then((json) => {
        for (let i = 0; i < json.length; i++) {
            var name = json[i].name
            //var str = '<tr><th>json[i].id</th><td>${json[i].name}</td><td>${json[i].gender}</td><td>${json[i].birthday}</td></td><td>${json[i].address}</td></tr>'
            var str = '<tr>\
                <td scope="row" class="text-primary font-weight-bold">'+json[i].id+'</td>\
                <td>' + json[i].name + '</td>\
                <td>' + json[i].code + '</td>\
                <td><button data-toggle="modal" data-id="'+json[i].id+'" class="btn btn-outline-success open_edit_modal" data-target="#EditModal">Edit</button></td>\
                <td><button class="btn btn-outline-danger" onclick="doDelete('+json[i].id+')">Delete</button></td>\
              </tr>'
              $('#disease_list').append(str)
            console.log(json[i].name)
        }
        loadPaging()
    })
}

function showSearch(){
    var str = '<tr>\
              <th scope="col">\
                  <input type="text" class="form-control" id="myInput0" onkeyup="searchID()" placeholder="ID">\
              </th>\
              <th scope="col">\
                  <input type="text" class="form-control" id="myInput1" onkeyup="searchName()" placeholder="Name">\
              </th>\
              <th scope="col">\
                  <input type="text" class="form-control input-sm" id="myInput2" onkeyup="searchCode()" placeholder="Code">\
              </th>\
              <th></th>\
              <th></th>\
              </tr>'
    return str
  }

  function loadPaging(){

    $('#disease_table').DataTable( {
        "pagingType": "full_numbers",
        paging: true,
        retrieve: true,
        searching: false
    } );
}