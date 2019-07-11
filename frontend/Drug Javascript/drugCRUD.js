function doAdd() {
    var obj = {
        
        'name': $('#name').val(),
        'usage': $('#usage').val(),
    }
    $('input').val('');

    fetch(baseURL + '/drugs', {
        headers: {
            'Authorization': 'Basic ' + code,
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        method: 'post',
        body: JSON.stringify(obj)
    })
        .then(() => loadDrugs())
        
}

function doDelete(id){
    console.log("Delete")
    if (confirm('Do you want to delete this drug')){
        fetch(baseURL+'/drugs/delete/'+id, {headers: {
            'Authorization': 'Basic ' + code,
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        method: 'delete'})
        .then(()=>loadDrugs())
    }
 }


 function doEdit(){
    var id = $('#editID').val()
    var obj = {
       'name': $('#editname').val(),
       'usage': $('#editusage').val()
   }
   fetch(baseURL + '/drugs/update/' + id, {
       headers: {
           'Authorization': 'Basic ' + code,
           'Content-Type': 'application/json',
           'Accept': 'application/json'
       },
       method: 'put',
       body: JSON.stringify(obj)
   })
       .then(() => loadDrugs())
}