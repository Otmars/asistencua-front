import { Component } from '@angular/core';

@Component({
  selector: 'app-reloj',
  templateUrl: './reloj.component.html',
  styleUrls: ['./reloj.component.scss']
})
export class RelojComponent {
  constructor(){
   document.addEventListener('DOMContentLoaded', () =>
  requestAnimationFrame(this.updateTime)
)
  }
   updateTime() {
    // document.documentElement.style.setProperty('--timer-day', "'" + moment().format("dd") + "'");
    // document.documentElement.style.setProperty('--timer-hours', "'" + moment().format("k") + "'");
    // document.documentElement.style.setProperty('--timer-minutes', "'" + moment().format("mm") + "'");
    // document.documentElement.style.setProperty('--timer-seconds', "'" + moment().format("ss") + "'");
    // requestAnimationFrame(updateTime);
  }
}


