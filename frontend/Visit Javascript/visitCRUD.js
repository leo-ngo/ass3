function doAddNew() {
    var diseaseArray = []
    console.log(getDiseaseID())
    for(i = getDiseaseID(); i > 0; i--){
        disease = {
            "disease":{
                "id": $('#disease'+i).val()
            }
        }
        diseaseArray = diseaseArray.concat(disease)
    
    }

    var labArray = []
    for(i = getLabID(); i > 0; i--){
        labTests = {
            "note": $('#labnote'+i).val(),
            "labType":{
                "id": $('#lab'+i).val()
            }
        }
        labArray = labArray.concat(labTests)
    
    }
    console.log(diseaseArray)
    var obj = {
        "patient":{
            'name': $('#name').val(),
            'gender': $('#gender').val(),
            'birthday': $('#birthday').val(),
            'address': $('#address').val()
        },
        "visitDate": $('#newdate').val(),
        "visitTime": $('#newtime').val(),
        "problems": $('#newproblem').val(),
        "doctor": $('#newdoctor').val(),
        "diagnosedDiseases": diseaseArray,
        "labTests": labArray
    }
    console.log(obj)
    $('input').val('')

    console.log(obj)
    fetch(baseURL + '/visits', {
        headers: {
            'Authorization': 'Basic ' + code,
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        method: 'post',
        body: JSON.stringify(obj)
    })
        .then(() => loadVisit())
        
}

function doAddOld() {
    var diseaseArray = []
    console.log(getDiseaseID1())
    for(i = getDiseaseID1(); i > 0; i--){
        disease = {
            "note": $('#labnote1'+i).val(),
            "disease":{
                "id": $('#disease1'+i).val()
            }
        }
        diseaseArray = diseaseArray.concat(disease)
    
    }
    var labArray = []
    for(i = getLabID(); i > 0; i--){
        labTests = {
            "labType":{
                "id": $('#lab1'+i).val()
            }
        }
        labArray = labArray.concat(labTests)
    
    }
    console.log(diseaseArray)
    var obj = {
        "patient":{
            'id': $('#oldid').val()
        },
        "visitDate": $('#olddate').val(),
        "visitTime": $('#oldtime').val(),
        "problems": $('#oldproblem').val(),
        "doctor": $('#olddoctor').val(),
        "labTests": labArray,
        "diagnosedDiseases": diseaseArray 
    }
    console.log(obj)
    $('input').val('')

    console.log(obj)
    fetch(baseURL + '/visits', {
        headers: {
            'Authorization': 'Basic ' + code,
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        method: 'post',
        body: JSON.stringify(obj)
    })
        .then(() => loadVisit())
        
}

function doDelete(id){
    console.log("Delete")
    if (confirm('Do you want to delete this visit')){
        fetch(baseURL+'/visits/delete/'+id, {headers: {
            'Authorization': 'Basic ' + code,
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        method: 'delete'})
        .then(()=>loadVisit())
    }
 }

 function doEdit(id){
    console.log(id)
    fetch(baseURL + '/visits/searchByID/' + id, {headers: {'Authorization': 'Basic ' + code}})
    .then((res) => res.json())
    .then((json) => {
        console.log(json)
    })
 }