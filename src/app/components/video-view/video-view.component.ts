import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate, query, stagger, keyframes} from '@angular/animations';


@Component({
  selector: 'app-video-view',
  templateUrl: './video-view.component.html',
  styleUrls: ['./video-view.component.scss'],
  animations: [
    trigger('animateVideo', [
      transition(':enter', [
          style({opacity: 0}),
          animate('500ms ease-in', style({opacity: 1}))
      ]),
      transition(':leave', [
        style({opacity: 1}),
        animate('500ms ease-out', style({opacity: 0}))
      ])
    ])
  ]
})
export class VideoViewComponent implements OnInit {
  one = true;
  two = false;
  three = false;
  visibleView = false;
  constructor() { }

  handleView(item) {
    this.visibleView = true;
    switch (item) {
      case 'one':
        this.one = true;
        this.two = false;
        this.three = false;
        break;
      case 'two':
        this.two = true;
        this.three = false;
        this.one = false;
        break;
      case 'three':
        this.three = true;
        this.one = false;
        this.two = false;
    }
  }

  ngOnInit() {
  }

}
