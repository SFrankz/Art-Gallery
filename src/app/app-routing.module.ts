
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PictureDiscussionComponent } from './picture-discussion/picture-discussion.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'picture-discussion/:id', component: PictureDiscussionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
