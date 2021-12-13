import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { HistoryComponent } from './pages/history/history.component';
import { TripListComponent } from './pages/trip-list/trip-list.component';

const routes: Routes = [
  {
    path: '',
    children:[
      {path:'home', component: HomeComponent},
      {path:'history', component: HistoryComponent},
      {path:'triplist', component: TripListComponent},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProtectedRoutingModule { }
