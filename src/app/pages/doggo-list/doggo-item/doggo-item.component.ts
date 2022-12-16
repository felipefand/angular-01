import { Component, Input, OnChanges } from '@angular/core';

import { DoggoService } from 'src/app/services/doggo.service';
import Doggo from 'src/app/models/Doggo';

@Component({
  selector: 'app-doggo-item',
  templateUrl: './doggo-item.component.html',
  styleUrls: ['./doggo-item.component.css']
})
export class DoggoItemComponent {
  // @Input() doggo: Doggo =  {
  //   breed: "Unspecified breed",
  //   description: "No description",
  //   status: false
  // }

  @Input() doggo? : Doggo;

  constructor(private doggoService: DoggoService) {

  }

  changeStatus(): void {
    if (this.doggo){
      this.doggo.status = !this.doggo?.status;
    }
  }

  getColor(): string {
    return this.doggo?.status? "#a4eb88" : "";
  }

  deleteItem(){
    if (this.doggo) {
      this.doggoService.deleteDoggo(this.doggo.id)
    }
  }

  ngOnChanges(){
    console.log("ID: " + this.doggo?.id);
  }
}
