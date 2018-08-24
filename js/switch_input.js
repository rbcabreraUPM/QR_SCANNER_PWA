$(document).ready(function(){
    //hide email form
    $("#source_input_field_email_div").hide();


    $("select.source").change(function(){
        var selectedSource = $(".source option:selected").val();
        if(String(selectedSource) == 'select_id'){
          $("#source_input_field_id_div").show();
          $("#source_input_field_email_div").hide();
       
        }
        else{
          $("#source_input_field_id_div").hide();
          $("#source_input_field_email_div").show();
        }
    });
});