function loadDiseaseByID(id){
    $('#disease_table').DataTable( {
        "destroy": true,
        searching: false
    } );
    $('#disease_list').html("")
    //$('#patient_list').append(showSearch())

      fetch(baseURL + '/diseases/searchByID/'+id, {headers: {'Authorization': 'Basic ' + code}})
      .then((res) => res.json())
      .then((json) => {
          console.log(json)

              //var str = '<tr><th>json[i].id</th><td>${json[i].name}</td><td>${json[i].gender}</td><td>${json[i].birthday}</td></td><td>${json[i].address}</td></tr>'
              var str = '<tr>\
                <td scope="row"><a data-toggle="modal" data-id="'+json.id+'" class="open_visit_model font-weight-bold" href="#myModal">'+json.id+'</a></td>\
                <td>' + json.name + '</td>\
                <td>' + json.code + '</td>\
                <td><button data-toggle="modal" class="btn btn-outline-success open_edit_modal" data-target="#EditModal" onclick="doEdit('+json.id+')">Edit</button></td>\
                <td><button class="btn btn-outline-danger" onclick="doDelete('+json.id+')">Delete</button></td>\
                </tr>'
                $('#disease_list').append(str)
          
          loadPaging()
         
        
      })
}

function loadDiseaseByName(id){
    $('#disease_table').DataTable( {
        "destroy": true,
        searching: false
    } );
    $('#disease_list').html("")
    //$('#patient_list').append(showSearch())

      fetch(baseURL + '/diseases/searchByName?name='+id, {headers: {'Authorization': 'Basic ' + code}})
      .then((res) => res.json())
      .then((json) => {
          console.log(json)
          for (let i = 0; i < json.length; i++) {
            //var str = '<tr><th>json[i].id</th><td>${json[i].name}</td><td>${json[i].gender}</td><td>${json[i].birthday}</td></td><td>${json[i].address}</td></tr>'
            var str = '<tr>\
                <td scope="row"><a data-toggle="modal" data-id="'+json[i].id+'" class="open_visit_model font-weight-bold" href="#myModal">'+json[i].id+'</a></td>\
                <td>' + json[i].name + '</td>\
                <td>' + json[i].code + '</td>\
                <td><button data-toggle="modal" class="btn btn-outline-success open_edit_modal" data-target="#EditModal" onclick="doEdit('+json[i].id+')">Edit</button></td>\
                <td><button class="btn btn-outline-danger" onclick="doDelete('+json[i].id+')">Delete</button></td>\
                </tr>'
              $('#disease_list  ').append(str)

        }
        loadPaging()
         
        
      })
}



