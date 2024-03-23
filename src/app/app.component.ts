import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InitalComponent } from './inital/inital.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,InitalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pagina';
}
