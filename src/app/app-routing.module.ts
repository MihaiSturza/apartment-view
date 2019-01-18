import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GalleryComponent } from './components/gallery/gallery.component';
import { VideoViewComponent } from './components/video-view/video-view.component';

const routes: Routes = [
  {path: '', component: GalleryComponent},
  {path: 'view', component: VideoViewComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
