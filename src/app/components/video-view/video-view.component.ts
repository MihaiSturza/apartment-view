import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-video-view',
  templateUrl: './video-view.component.html',
  styleUrls: ['./video-view.component.scss']
})
export class VideoViewComponent implements OnInit {
  one = false;
  two = false;
  three = false;
  constructor() { }

  ngOnInit() {
  }

}
