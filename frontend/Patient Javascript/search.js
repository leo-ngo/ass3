function loadPatientsByID(id){
    $('#patient_table').DataTable( {
        "destroy": true,
        searching: false
    } );
    $('#patient_list').html("")
    //$('#patient_list').append(showSearch())

      fetch(baseURL + '/patients/searchByID/'+id, {headers: {'Authorization': 'Basic ' + code}})
      .then((res) => res.json())
      .then((json) => {
          console.log(json)

              //var str = '<tr><th>json[i].id</th><td>${json[i].name}</td><td>${json[i].gender}</td><td>${json[i].birthday}</td></td><td>${json[i].address}</td></tr>'
              var str = '<tr>\
                  <td scope="row" class="text-primary font-weight-bold">'+json.id+'</td>\
                  <td>' + json.name + '</td>\
                  <td>' + json.gender + '</td>\
                  <td>' + json.birthday + '</td>\
                  <td>' + json.address + '</td>\
                  <td><button data-toggle="modal" data-id="'+json.id+'" class="btn btn-outline-success open_edit_modal" data-target="#EditModal">Edit</button></td>\
                  <td><button class="btn btn-outline-danger" onclick="doDelete('+json.id+')">Delete</button></td>\
                </tr>'
                $('#patient_list').append(str)
          
          loadPaging()
         
        
      })
}

function loadPatientsByBirthday(id){
    $('#patient_table').DataTable( {
        "destroy": true,
        searching: false
    } );
    $('#patient_list').html("")
    //$('#patient_list').append(showSearch())

      fetch(baseURL + '/patients/searchByBirthday/'+id, {headers: {'Authorization': 'Basic ' + code}})
      .then((res) => res.json())
      .then((json) => {
          console.log(json)
          for (let i = 0; i < json.length; i++) {
            
            var name = json[i].name
            //var str = '<tr><th>json[i].id</th><td>${json[i].name}</td><td>${json[i].gender}</td><td>${json[i].birthday}</td></td><td>${json[i].address}</td></tr>'
            var str = '<tr>\
                <td scope="row" class="text-primary font-weight-bold">'+json[i].id+'</td>\
                <td>' + json[i].name + '</td>\
                <td>' + json[i].gender + '</td>\
                <td>' + json[i].birthday + '</td>\
                <td>' + json[i].address + '</td>\
                <td><button data-toggle="modal" data-id="'+json[i].id+'" class="btn btn-outline-success open_edit_modal" data-target="#EditModal">Edit</button></td>\
                <td><button class="btn btn-outline-danger" onclick="doDelete('+json[i].id+')">Delete</button></td>\
              </tr>'
              $('#patient_list').append(str)
            console.log(json[i].name)

        }
        loadPaging()
         
        
      })
}

function loadPatientsByName(id){
    $('#patient_table').DataTable( {
        "destroy": true,
        searching: false
    } );
    $('#patient_list').html("")
    //$('#patient_list').append(showSearch())
    
      fetch(baseURL + '/patients/searchByName?name='+id, {headers: {'Authorization': 'Basic ' + code}})
      .then((res) => res.json())
      .then((json) => {
          console.log(json)
        for (let i = 0; i < json.length; i++) {
            
            var name = json[i].name
            //var str = '<tr><th>json[i].id</th><td>${json[i].name}</td><td>${json[i].gender}</td><td>${json[i].birthday}</td></td><td>${json[i].address}</td></tr>'
            var str = '<tr>\
                <td scope="row" class="text-primary font-weight-bold">'+json[i].id+'</td>\
                <td>' + json[i].name + '</td>\
                <td>' + json[i].gender + '</td>\
                <td>' + json[i].birthday + '</td>\
                <td>' + json[i].address + '</td>\
                <td><button data-toggle="modal" data-id="'+json[i].id+'" class="btn btn-outline-success open_edit_modal" data-target="#EditModal">Edit</button></td>\
                <td><button class="btn btn-outline-danger" onclick="doDelete('+json[i].id+')">Delete</button></td>\
              </tr>'
              $('#patient_list').append(str)
            console.log(json[i].name)

        }
        loadPaging()

         
        
      })
}