import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ValentineComponent } from "./valentine/valentine.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ValentineComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Valentine';
  hearts = Array(18).fill(0);

}
