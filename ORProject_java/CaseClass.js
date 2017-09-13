class Case {
//previously working constructor(orname, caseid, surgeon, anesthesiologist, procedure)
  constructor(orname, caseid, surgeon, anesthesiologist, procedure){
    this.or = orname;
    this.id = caseid
    this.surgeon = surgeon
    this.anesthesiologist = anesthesiologist
    this.procedure = procedure
    this.html = `<li id=${this.id}><h2>${this.procedure}</h2></li>`
  }
}
