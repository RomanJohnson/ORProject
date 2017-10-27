function CaseMaster(case){
 		// debugger
 		// makes the instance, and fetches
// console.log(case)
// console.log(JSON.stringify(case))
//in a real app, the OR.id would be assigned by the database- i skipped that part and will just use the id assigned by the OR class for now.

 		fetch(`http://localhost:3000/api/v1/ors/${or.id}/cases`, {
 			method: 'POST',
 			body: JSON.stringify(case),
 			headers: {"Content-Type": "application/json"}
 		})
    //.then(res => getGames())
 	}

 	function getCases() {
 		// debugger
 		fetch(`http://localhost:3000/api/v1/ors/${or.id}/cases`, {
 			headers: {"Content-Type": "application/json"}
 		}).then(res => res.json()).then(json => showCases(json))
 	}

 	function showCases(json) {
 		// debugger
 		let jsonData = json
 		let procedureName = jsonData.map(or => or.cases[0].procedure)
 		let orName = jsonData.map(or => or.cases[0].or)

 		document.getElementById("allCasesHTML").innerHTML = orname.map(function(e, i) {
 			return `${e}, ${case[i]}<br>`
 		}).join("")
a
 	}
