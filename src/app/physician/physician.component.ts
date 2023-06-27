import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { PhysicianServiceService } from '../service/Physician/physician-service.service';

@Component({
  selector: 'app-physician',
  templateUrl: './physician.component.html',
  styleUrls: ['./physician.component.css']
})
export class PhysicianComponent {
  physicianForm = new FormGroup({
    employeeId: new FormControl(),
    name: new FormControl(''),
    position: new FormControl(''),
    ssn: new FormControl()
  })

  constructor(public physicianService: PhysicianServiceService) { }

  addPhysician = (data: any) => {
    this.physicianService.save(data).subscribe((response: any) => console.log(response));
  }
}