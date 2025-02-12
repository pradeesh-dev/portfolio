import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { LetMeCookComponent } from '../let-me-cook/let-me-cook.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [LetMeCookComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {
  @ViewChild('textEffect') textEffect!: ElementRef;

  ngAfterViewInit(): void {
    if (this.textEffect) {
      requestAnimationFrame(() => this.typingEffect(this.textEffect.nativeElement));
    }
  }

  //Typing effect
  typingEffect(element: HTMLElement): void {
    const originalText = element.innerText;
    let index = 0;
    const duration = 2000; // Total animation duration (2 seconds)
    const interval = duration / originalText.length; // Speed per character

    const animate = () => {
      if (index < originalText.length) {
        element.innerText = originalText.substring(0, index + 1); // Append next character
        index++;
        setTimeout(animate, interval);
      }
    };

    animate();
  }

}
