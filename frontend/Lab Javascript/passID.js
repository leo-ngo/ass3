function openLabID(){
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
        'service': $('#editservice').val(),
    }
  
    fetch(baseURL + '/labs/searchByID/'+id,{
        headers: {'Authorization': 'Basic ' + code},
        method: 'get'})
    .then((res) => res.json())
    .then((json) => {
       console.log(json)
       $('#editID').attr("value", json.id)
       $('#editservice').attr("value", json.service)
    })
}