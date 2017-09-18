const OR = (function(){
  currentORId = 0;
  const allORs = []

  return class OR{
    // let casesId = 0

    constructor (ORName, ORAddress){
      let caseID = 0
      this.address = ORAddress
      this.cases = []
      this.name = ORName;
      this.id = ++currentORId;
      // this.all = allORs
      allORs.push(this);
      let htmlMonstrosity = (
        `<li class="OR" data-id="${this.id}">${ORName}</li><p>
        <div class="initiallyHidden" id = ORDetails-${this.id}>
        <label for="">Procedure Name</label>
        <input id= 'procedureName' placeholder='Procedure Name Here' type="text" name="" value=""><br>
        <label for="">Surgeon Name</label>
        <input id = 'surgeonName' type="text" name="" value=""><br>
        <label for="">Anesthesiologist Name</label>
        <input id = 'anesthesiologistName' type="text" name="" value=""><br>
        <input id='submitCase' type="submit" name="" data-or=${ORName} value="submit case">
      </form></div>`);
      this.html = htmlMonstrosity

    }
    static all(){ return allORs}

    static renderAll(){
      // debugger

    let  allORsHTML = []
        allORs.forEach(or => allORsHTML.push(
        or.html
        ))
      let  newHTML = allORsHTML.join('')
      let   ORList = document.getElementById('OR_List')
        ORList.innerHTML = newHTML
    }

     makeNewCase(surgeon, anesthesiologist, procedure){

      let caseid = (this.cases.length +1)
      let thisCase = new Case(this.name, caseid, surgeon, anesthesiologist, procedure)
      this.cases.push(thisCase)

      ORMaster(thisCase)
      // console.log(thisCase)
      // debugger
      //I want to push 'this' to fetch post the object every time a new case is made. 'this' being the entire OR and all of it's cases.

      // console.log(thisCase)
    }

  }
})()
