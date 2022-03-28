import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DimentionsComponent } from './screens/dimentions/dimentions.component';
import { HardscapeComponent } from './screens/hardscape/hardscape.component';
import { AquariumComponent } from './screens/aquarium/aquarium.component';
import { ConfigSetGuard } from './config-set.guard';

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
    component : HardscapeComponent,
    canActivate : [ConfigSetGuard]
  },
  {
    path : "aquarium",
    component : AquariumComponent,
    canActivate : [ConfigSetGuard]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
