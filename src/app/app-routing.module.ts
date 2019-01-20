import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GalleryComponent } from './components/gallery/gallery.component';
import { VideoViewComponent } from './components/video-view/video-view.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path: '', redirectTo: 'acasa', pathMatch: 'full'},
  {path: 'acasa', component: HomeComponent},
  {path: 'galerie-foto', component: GalleryComponent},
  {path: 'tur-virtual', component: VideoViewComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
