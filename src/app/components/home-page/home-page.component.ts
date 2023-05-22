import { Component } from '@angular/core';
import { RedditService } from 'src/app/services/reddit-service/reddit.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {

  isLight = true;

  selectedArgument = 'all'

  constructor(private redditService: RedditService) {
    this.loadPosts()
  }

  changeThemes() {
    document.body.classList.toggle('dark-mode');
    this.isLight = !this.isLight;
  }

  loadPosts() {
    this.redditService.getRedditPosts(this.selectedArgument).subscribe({
      next: data => console.log(data),
      error: err => console.log(err)
    })
  }
}
