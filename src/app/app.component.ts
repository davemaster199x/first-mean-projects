import { Component } from '@angular/core';

@Component({
  selector: 'app-roots',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts = [];
  onPostAdded(post){
    this.posts.push(post);
  }
}
