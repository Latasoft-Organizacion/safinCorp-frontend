import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isMenuOpen = false;

  private router= inject(Router)

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }


  scrollToSection(sectionId: string) {
    if (this.router.url === '/inicio') {
      // Si ya estamos en la página de inicio, hacer scroll directamente
      this.smoothScroll(sectionId);
    } else {
      // Redirigir a inicio y esperar a que cargue antes de hacer el scroll
      this.router.navigate(['/inicio']).then(() => {
        setTimeout(() => {
          this.smoothScroll(sectionId);
        }, 500); // Espera 500ms para asegurarse de que la vista cargó
      });
    }
  }

  private smoothScroll(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
  
}
