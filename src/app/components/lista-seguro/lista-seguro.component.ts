import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Seguro } from 'src/app/models/Seguro';
import { SeguroService } from 'src/app/services/seguro.service';

@Component({
  selector: 'app-lista-seguro',
  templateUrl: './lista-seguro.component.html',
  styleUrls: ['./lista-seguro.component.css']
})
export class ListaSeguroComponent implements OnInit{

  public seguros$!: Observable<Seguro[]>;

  constructor(
    private seguroService : SeguroService
  ) {}

  ngOnInit(): void {
    this.seguros$ = this.seguroService.listar();
  }
}
