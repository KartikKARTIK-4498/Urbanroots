import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [CommonModule,
    RouterLink, RouterModule]
})
export class HomeComponent implements OnInit {

isMenuToggle = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleMenu() {
    this.isMenuToggle = !this.isMenuToggle;
  }

}
