function addDrug(){
    //$('#addPrescribedDrug').html('');
    setA(getA()+1)
    number = getA()
    console.log(number)
    var str = ' <hr>\
                <div class="form-row">\
                    <div class="form-group col-md-6 ui-front">\
                        <label>DrugID:</label>\
                        <input type="text" class="form-control" id="id'+a+'" placeholder="Drug ID">\
                    </div>\
                    <div class="form-group col-md-6">\
                        <label>Quantity:</label>\
                        <input type="text" class="form-control" id="quantity'+a+'" placeholder="Quantity">\
                    </div>\
                </div>\
                <div class="form-group">\
                    <label>Dose:</label>\
                    <input type="text" class="form-control" id="dose'+a+'" placeholder="">\
                </div>\
                <div class="form-group">\
                    <label>Instruction:</label>\
                    <input type="text" class="form-control" id="instruction'+a+'" placeholder="">\
                </div>'
        $('#addPrescribedDrug').append(str);
        var drugID = 'id'+a
        drug_AC(drugID)
}

function addPrescription(){
    $(document).on("click", ".add_prescription_model", function () {
    setA(0)
    });
}

function resetForm(){
    $('#addPrescribedDrug').html('');
}