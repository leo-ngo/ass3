function addDisease(){
    //$('#addPrescribedDrug').html('');
    setDiseaseID(getDiseaseID()+1)
    a= getDiseaseID()
    console.log(a)
    number = getDiseaseID()
    var str = '<div class="form-group ui-front">\
                    <label class="text-danger">Diagnosed Disease:</label>\
                    <input type="text" class="form-control" id="disease'+diseaseID+'" placeholder="">\
                </div>'
        $('#addDisease').append(str);
    var dID = 'disease'+diseaseID
    console.log(dID)
    disease_AC(dID)
}

function addDisease1(){
    //$('#addPrescribedDrug').html('');
    setDiseaseID1(getDiseaseID1()+1)
    a= getDiseaseID1()
    console.log(a)
    number = getDiseaseID1()
    var str = '<div class="form-group ui-front">\
                    <label class="text-danger">Diagnosed Disease:</label>\
                    <input type="text" class="form-control" id="disease1'+diseaseID1+'" placeholder="">\
                </div>'
        $('#addDisease1').append(str);
    var diseaseID = 'disease1'+diseaseID1
    disease_AC(diseaseID)
}

function addLab(){
    //$('#addPrescribedDrug').html('');
    setLabID(getLabID()+1)
    a= getLabID()
    console.log("Hello")
    number = getLabID()
    var str = '<hr>\
                <div class="form-group ui-front">\
                    <label class="text-info">Lab Service:</label>\
                    <input type="text" class="form-control" id="lab'+labID+'" placeholder="">\
                </div>\
                <div class="form-group ui-front">\
                    <label class="text-info">Note:</label>\
                    <input type="text" class="form-control" id="labnote'+labID+'" placeholder="Note">\
                </div>'
        $('#addLab').append(str);
    var labAC = 'lab'+labID
    lab_AC(labAC)
}

function addLab1(){
    console.log('Lab1')
    setLabID1(getLabID1()+1)
    a= getLabID1()
    console.log(a)
    number = getLabID1()
    var str = '<hr>\
                <div class="form-group ui-front">\
                    <label class="text-info">Lab Service:</label>\
                    <input type="text" class="form-control" id="lab1'+labID1+'" placeholder="Order Service">\
                </div>\
                <div class="form-group ui-front">\
                    <label class="text-info">Note:</label>\
                    <input type="text" class="form-control" id="labnote1'+labID1+'" placeholder="Note">\
                </div>'
        $('#addLab1').append(str);
    var lab = 'lab1'+labID1
    lab_AC(lab)
}

function addNewPatientVisit(){
    $(document).on("click", ".add_new_patient_visit_modal", function () {
    setDiseaseID(0)
    setLabID(0)
    });
}

function addOldPatientVisit(){
    $(document).on("click", ".add_old_patient_visit_modal", function () {
    setDiseaseID1(0)
    setLabID1(0)
    console.log(getLabID1())

    });
}

function resetForm(){
    $('#addDisease').html('');
}
function resetForm1(){
    $('#addDisease1').html('');
}