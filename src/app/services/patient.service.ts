import { Injectable } from '@angular/core';
import { Patient } from '../model/patient.model';
@Injectable({
  providedIn: 'root'
})
export class PatientService {
  patients : Patient[];
  constructor() {
    this.patients = [
      {idP : 1, nomP : "Ali",prenomP :"Tounssi" ,maladieP : "Grippe", dateConsultation : new Date("01/14/2011")},
      {idP : 2, nomP : "Amira", prenomP :"Snoussi" ,maladieP : "Opération", dateConsultation  : new Date("12/17/2010")},
      {idP: 3, nomP :"Ahmed", prenomP :"Ajili" ,maladieP : "Infecion", dateConsultation : new Date("02/20/2020")}
 ];
   }
   listePatients():Patient[] {
    return this.patients;
  }
  ajouterPatient( prod: Patient){
  this.patients.push(prod);
  }
  supprimerPatient( prod: Patient){
    //supprimer le atient prod du tableau patients
    const index = this.patients.indexOf(prod, 0);
    if (index > -1) {
    this.patients.splice(index, 1);
    }
  
    }
    consulterPatient(id:number): Patient{
      return this.patients.find(p => p.idP == id);
     // return this.patient;
      }
      updatePatient(p:Patient)
      {
      // console.log(p);
      this.supprimerPatient(p);
      this.ajouterPatient(p);
      this.trierPatients();
      }
      trierPatients(){
        this.patients = this.patients.sort((n1,n2) => {
        if (n1.idP > n2.idP) {
        return 1;
        }
        if (n1.idP < n2.idP) {
        return -1;
        }
        return 0;
        });
        }
       
      
  }
  

