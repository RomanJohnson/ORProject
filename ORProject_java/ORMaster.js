function ORMaster(orName, orAddress){
 		// debugger
 		// makes the instance, and fetches
    var newOR = {}
    newOR.name = orName
    newOR.address = orAddress
console.log(newOR)
console.log(JSON.stringify(newOR))
//in a real app, the OR.id would be assigned by the database- i skipped that part and will just use the id assigned by the OR class for now.

 		fetch(`http://localhost:3000/api/v1/ors/`, {
 			method: 'POST',
 			body: JSON.stringify(newOR),
 			headers: {"Content-Type": "application/json"}
 		})
    //.then(res => getGames())
 	}

 // 	function getCases() {
 // 		// debugger
 // 		fetch(`http://localhost:3000/api/v1/ors/${or.id}/cases`, {
 // 			headers: {"Content-Type": "application/json"}
 // 		}).then(res => res.json()).then(json => showCases(json))
 // 	}
  //
 // 	function showCases(json) {
 // 		// debugger
 // 		let jsonData = json
 // 		let procedureName = jsonData.map(or => or.cases[0].procedure)
 // 		let orName = jsonData.map(or => or.cases[0].or)
  //
 // 		document.getElementById("allCasesHTML").innerHTML = username.map(function(e, i) {
 // 			return `${e}, ${outcome[i]}<br>`
 // 		}).join("")

 	}
