import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DimentionsComponent } from './dimentions/dimentions/dimentions.component';

const routes: Routes = [

  {
    path : "",
    component : DimentionsComponent
  },
  {
    path : "dimentions",
    component : DimentionsComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
