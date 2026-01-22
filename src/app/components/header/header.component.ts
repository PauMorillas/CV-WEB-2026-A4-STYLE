import { Component } from '@angular/core';

@Component({
  selector: 'header-component',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  standalone: true,
})

export class HeaderComponent {
  // Simplemente ejecutamos la función nativa del navegador
  public downloadAsPdf(): void {
    window.print();
  }
}
