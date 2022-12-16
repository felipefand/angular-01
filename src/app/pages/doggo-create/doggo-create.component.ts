import Doggo from 'src/app/models/Doggo';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DoggoService } from 'src/app/services/doggo.service';

@Component({
  selector: 'app-doggo-create',
  templateUrl: './doggo-create.component.html',
  styleUrls: ['./doggo-create.component.css']
})
export class DoggoCreateComponent {
  newDoggo: Doggo = new Doggo("Breed", "Description", 1, false);

  constructor(private doggoService: DoggoService) {}

  doggoForm?: FormGroup;
  
  ngOnInit() {
    this.doggoForm = new FormGroup({
      breed: new FormControl(this.newDoggo.breed),
      description: new FormControl(this.newDoggo.description),
      value: new FormControl(this.newDoggo.value),
      status: new FormControl(this.newDoggo.status)
    })
  }

  onSubmitForm(){
    // this.newDoggo.breed = this.doggoForm?.controls['breed'].value;
    // this.newDoggo.description = this.doggoForm?.controls['description'].value;
    // this.newDoggo.value = this.doggoForm?.controls['value'].value;
    // this.newDoggo.status = this.doggoForm?.controls['status'].value;

    // this.doggoService.postDoggo(this.newDoggo);

    this.doggoForm?.patchValue({
      breed: this.doggoForm?.controls['breed'].value,
      description: this.doggoForm?.controls['description'].value,
      value: this.doggoForm?.controls['value'].value,
      status: this.doggoForm?.controls['status'].value
    })

    this.newDoggo = {id: this.newDoggo.id, ...this.doggoForm?.value}

    this.doggoService.postDoggo(this.newDoggo);
  }
}
