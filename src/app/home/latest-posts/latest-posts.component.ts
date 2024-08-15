import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { PostComponent } from '../../shared/post/post.component';
import { CommonModule } from '@angular/common';
import { PostService } from '../../services/post.service';
import { SubSink } from 'subsink';

interface Post {
  header: string;
  date: string;
  content: string;
}

@Component({
  selector: 'app-latest-posts',
  standalone: true,
  imports: [CardModule, ButtonModule, PostComponent, CommonModule],
  templateUrl: './latest-posts.component.html',
  styleUrl: './latest-posts.component.scss',
})
export class LatestPostsComponent {
  posts: Post[] = [];
  private subs = new SubSink();

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.subs.sink = this.postService.getPosts().subscribe((data) => {
      this.posts = data.slice(0, 3); // Get only the top 3 posts
    });
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
