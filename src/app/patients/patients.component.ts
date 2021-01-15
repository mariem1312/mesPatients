import { Component, OnInit } from '@angular/core';
import { Patient } from '../model/patient.model';
import { PatientService } from '../services/patient.service';
@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit {
 patients : Patient[];
  constructor(private patientService: PatientService) {
 
    {
      this.patients = patientService.listePatients();
      
}
  }

    
   

  ngOnInit(): void {
  }
  supprimerPatient(p: Patient)
  {
 // console.log(p);
 let conf = confirm("Etes-vous sûr ?");
 if (conf)
 this.patientService.supprimerPatient(p);
  }
  
}
