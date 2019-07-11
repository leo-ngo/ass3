function doAdd() {
    var obj = {
        'service': $('#service').val(),
    }
    $('input').val('');

    fetch(baseURL + '/labs', {
        headers: {
            'Authorization': 'Basic ' + code,
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        method: 'post',
        body: JSON.stringify(obj)
    })
        .then(() => loadLabs())
        
}

function doDelete(id){
    console.log("Delete")
    if (confirm('Do you want to delete this service')){
        fetch(baseURL+'/labs/delete/'+id, {headers: {
            'Authorization': 'Basic ' + code,
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        method: 'delete'})
        .then(()=>loadLabs())
    }
 }


 function doEdit(){
    var id = $('#editID').val()
    var obj = {
       'service': $('#editservice').val(),
   }
   fetch(baseURL + '/labs/update/' + id, {
       headers: {
           'Authorization': 'Basic ' + code,
           'Content-Type': 'application/json',
           'Accept': 'application/json'
       },
       method: 'put',
       body: JSON.stringify(obj)
   })
       .then(() => loadLabs())
}