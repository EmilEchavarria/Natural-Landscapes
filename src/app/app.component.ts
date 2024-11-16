import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,  // Asegúrate de que esto esté presente
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular';
}
