import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { CarResponse } from '../models/CarResponse';
import { MarcaCarro } from '../models/MarcaCarro';

@Injectable({
  providedIn: 'root'
})
export class MarcaCarroService {

  private API_CARROS = "https://www.carqueryapi.com/api/0.3/?callback=?&cmd=getMakes";
  constructor(
    private http: HttpClient
  ) { }

  private mapMarcas(marcas: any[]): MarcaCarro[] {
    return marcas.map(marca => ({
      codigo: marca.make_id,
      nome: marca.make_display
    }));
  }


  getMarcas(): Observable<MarcaCarro[]> {
    return this.http.get<CarResponse>(`${this.API_CARROS}`).pipe(
      map((response: CarResponse) => this.mapMarcas(response.Makes))
    )
  }

}
