import { ElementRef } from '@angular/core';
import { DoggoService } from './../../services/doggo.service';
import { Component, Input, OnChanges, OnInit } from '@angular/core';

import Doggo from 'src/app/models/Doggo';

@Component({
  selector: 'app-doggo-list',
  templateUrl: './doggo-list.component.html',
  styleUrls: ['./doggo-list.component.css']
})
export class DoggoListComponent implements OnInit, OnChanges {
  doggoList: Doggo[] = [];
  constructor(private doggoService: DoggoService) {
  }

  ngOnInit(): void {
    this.doggoList = this.doggoService.getDoggos();
    console.log("Doggo List was born");
  }

  ngOnChanges() {
    console.log("Doggo List has changed");
  }
}
