import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DimentionsComponent } from './dimentions/dimentions.component';
import { HardscapeComponent } from './hardscape/hardscape.component';

const routes: Routes = [

  {
    path : "",
    component : DimentionsComponent
  },
  {
    path : "dimentions",
    component : DimentionsComponent
  },
  {
    path : "hardscape",
    component : HardscapeComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
