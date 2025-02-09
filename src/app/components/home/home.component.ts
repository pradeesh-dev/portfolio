import { Component } from '@angular/core';
import { LetMeCookComponent } from '../let-me-cook/let-me-cook.component';

@Component({
  selector: 'app-home',
  imports: [LetMeCookComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
