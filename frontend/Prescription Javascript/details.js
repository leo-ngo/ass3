//Load Full Visit Log by ID
function openPrescriptionID(){
    $(document).on("click", ".open_prescription_model", function () {
    var prescriptionID = $(this).data('id');
    loadDetail(prescriptionID)
 // As pointed out in comments, 
 // it is unnecessary to have to manually call the modal.
 // $('#addBookDialog').modal('show');
    });
}

//Load prescription detail by ID
function loadDetail(prescriptionID){
    $('#prescription_headers').html('')
    $('#prescription_details').html('')
    fetch(baseURL + '/prescription/searchByID/'+prescriptionID,{
        headers: {'Authorization': 'Basic ' + code},
        method: 'get'})
    .then((res) => res.json())
    .then((json) => {
        console.log(json)
        var header = '<h4 class="modal-title">Prescription Info: '+json.id+'<h4'
        var str = '<h6>VisitID: '+json.visitLog.id+'</h6>\
                   <h7>Doctor: '+json.visitLog.doctor+'</h7><br>\
                   <h7>Patient: '+json.visitLog.patient.name+'</h7><br>'

        $('#prescription_details').append(str)
        $('#prescription_headers').append(header)


        for(let i = 0; i < json.visitLog.diagnosedDiseases.length; i++){
            var str = '<h7>Diseases: ' + json.visitLog.diagnosedDiseases[i].disease.name +'</h7><br>' 
            $('#prescription_details').append(str)
        }

        for(let i = 0; i < json.prescribedDrugs.length; i++){
            var str = '<hr>\
                      <h6>Drug Name: ' + json.prescribedDrugs[i].drug.name +'</h6>\
                      <h7>Dose: ' + json.prescribedDrugs[i].drug.name +'</h7><br>\
                      <h7>Quantity: ' + json.prescribedDrugs[i].quantity +'</h7><br>\
                      <h7>Instruction: ' + json.prescribedDrugs[i].instruction +'</h7><br>' 



            $('#prescription_details').append(str)
        }
    })
}

//Open Edit Modal
function openEditID(){
    $(document).on("click", ".open_edit_modal", function () {
    var prescriptionID = $(this).data('id');
    loadEditDetail(prescriptionID)
    });
}

function loadEditDetail(id){
    $('#edit_prescribed_drugs').html('')
    $('#edit_save').html('')
    fetch(baseURL + '/prescription/searchByID/'+id,{
        headers: {'Authorization': 'Basic ' + code},
        method: 'get'})
    .then((res) => res.json())
    .then((json) => {
       //console.log(json)
       //console.log(json.prescribedDrugs[0])
       for(let j = 0; j < json.prescribedDrugs.length; j++){
           console.log(json.prescribedDrugs[j])
           var str = '<h6 class="text-primary">Prescribed Drug '+(j+1)+'</h6>\
                    <form>\
                    <div class="form-group">\
                    <label>Drug ID:</label>\
                    <input type="text" class="form-control" id="editID'+j+'" disabled value="'+json.prescribedDrugs[j].id+'">\
                    </div>\
                    <div class="form-group">\
                    <label>Drug Name:</label>\
                    <input type="text" class="form-control" id="editname'+j+'" disabled value="'+json.prescribedDrugs[j].drug.name+'">\
                    </div>\
                    <div class="form-group">\
                    <label>Dose:</label>\
                    <input type="text" class="form-control" id="editdose'+j+'" value="'+json.prescribedDrugs[j].dose+'">\
                    </div>\
                    <div class="form-group">\
                    <label>Quantity:</label>\
                    <input type="text" class="form-control" id="editquantity'+j+'" value="'+json.prescribedDrugs[j].quantity+'">\
                    </div>\
                    <div class="form-group">\
                    <label>Instruction:</label>\
                    <input type="text" class="form-control" id="editinstruction'+j+'" value="'+json.prescribedDrugs[j].instruction+'">\
                    </div>\
                    </form>'
            
            $('#edit_prescribed_drugs').append(str)
       }
       var str2 = '<button type="button" class="btn btn-primary" data-dismiss="modal" onclick="doEdit('+json.prescribedDrugs.length+')">Save</button>\
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>'
        $('#edit_save').append(str2)

    })

}

function loadDeleteDetail(){
    var str = '<h5>Prescribed Drug ' +(j+1)+'</h5>\
                    <h6>Name: '+json.prescribedDrugs[j].drug.name+'</h6>\
                    <h6>Quantity: '+json.prescribedDrugs[j].dose+'</h6>\
                    <h6>Name: '+json.prescribedDrugs[j].quantity+'</h6>'
            $('#edit_prescribed_drugs').append(str)
}
