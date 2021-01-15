import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PatientService } from '../services/patient.service';
import { Patient } from '../model/patient.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-update-patient',
  templateUrl: './update-patient.component.html',
  styles: [
  ]
})
export class UpdatePatientComponent implements OnInit {
  currentPatient = new Patient();
  constructor(private activatedRoute: ActivatedRoute,
              private router :Router,
              private patientService: PatientService

  ) { }

  ngOnInit(): void {
    // console.log(this.route.snapshot.params.id);
this.currentPatient = this.patientService.consulterPatient(this.activatedRoute.snapshot.params.id);
console.log(this.currentPatient);
  }

  updateProduit()
  { //console.log(this.currentPatient);
  this.patientService.updatePatient(this.currentPatient);
  this.router.navigate(['patients']);

  }
  
}
