import { AfterViewInit, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-valentine',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './valentine.component.html',
  styleUrls: ['./valentine.component.css']
})
export class ValentineComponent implements AfterViewInit {
  accepted = false;
  noX = 0;
  noY = 0;
  hearts = Array(18).fill(0);

  ngAfterViewInit() {
    if (typeof window !== 'undefined') {
      const hearts = document.querySelectorAll('.hearts span');
      hearts.forEach((heart: any) => {
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDelay = Math.random() * 5 + 's';
        heart.style.fontSize = 16 + Math.random() * 20 + 'px';
      });
    }
  }

  moveNo() {
    this.noX = Math.random() * 140 - 70;
    this.noY = Math.random() * 40 - 20;
  }

  sayYes() {
    this.accepted = true;
  }
}
