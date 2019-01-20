import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate, query, stagger, keyframes} from '@angular/animations';


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
  animations: [
    trigger('animateItems', [
      transition('* => *', [
        query(':enter', [
          style({opacity: 0, transform: 'translateY(-100px)'}),
          stagger(70, [
            animate('600ms ease-out', keyframes([
              style({opacity: .5, transform: 'translateY(0px)', offset: .5}),
              style({opacity: .8, transform: 'scale(1.1)', offset: .8}),
              style({opacity: 1, transform: 'none', offset: 1})
            ]))
          ])
        ], {optional: true})
      ])
    ]),
    trigger('animateModal', [
      transition(':enter', [
        style({opacity: 0}),
        animate('350ms ease-in', style('*'))
      ]),
      transition(':leave', [
        style('*'),
        animate('250ms ease-in', style({transform: 'translateX(150px)', opacity: 0}))
      ])
    ])
  ]
})
export class GalleryComponent implements OnInit {
  rootUrl = '../../../assets/images/small/IMG-20181216-WA00';
  modalUrl = '../../../assets/images/large/IMG-20181216-WA00';
  images: {src: string, count: number}[];
  modalImages: {src: string, count: number}[];
  selectedImage;
  selectedIndex;
  modalOpen = false;
  constructor() { }

  ngOnInit() {
    this.imagesObject();
    this.modalImagesObject();
  }

  imagesObject () {
    const img = [];
    for (let i = 0; i < 36; i++ ) {
      if(i < 10) {
        img.push({src: `${this.rootUrl}0${i}_small.jpg`, count: i});
      } else {
        img.push({src: `${this.rootUrl}${i}_small.jpg`, count: i});
      }
    }
    this.images = img;
  }

  modalImagesObject () {
    const img = [];
    for (let i = 0; i < 36; i++ ) {
      if(i < 10) {
        img.push({src: `${this.modalUrl}0${i}_large.jpg`, count: i});
      } else {
        img.push({src: `${this.modalUrl}${i}_large.jpg`, count: i});
      }
    }
    this.modalImages = img;
  }

  modalView(index) {
    this.selectedImage = this.modalImages.find(item => item.count === index);
    console.log('selected item: ', this.selectedImage);
    this.modalOpen = true;
    this.selectedIndex = index;
  }

  showPrevious() {
    if (this.selectedImage.count === 0) {
      return;
    } else {
      this.selectedImage = this.modalImages.find(item => item.count === this.selectedImage.count - 1);
    }
  }

  showNext() {
    if (this.selectedImage.count === 35) {
      return;
    } else {
      this.selectedImage = this.modalImages.find(item => item.count === this.selectedImage.count + 1);
    }
  }

}
