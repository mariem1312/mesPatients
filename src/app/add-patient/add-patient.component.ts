import { Component, OnInit } from '@angular/core';
import { Patient } from '../model/patient.model';
import { PatientService } from '../services/patient.service';
@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css']
})
export class AddPatientComponent implements OnInit {
  newPatient = new Patient();
  constructor(private patientService: PatientService) { }

  ngOnInit(): void {
  }
  addProduit(){
   // console.log(this.newPatient);
   this.patientService.ajouterPatient(this.newPatient);
    }
    
}
