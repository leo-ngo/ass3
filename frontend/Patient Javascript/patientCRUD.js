function doAdd() {
    var obj = {
        'name': $('#name').val(),
        'gender': $('#gender').val(),
        'birthday': $('#birthday').val(),
        'address': $('#address').val()
    }
    $('input').val('').removeAttr('checked').removeAttr('selected');
    fetch(baseURL + '/patients', {
        headers: {
            'Authorization': 'Basic ' + code,
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        method: 'post',
        body: JSON.stringify(obj)
    })
        .then(() => loadPatients())
        loadPaging()
}

function doDelete(id){
    console.log("Delete")
    if (confirm('Do you want to delete this patient')){
        fetch(baseURL+'/patients/delete/'+id, {headers: {
            'Authorization': 'Basic ' + code,
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        method: 'delete'})
        .then(()=>loadPatients())
        loadPaging()
    }
 }

 function doEdit(){
     var patientID = $('#editID').val()
     var obj = {
        'name': $('#editname').val(),
        'gender': $('#editgender').val(),
        'birthday': $('#editbirthday').val(),
        'address': $('#editaddress').val()
    }
    fetch(baseURL + '/patients/update/' + patientID, {
        headers: {
            'Authorization': 'Basic ' + code,
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        method: 'put',
        body: JSON.stringify(obj)
    })
        .then(() => loadPatients())
        loadPaging()
 }
 