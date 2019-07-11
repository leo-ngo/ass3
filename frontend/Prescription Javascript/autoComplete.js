function drug_AC(id) {
    $('#'+id).autocomplete({
        source: function (request, response) {
            $.ajax({
                headers: {'Authorization': 'Basic ' + code},
                type: "GET",
                url: baseURL + "/drugs/searchByName",
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

// function visitID_AC() {
//     $("#visitID").autocomplete({
//         source: function (request, response) {
//             $.ajax({
//                 type: "GET",
//                 url: baseURL + "/visits/searchByID",
//                 dataType: "json",
//                 data: "id=" + request.term,
//                 success: function (data) {
//                     console.log(data)
//                     response($.map(data, function (item) {
//                         return {
//                             value: item.id,
//                             label: item.id
//                         };
//                     }));
//                 }
//             });
//         },
//         minLength: 1,
//         select: function (event, ui) {
//             //var label = ui.item.label
           
//             console.log(id)
//         }
//     });
// }