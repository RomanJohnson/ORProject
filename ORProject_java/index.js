
document.addEventListener('DOMContentLoaded', ()=>{
  // alert('first!')

  // const or = new OR()


  var orForm = document.getElementById('OR_form')
  let orName = document.getElementById('OR_name')
  let orDiv = document.getElementById('OR_Maker')
  let orAddress = document.getElementById('OR_address')
  let submitButton = document.getElementById('submitButton')

//create a new case when submitCase is pushed
  $('body').on('click', '#submitCase',(event)=>{
    event.preventDefault()
    // console.log($('#this.id').val())
    //do i want this.target.id.dataset- then interpolate values?


    //if I shut off orName and caseID here do i need them? i think they come from makeNewCase anyway
    // let orName = event.target.dataset.or  //come back to do this dynamically (wait, isn't it dynamic now?)
    // let caseID = ++this.casesID
    let surgeonValue = $('#surgeonName').val()
    let anesthesiologistVal = $('#anesthesiologistName').val()
    let procedureName = $('#procedureName').val()
    let or = OR.all()[0]//find the real or object by name orsAll.find later
    or.makeNewCase(surgeonValue, anesthesiologistVal, procedureName)
    // console.log($('#surgeonName').val())
  })

  //create a new OR instance:
  orDiv.addEventListener('submit', ()=>{
    event.preventDefault()
    // orMaker(orName.value)
    // console.log(orName.value)

    let newOR = new OR(orName.value, orAddress.value)
    debugger
    console.log(OR.all())
    //then renderNewOR() to the page
    OR.renderAll()

    orName.value = null
    // alert(orName.value)
  })

//create the slide toggle function on individual ORs
  $('body').on('click', '.OR', function(){
    // alert('clicked')
    $(`#ORDetails-${event.target.dataset.id}`).slideToggle();
    // console.log(event.target.dataset.id)
    event.stopPropagation()
  });
})
