import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

interface Post {
  header: string;
  date: string;
  content: string;
}

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private posts: Post[] = [
    {
      header: 'Empowering Women in Rural Jamshedpur',
      date: '10 March 2024',
      content:
        "FURIDA recently conducted a workshop in rural Jamshedpur, focusing on women's empowerment through skill development. Over 100 women participated, learning new skills in tailoring, handicrafts, and small business management. The event was a resounding success, bringing hope and opportunities to the local community.",
    },
    {
      header: 'Clean Water Initiative Launched in Jharkhand',
      date: '15 May 2024',
      content:
        'FURIDA has launched a new initiative to provide clean and safe drinking water to remote villages in Jharkhand. The project aims to install water purification systems in areas where access to clean water is limited. The first phase of the initiative has already benefited over 500 families in the Jamshedpur region.',
    },
    {
      header: 'Health Camp Organized for Underprivileged Children',
      date: '30 July 2024',
      content:
        "A health camp was organized by FURIDA in collaboration with local doctors in Jamshedpur. The camp provided free medical check-ups, vaccinations, and nutritional advice to over 200 underprivileged children. This initiative is part of FURIDA's ongoing efforts to improve the health and well-being of children in Jharkhand.",
    },
  ];

  constructor() {}

  getPosts(): Observable<Post[]> {
    return of(this.posts);
  }
}
