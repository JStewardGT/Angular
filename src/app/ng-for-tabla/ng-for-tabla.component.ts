import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for-tabla',
  templateUrl: './ng-for-tabla.component.html',
  styleUrls: ['./ng-for-tabla.component.css']
})
export class NgForTablaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  animales:Array<any> = [
    {tipo:'Perro',nombre:'Lisa',edad:10},
    {tipo:'Gato',nombre:'Pepón',edad:2},
    {tipo:'Pato',nombre:'Tantán',edad:7}
  ]

}
