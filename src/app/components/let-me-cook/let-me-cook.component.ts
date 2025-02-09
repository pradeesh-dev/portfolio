import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-let-me-cook',
  imports: [CommonModule],
  templateUrl: './let-me-cook.component.html',
  styleUrl: './let-me-cook.component.scss'
})
export class LetMeCookComponent {
  showSecret = false;

  revealSecret() {
    this.showSecret = !this.showSecret;
  }
}
