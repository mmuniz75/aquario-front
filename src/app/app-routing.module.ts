import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DimentionsComponent } from './screens/dimentions/dimentions.component';
import { HardscapeComponent } from './screens/hardscape/hardscape.component';
import { AquariumComponent } from './screens/aquarium/aquarium.component';

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
  {
    path : "aquarium",
    component : AquariumComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
