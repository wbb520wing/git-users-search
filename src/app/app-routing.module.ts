import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FollowingComponent } from './following/following.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path:'home', component: HomeComponent
  },
  {
    path: 'following', component: FollowingComponent
  },
  {
    path: '', redirectTo: 'home', pathMatch:'full'
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
