

    document.getElementById("submit").addEventListener('click',myFunction());
     
    // var firstname = document.getElementById("fname").value.indexOf("@");
    // var lastname = document.getElementById("lname").value;
    // var county = document.getElementById("country").value;
    // var subject = document.getElementById("subject").value;
    // submitOK = "true";
  
    // if (firstname.length > 10) {
    //   alert("The name may have no more than 10 characters");
    //   submitOK = "false";
    // } 
    // if (lastname.length > 10) {
    //   alert("The lastname have no more than 10 characters");
    //   submitOK = "false";
    // } 
    // // if (county.length > -1) {
    // //   alert("The country may have no more than 10 characters");
    // //   submitOK = "false";
    // // } 
    // if (subject.length > 15) {
    //   alert("The name may have no more than 10 characters");
    //   submitOK = "false";
    // } 
  
    
    
    // if(submitOK===true)
    // {
    //     document.getElementById("info-col-1").innerText=firstname;
    //     document.getElementById("info-col-2").innerText=lastname;
    //     document.getElementById("info-col-3").innerText=county;
    //     document.getElementById("info-col-4").innerText=subject;
    // }
        
    // );









    function myFunction(){
    var firstname = document.getElementById("fname").value.indexOf("@");
    var lastname = document.getElementById("lname").value;
    var county = document.getElementById("country").value;
    var subject = document.getElementById("subject").value;
    submitOK = "true";
  
    if (firstname.length > 10) {
      alert("The name may have no more than 10 characters");
      submitOK = "false";
    } 
    if (lastname.length > 10) {
      alert("The lastname have no more than 10 characters");
      submitOK = "false";
    } 
    // if (county.length > -1) {
    //   alert("The country may have no more than 10 characters");
    //   submitOK = "false";
    // } 
    if (subject.length > 15) {
      alert("The name may have no more than 10 characters");
      submitOK = "false";
    } 
  
    
    
    if(submitOK===true)
    {
        document.getElementById("info-col-1").innerText=firstname;
        document.getElementById("info-col-2").innerText=lastname;
        document.getElementById("info-col-3").innerText=county;
        document.getElementById("info-col-4").innerText=subject;
    }
  }
//   document.getElementById("info-col-1").innerText=  document.getElementById("fname").value.indexOf("@");  
//   document.getElementById("info-col-2").innerText= document.getElementById("lname").value;
//   document.getElementById("info-col-3").innerText= document.getElementById("country").value;
//   document.getElementById("info-col-4").innerText=document.getElementById("subject").value;



 
  

