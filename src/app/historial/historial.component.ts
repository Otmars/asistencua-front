import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.css'],
})
export class HistorialComponent implements OnInit {
  constructor(private dataService: DataService) {}
  ngOnInit(): void {
    this.dataService.historial().subscribe((res: any) => {
      console.log(res);
      this.data = res;
    });
  }

  data: any;
}
