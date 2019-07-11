function loadVisit(){
    $('#visit_list  ').html('')
    //$('#visit_list  ').append(showSearch())

    fetch(baseURL + '/visits', {headers: {'Authorization': 'Basic ' + code}})
    .then((res) => res.json())
    .then((json) => {
        for (let i = 0; i < json.length; i++) {
            //var str = '<tr><th>json[i].id</th><td>${json[i].name}</td><td>${json[i].gender}</td><td>${json[i].birthday}</td></td><td>${json[i].address}</td></tr>'
            var str = '<tr>\
                <td scope="row"><a data-toggle="modal" data-id="'+json[i].id+'" class="open_visit_model font-weight-bold" href="#myModal">'+json[i].id+'</a></td>\
                <td>' + json[i].doctor + '</td>\
                <td>' + json[i].visitDate + '</td>\
                <td>' + json[i].visitTime + '</td>\
                <td>' + json[i].problems + '</td>\
                <td>' + json[i].patient.id + '</td>\
                <td><button class="btn btn-outline-danger" onclick="doDelete('+json[i].id+')">Delete</button></td>\
                </tr>'
              $('#visit_list  ').append(str)
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
                  <input type="text" class="form-control" id="myInput1" onkeyup="searchDoctor()" placeholder="Doctor">\
              </th>\
              <th scope="col">\
                  <input type="text" class="form-control input-sm" id="myInput2" onkeyup="searchDate()" placeholder="Date">\
              </th>\
              <th scope="col">\
                  <input type="text" class="form-control input-sm" id="myInput3" onkeyup="searchTime()" placeholder="Time">\
              </th>\
              <th scope="col">\
                  <input type="text" class="form-control input-sm" id="myInput4" onkeyup="searchProblems()" placeholder="Problems">\
              </th>\
              <th scope="col">\
                  <input type="text" class="form-control input-sm" id="myInput5" onkeyup="searchPatient()" placeholder="Patient">\
              </th>\
              <th></th>\
              <th></th>\
              </tr>'
    return str
  }

  function loadPaging(){

    $('#visit_table').DataTable( {
        "pagingType": "full_numbers",
        paging: true,
        retrieve: true,
        searching: false
    } );
}