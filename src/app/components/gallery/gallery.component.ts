import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  rootUrl = '../../../assets/images/IMG-20181216-WA00';
  images: {src: string, count: number}[];
  selectedImage;
  selectedIndex;
  modalOpen = false;
  constructor() { }

  ngOnInit() {
    this.imagesObject();
  }

  imagesObject () {
    const img = [];
    for (let i = 0; i < 36; i++ ) {
      if(i < 10) {
        img.push({src: `${this.rootUrl}0${i}.jpg`, count: i});
      } else {
        img.push({src: `${this.rootUrl}${i}.jpg`, count: i});
      }
    }
    this.images = img;
  }

  modalView(index) {
    this.selectedImage = this.images.find(item => item.count === index);
    console.log('selected item: ', this.selectedImage);
    this.modalOpen = true;
    this.selectedIndex = index;
  }

  showPrevious() {
    if (this.selectedImage.count === 0) {
      return;
    } else {
      this.selectedImage = this.images.find(item => item.count === this.selectedImage.count - 1);
    }
  }

  showNext() {
    if (this.selectedImage.count === 35) {
      return;
    } else {
      this.selectedImage = this.images.find(item => item.count === this.selectedImage.count + 1);
    }
  }

}
