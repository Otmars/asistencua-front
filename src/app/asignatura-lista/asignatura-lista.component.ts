import { Component } from '@angular/core';

@Component({
  selector: 'app-asignatura-lista',
  templateUrl: './asignatura-lista.component.html',
  styleUrls: ['./asignatura-lista.component.css']
})
export class AsignaturaListaComponent {
  countries: any[] | undefined;

  selectedCountry:any;

  ngOnInit() {
      this.countries = [
          { name: 'Austaaaaaaaaaaaaaaaaaralia', code: 'AU' },
          { name: 'Brazil', code: 'BR' },
          { name: 'China', code: 'CN' },
          { name: 'Egypt', code: 'EG' },
          { name: 'France', code: 'FR' },
          { name: 'Germany', code: 'DE' },
          { name: 'India', code: 'IN' },
          { name: 'Japan', code: 'JP' },
          { name: 'Spain', code: 'ES' },
          { name: 'United States', code: 'US' }
      ];
  }
}