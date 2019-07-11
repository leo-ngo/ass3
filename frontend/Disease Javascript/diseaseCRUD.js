function doAdd() {
    var obj = {
        'name': $('#name').val(),
        'code': $('#code').val(),
    }
    $('input').val('');

    fetch(baseURL + '/diseases', {
        headers: {
            'Authorization': 'Basic ' + code,
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        method: 'post',
        body: JSON.stringify(obj)
    })
        .then(() => loadDiseases())
        
}

function doDelete(id){
    console.log("Delete")
    if (confirm('Do you want to delete this drug')){
        fetch(baseURL+'/diseases/delete/'+id, {headers: {
            'Authorization': 'Basic ' + code,
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        method: 'delete'})
        .then(()=>loadDiseases())
    }
 }

 function doEdit(){
    var id = $('#editID').val()
    var obj = {
       'name': $('#editname').val(),
       'code': $('#editcode').val()
   }
   fetch(baseURL + '/diseases/update/' + id, {
       headers: {
           'Authorization': 'Basic ' + code,
           'Content-Type': 'application/json',
           'Accept': 'application/json'
       },
       method: 'put',
       body: JSON.stringify(obj)
   })
       .then(() => loadDiseases())
}