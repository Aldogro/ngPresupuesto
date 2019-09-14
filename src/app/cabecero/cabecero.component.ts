import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cabecero',
  templateUrl: './cabecero.component.html',
  styleUrls: ['./cabecero.component.css']
})
export class CabeceroComponent implements OnInit {
  @Input() presupuesto:number;
  @Input() ingresoTotal:number;
  @Input() egresoTotal:number;
  @Input() porcentajeTotal:number; 
  constructor() { }

  ngOnInit() {
  }

}
