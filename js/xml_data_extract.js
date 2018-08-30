
  //script to get data from XML 
var xhttp;
xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        get_data(this);
    }
};
xhttp.open("GET", "ACC-response-data-expor.xml", true);
xhttp.send();



// functions
function get_data(xml) {

    var xmlDoc; 
    xmlDoc = xml.responseXML;
    txt = "";
    var unique_search_value;
    var not_found = true;


     var x = xmlDoc.getElementsByTagName("delegate");
    for (i = 0; i < x.length; i++) { 

      if(is_email){
      unique_search_value = x[i].getElementsByTagName('email')[0].childNodes[0].nodeValue;
      }else{ 
        unique_search_value = x[i].getElementsByTagName('unique_id')[0].childNodes[0].nodeValue;
      }

        if(String(unique_search_value) == search_value){
            try{
                 img = x[i].getElementsByTagName('profile_pic')[0].childNodes[0].nodeValue;
            crop();
                
            }catch(err){
              //supply image if no image tag exist.
                supply_image();
            }
           
            display_data();   
            not_found = false;
            break;
       }
    }
 /*   //if no ID is found*/
    if(not_found){
    alert("ID/EMAIL DOES NOT EXIST!");
    window.location.replace("index.html");
    }






    //supply name and company
  function display_data(){
       /* try{
           
          }
          catch(err){
            console.log("ERROR");
          }*/

             document.getElementById('badge_name').innerHTML = x[i].getElementsByTagName('badge_name')[0].childNodes[0].nodeValue;
            document.getElementById('company_name').innerHTML = x[i].getElementsByTagName('company')[0].childNodes[0].nodeValue;
            document.getElementById('badge_name1').innerHTML = x[i].getElementsByTagName('badge_name')[0].childNodes[0].nodeValue;
            document.getElementById('company_name1').innerHTML = x[i].getElementsByTagName('company')[0].childNodes[0].nodeValue;
            document.getElementById('id_number1').innerHTML = x[i].getElementsByTagName('unique_id')[0].childNodes[0].nodeValue;
            document.getElementById('email1').innerHTML = x[i].getElementsByTagName('email')[0].childNodes[0].nodeValue;
            document.getElementById('registration_type1').innerHTML = x[i].getElementsByTagName('registration_type')[0].childNodes[0].nodeValue;
            document.getElementById('id_qrcode').src = x[i].getElementsByTagName('qr_code')[0].childNodes[0].nodeValue;
            console.log(x[i].getElementsByTagName('qr_code')[0].childNodes[0].nodeValue);
        }

        function crop(){
          //crop function
             $('.image-editor').cropit({
                      imageState: {
                        src: img,
                      },
                    });
             return;
    }

    function supply_image(){
          //crop function
        $('.image-editor').cropit({
          imageState: {
            src: 'img/user.png',
            crossorigin: "anonymous"
          },
        });
    }


}
/*
      function supply_information() {
          var txt;
          var person = prompt("Please enter your name:", "YOUR NAME");
          if (person == null || person == "") {
              txt = "User cancelled the prompt.";
          } 
          console.log(person);
          document.getElementById('badge_name').innerHTML = person;
          document.getElementById('badge_name1').innerHTML = person;


            var company_data = prompt("Please enter your company name:", "COMPANY NAME");
          if (company_data == null || company_data == "") {
              txt = "User cancelled the prompt.";
          } 
          console.log(person);
          document.getElementById('company_name').innerHTML = person;
          document.getElementById('company_name1').innerHTML = person;
      }
*/

  
