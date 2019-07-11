function patientID_AC() {
    $("#oldid").autocomplete({
        source: function (request, response) {
            $.ajax({
                headers: {'Authorization': 'Basic ' + code},
                type: "GET",
                url: baseURL + "/patients/searchByName",
                dataType: "json",
                data: "name=" + request.term,
                success: function (data) {
                    console.log(data)
                    response($.map(data, function (item) {
                        return {
                            value: item.id,
                            label: item.id + "." + item.name
                        };
                    }));
                }
            });
        },
        minLength: 1,
        select: function (event, ui) {
            var label = ui.item.label
            var id = label.split('.')[0].trim()
            console.log(id)
        }
    });
}

function disease_AC(id) {
    $('#'+id).autocomplete({
        source: function (request, response) {
            $.ajax({
                headers: {'Authorization': 'Basic ' + code},
                type: "GET",
                url: baseURL + "/diseases/searchByName",
                dataType: "json",
                data: "name=" + request.term,
                success: function (data) {
                    console.log(data)
                    response($.map(data, function (item) {
                        return {
                            value: item.id,
                            label: item.id + "." + item.name
                        };
                    }));
                }
            });
        },
        minLength: 1,
        select: function (event, ui) {
            var label = ui.item.label
            var id = label.split('.')[0].trim()
            console.log(id)
        }
    });
}

function lab_AC(id) {
    $('#'+id).autocomplete({
        source: function (request, response) {
            $.ajax({
                headers: {'Authorization': 'Basic ' + code},
                type: "GET",
                url: baseURL + "/labs/searchByService",
                dataType: "json",
                data: "service=" + request.term,
                success: function (data) {
                    console.log(data)
                    response($.map(data, function (item) {
                        return {
                            value: item.id,
                            label: item.id + "." + item.service
                        };
                    }));
                }
            });
        },
        minLength: 1,
        select: function (event, ui) {
            var label = ui.item.label
            var id = label.split('.')[0].trim()
            console.log(id)
        }
    });
}