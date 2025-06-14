import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';


import { PortfolioComponent } from "./portfolio/portfolio.component";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PortfolioComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfoleo';
}
