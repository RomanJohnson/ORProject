function ORMaster(orName, orAddress, orHost){
 		// debugger
 		// makes the instance, and fetches
// console.log(orName, orAddress)
//
//console.log("asdf");
//create an OR object from input
  var newOR = {};
  newOR.name = orName;
  newOR.address=orAddress;
  newOR.host = orHost

  // console.log(JSON.stringify(newOR));
  // debugger;

//fetch/POST the stringified object to the server/database:
 	fetch('http://localhost:3000/api/v1/ors/', {
 			method: 'POST',
 			body: JSON.stringify(newOR),
 			headers: {"Content-Type": "application/json"}
 		})
    //then retrieve from the server a list of all the ORs, including new one:
    .then(res => getORs())
 	}
// debugger
 	function getORs() {
 	// 	debugger
 		fetch(`http://localhost:3000/api/v1/ors/`, {
 			headers: {"Content-Type": "application/json"}
 		}).then(res => res.json()).then(json => showORs(json))
 	}
//now I need to iterate over the json data and create DOM html for each OR in the database:
 	function showORs(json) {
 		let jsonData = json
 		//debugger
    //next to fix: how to iterate and create new HTML for all the jsonData? //DONE
    let orHTML = '<table><thead><td><b>Name</b></td><td><b>Address</b></td></thead>';
    jsonData.map(function(or){
      orHTML += `<tr><td>${or.name}</td><td>${or.address}</td><td><a href="javascript:void(0);" class="schedule" data-orname=${or.name} data-id=${or.id}>Schedule a case</a></td></tr>`;
    });
 		orHTML += '</table>';


//finally update the DOM:
 		document.getElementById("OR_List").innerHTML = orHTML;//temporary//?
    // username.map(function(e, i) {
 	// 		return `${e}, ${outcome[i]}<br>`
 	// 	}).join("")

 	}
