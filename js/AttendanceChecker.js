function AttendanceChecker(workshop_number){
	
	   localStorage.setItem("workshop_number",workshop_number);
                window.location.replace("attendees.html");
}