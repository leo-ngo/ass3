function doAdd() {
    var drugArray = []
    console.log(getA())
    for(i = getA(); a > 0; a--){
        drug = [{
            "dose":$('#dose'+a).val(),
            "instruction": $('#instruction'+a).val(),
            "quantity": $('#quantity'+a).val(),
            "drug":{
                "id": $('#id'+a).val()
            }
        }]
        drugArray = drugArray.concat(drug)
    
    }
    var obj = {
        "visitLog":{
            "id": $('#visitID').val()
        },
        "prescribedDrugs": drugArray
    }
    $('input').val('')

    console.log(obj)
    fetch(baseURL + '/prescription', {
        headers: {
            'Authorization': 'Basic ' + code,
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        method: 'post',
        body: JSON.stringify(obj)
    })
        .then(() => loadPrescription())
        
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
    }
 }

function doEdit(num){
    console.log(num)
    var number = num-1
    for(let i = number; i >=0; i--){
        var obj = {
            'instruction': $('#editinstruction'+i).val(),
            'quantity': $('#editquantity'+i).val(),
            'dose': $('#editdose'+i).val()
        }
        id = $('#editID'+i).val()
        fetch(baseURL + '/prescribedDrug/update/' + id, {
            headers: {
                'Authorization': 'Basic ' + code,
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'put',
            body: JSON.stringify(obj)
        })
    }
    loadPrescription()
    
}
