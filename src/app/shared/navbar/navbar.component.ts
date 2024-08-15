import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MenubarModule, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  @HostListener('document:click', ['$event'])
  closeMenuOnClickOutside(event: MouseEvent) {
    const menu = document.getElementById('mobile-menu');
    const button = document.getElementById('menu-toggle-button');
    const target = event.target as HTMLElement;

    if (menu && button && !menu.contains(target) && !button.contains(target)) {
      this.isMenuOpen = false;
    }
  }
}
