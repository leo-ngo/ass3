function openPatientID(){
    $(document).on("click", ".open_edit_modal", function () {
    var id = $(this).data('id');
    console.log(id)
    loadDetail(id)

 // As pointed out in comments, 
 // it is unnecessary to have to manually call the modal.
 // $('#addBookDialog').modal('show');
    });
}

function loadDetail(id){
    //visits/searchByID/{id}
    var obj = {
        'name': $('#editname').val(),
        'gender': $('#editgender').val(),
        'birthday': $('#editbirthday').val(),
        'address': $('#editaddress').val()
    }
  
    fetch(baseURL + '/patients/searchByID/'+id,{
        headers: {'Authorization': 'Basic ' + code},
        method: 'get'})
    .then((res) => res.json())
    .then((json) => {
       console.log(json)
       $('#editID').attr("value", json.id)
       $('#editname').attr("value", json.name)
       $('#editgender').attr("value", json.gender)
       $('#editbirthday').attr("value", json.birthday)
       $('#editaddress').attr("value", json.address)
    })
}