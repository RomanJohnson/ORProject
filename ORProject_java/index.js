// const app = new App()

document.addEventListener('DOMContentLoaded', ()=>{
  // alert('first!')

  // const or = new OR()

//getting functional elements from the index.html:
  var orForm = document.getElementById('OR_form');
  var orName = document.getElementById('OR_name');
  var orHost = document.getElementById('OR_HostName')
  var orAddress = document.getElementById('OR_address');
  var submitButton = document.getElementById('submitButton');
  var orDiv = document.getElementById('OR_Maker');

//create a new OR instance:
orDiv.addEventListener('submit', () => {
  event.preventDefault();

// goal- upon submit, call ORMaster, pass it the or name, host name and address values, have ORMaster send these to the server, get back the JSON object with the OR Id string..and then render all those ORs to the DOM...

ORMaster(orName.value, orAddress.value, orHost.value);

  //then all ORs to the page

  //reset forms for next input:
  orAddress.value = null;
  orName.value = null;

});

//create a new case when submitCase is pushed
//I'm going to have to modify this code- so that it makes a case based on the OR_id received from the server- and passes the case info to the server, under the correct OR, then renders it upon receiving back the ID..

  $('body').on('click', '#submitCaseButton',(event)=>{
    event.preventDefault();
    // console.log($('#this.id').val())
    //do i want this.target.id.dataset- then interpolate values?


    //if I shut off orName and caseID here do i need them? i think they come from makeNewCase anyway
    // let orName = event.target.dataset.or  //come back to do this dynamically (wait, isn't it dynamic now?)
    // let caseID = ++this.casesID
    var surgeon_id = $('#surgeon_id').val();
    var anesthesiologist = $('#anesthesiologist').val();
    var procedure_name = $('#procedure_name').val();
    var or_id = $('#or_id').val();
    var case_time = $('#case_time').val();
    // var id = 1;
    var data = {case: {surgeon_id,anesthesiologist,procedure_name,or_id,case_time }};
    // let or = OR.all()[0]//find the real or object by name orsAll.find later
    console.log(data)
    // data cases

    $.ajax({
      url: "http://localhost:3000/api/v1/ors/"+ or_id +"/cases",
      type: "POST",
      data: data,
      success: function(e) {
      console.log(e);}
      });
      alert("Case Submitted!")
      surgeon_id= ''
    // or.makeNewCase(surgeonValue, anesthesiologistVal, procedureName, caseTime, orId);
    // console.log($('#surgeonName').val())
  });

  $(document).on('click', '.schedule',(event)=>{
    $('#or_id').val($(event.target).attr('data-id'));
    $('.orname').text($(event.target).attr('data-orname'));
    $('#case_Form').removeClass('hide');

  });

//create the slide toggle function on individual ORs
  $('body').on('click', '.OR', function(){
    // alert('clicked')
    $(`#ORDetails-${event.target.dataset.id}`).slideToggle();
    // console.log(event.target.dataset.id)
    event.stopPropagation();
  });

});
