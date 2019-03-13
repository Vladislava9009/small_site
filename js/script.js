 $('.carousel').carousel()

 $('#myTab a').on('click', function (e) {
    e.preventDefault()
    $(this).tab('show')
    console.log(this)
  })

$('#timeAt').datetimepicker({
    format: 'LT'
});
$('#timeTo').datetimepicker({
    format: 'LT'
});

$('#dateAt').datetimepicker({
    format: 'L'
});
$('#dateTo').datetimepicker({
    format: 'L'
});


 let $searchFormElement=$('#search-form');

 $searchFormElement.on('submit',function(event){
    event.preventDefault();
    let data={
        "pickUp":$("#pickUp").val(),
        "dropOff":$("#dropOff").val(),
        "dataAt":$("#dateAt").val(),
        "timeAt":$("#timeAt").val(),
        "dataTo":$("#dateTo").val(),
        "timeTo":$("#timeTo").val()
    };

    
    // var str = JSON.stringify(data);
//     $.ajax({
//         url: '/users/1', // здесь будет сервер, куда отправляем
//         method: 'POST',
//         data:`jsonData="${str}"`,  
//         success: function(response) {
//             console.log(response);
//         }
// });
    alert('Данные отправленыю Ожидайте звонка специалиста')
    });
    