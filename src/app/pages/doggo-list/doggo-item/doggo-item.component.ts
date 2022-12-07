import { Component, Input } from '@angular/core';

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

  changeStatus(): void {
    if (this.doggo){
      this.doggo.status = !this.doggo?.status;
    }
  }

  getColor(): string {
    return this.doggo?.status? "#a4eb88" : "";
  }
}
