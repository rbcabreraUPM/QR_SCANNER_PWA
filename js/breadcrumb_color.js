$(document).ready(function(){
	function changeColor(bread_color,main_color,modal_color,text_color,workshop_name)
	{
		 	  $("#navbar_breadcrumb").addClass(bread_color);
     		  $("#main_nav").addClass(main_color);
     		  $("#modal_attendees").addClass(modal_color);
     		  $("ul.dropdown-content > li > a").addClass(text_color);
     		  $("#modal_footer").addClass(bread_color);
		 document.getElementById('breadcrumb_label').innerHTML = workshop_name;
    		 document.getElementById('event_header').innerHTML = workshop_name;
     	
	}
	
     switch(localStorage.getItem('workshop_number')){
     	case "1":
     		  changeColor('red darken-1','red accent-2','red darken-2','red-text','Blockchain as Next Gen Service Platform');
     		  break;
     	case "2":
     	      changeColor('blue darken-1','blue accent-2','blue darken-2', 'blue-text','Blockchain:  Use Cases and Building Blocks for the Future ');
     		  break;
      	case "3":
 	          changeColor('teal darken-1','teal','teal darken-2', 'teal-text','Future-Proofing OTT-Carrier Relationship');
 		  break;

     	case "4":
     		  changeColor('orange darken-1','orange accent-2','orange darken-2', 'orange-text','Accelerating Growth Through Inclusive Finance ');
     		  break;
     	case "5":
     	      changeColor('green lighten-1',' green darken-1',' green lighten-1', 'green-text','Monetizing Network Assets with Security and Personalization Services');
     		  break;

      	case "6":
 	      changeColor('blue darken-1','blue accent-2','blue darken-2', 'blue-text','VoLTE Interworking:  Where are we, 1 year after?');
 		  break;

     	case "7":
     		  changeColor(' light-blue darken-2',' light-blue darken-4',' light-blue darken-2', 'blue-text','RCS: A New Chapter in Messaging');
     		  break;
     	case "8":
     	      changeColor('deep-purple darken-4','deep-purple darken-2','deep-purple darken-4', 'purple-text','Laying the Foundation of Smart Cities:  You are up next!');
     		  break;
      	case "9":
 	      changeColor('pink darken-4','pink darken-2','pink darken-4', 'pink-text','IBM IBV Global C-Suite Report 2018: Incumbents Strike Back');
 		  break;

 	 case "10":
     		  changeColor('light-blue darken-1','light-blue darken-3','light-blue darken-1', 'blue-text','Plenary');
     		  break;
     	case "11":
     	      changeColor('brown darken-1','brown darken-3','brown darken-1', 'brown-text','FUTUREFEST - #THROWBACK');
     		  break;
      	case "12":
 	      changeColor('blue-grey darken-3','blue-grey darken-2','blue-grey darken-3', 'blue-text','FUTUREFEST - HAVANA NIGHT');
 		  break;
      	case "13":
 	      changeColor('green darken-3','green darken-2','green darken-3', 'green-text','REGGAE NIGHT');
 		  break;
	case "14":
 	      changeColor('blue-grey darken-3','blue-grey darken-2','blue-grey darken-3', 'blue-text','FUTUREFEST - ELECTRO IBIZA');
 		  break;



     		  
        default:
           console.log("GG");
     }
});
