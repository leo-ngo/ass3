function loadPrescription(){
    $('#prescription_list').html('')
    //$('#prescription_list').append(showSearch())

    fetch(baseURL + '/prescription', {headers: {'Authorization': 'Basic ' + code}})
    .then((res) => res.json())
    .then((json) => {
        for (let i = 0; i < json.length; i++) {
            var str = '<tr>\
            <td scope="row"><a data-toggle="modal" data-id="'+json[i].id+'" class="open_prescription_model font-weight-bold" href="#myModal">'+json[i].id+'</a></td>\
            <td>' + json[i].visitLog.patient.name + '</td>\
                <td>' + json[i].visitLog.doctor + '</td>\
                <td>' + json[i].visitLog.id + '</td>\
                <td><button data-toggle="modal" data-id="'+json[i].id+'" class="btn btn-outline-success open_edit_modal" data-target="#EditModal">Edit</button></td>\
                </tr>'
              $('#prescription_list').append(str)
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
                  <input type="text" class="form-control" id="myInput1" onkeyup="searchPatient()" placeholder="Patient">\
              </th>\
              <th scope="col">\
                  <input type="text" class="form-control input-sm" id="myInput2" onkeyup="searchDoctor()" placeholder="Doctor">\
              </th>\
              <th scope="col">\
                  <input type="text" class="form-control input-sm" id="myInput3" onkeyup="searchVisitID()" placeholder="Visit">\
              </th>\
              <th></th>\
              <th></th>\
              </tr>'
    return str
  }

  function loadPaging(){

    $('#prescription_table').DataTable( {
        "pagingType": "full_numbers",
        paging: true,
        retrieve: true,
        searching: false
    } );
}