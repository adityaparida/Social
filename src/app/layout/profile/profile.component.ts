import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Post } from '../model/post';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  postForm!: FormGroup;
  post: Post = new Post();
  posts!: Observable<Post[]>;

  constructor(
    private formBuilder: FormBuilder,
    private postService: PostService
    ) { }

  ngOnInit(): void {
  this.createPost();
  this.fetchPosts();
  }

  createPost() {
    this.postForm = this.formBuilder.group({
      user_id: ['', Validators.nullValidator],
      comment: ['', Validators.nullValidator],
      image: ['', Validators.nullValidator]
    })
  }

  fetchPosts() {
    // const post_id = this.post.id;
    this.postService.showPost(2).subscribe(data => 
      this.posts = data
    )
  }

  onSubmit() {
    this.postService.sendPosts(this.postForm.value).subscribe((data) => {
      this.post = data;
    });
  }

}
