import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/post.service';
import { IPost } from '../Models/post';

@Component({
  selector: 'app-personalarea',
  templateUrl: './personalarea.component.html',
  styleUrls: ['./personalarea.component.css']
})
export class PersonalareaComponent implements OnInit {

  constructor(private postSvc:PostService) { }

  ngOnInit(): void {
  }

 postData:IPost = {
  user: '',
  title: '',
  content: ''
 }

}
