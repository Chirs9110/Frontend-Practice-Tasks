import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VizsgafeladatComponent } from './vizsgafeladat/vizsgafeladat.component';


const routes: Routes = [
  {path:"v", component:VizsgafeladatComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],

})
export class AppRoutingModule { }
