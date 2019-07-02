import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  posts: Observable<any[]>;
  itemsRef: AngularFireList<any>;

  constructor(private db: AngularFireDatabase) {

    // get the list of posts from the database, and listens for anychanges that happens
    this.itemsRef = db.list('posts');
    this.posts = this.itemsRef.snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    );

   }

  ngOnInit() {
  }

  // post new post to the database
  post(data: string) {
    const itemsRef = this.db.list('posts');
    itemsRef.push({text: data, likes: 0, comments: []});
  }

  // increase the likes of a post
  like(key: string, likes: number) {
    this.itemsRef.update(key, { likes: likes + 1 });
  }

  // add comment to post;
  addComment(key: string, comments: [string], comment: string) {
    if (! comments) {
      comments = [comment];
    } else {
      comments.unshift(comment);
    }
    this.itemsRef.update(key, { comments });
  }

  // delete a post
  delete(key: string) {
    this.itemsRef.remove(key);
  }

  // delete comment from post
  deleteComment(key: string, comments: [string], index: number) {
    comments.splice(index, 1);
    this.itemsRef.update(key, { comments });
  }

}
