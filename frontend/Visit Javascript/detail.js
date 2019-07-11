//Load Full Visit Log by ID
function openVisitID(){
    $(document).on("click", ".open_visit_model", function () {
    var visitID = $(this).data('id');
    console.log(visitID)
    loadDetail(visitID)

 // As pointed out in comments, 
 // it is unnecessary to have to manually call the modal.
 // $('#addBookDialog').modal('show');
    });
}

//Load visitlog detail by ID
function loadDetail(visitID){
    $('#visit_details').html('')
    fetch(baseURL + '/visits/searchByID?id='+visitID,{
        headers: {'Authorization': 'Basic ' + code},
        method: 'get'})
    .then((res) => res.json())
    .then((json) => {
        var str = '<h6 class="text-primary">Patient Name: '+json.patient.name+'</h6>\
                    <h7>Doctor: '+json.doctor+'</h7><br>\
                   <h7>Date: '+json.visitDate+'</h7><br>\
                   <h7>Time: '+json.visitTime+'</h7><br>'

        $('#visit_details').append(str)
        //$('#prescription_headers').append(header)

        if(json.diagnosedDiseases.length>0){
            $('#visit_details').append('<hr>\
                                        <h6 class="text-primary">Diagnosed Disease</h6>')
        }
        for(let i = 0; i < json.diagnosedDiseases.length; i++){
            var str = '<h7>Diseases: ' + json.diagnosedDiseases[i].disease.name +'</h7><br>' 
            $('#visit_details').append(str)
        }

        if(json.labTests.length>0){
            $('#visit_details').append('<hr>\
                                        <h6 class="text-primary">Lab Test</h6>')
        }
        for(let i = 0; i < json.labTests.length; i++){
            var str = '<h7>Service: ' + json.labTests[i].labType.service +'</h7><br>' 
            $('#visit_details').append(str)
        }

    })
}