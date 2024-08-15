import { Component } from '@angular/core';
import { LatestPostsComponent } from './latest-posts/latest-posts.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [LatestPostsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
