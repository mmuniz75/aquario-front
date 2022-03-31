import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DimentionsComponent } from './screens/dimentions/dimentions.component';
import { HardscapeComponent } from './screens/hardscape/hardscape.component';
import { AquariumComponent } from './screens/aquarium/aquarium.component';
import { SpaceGuard } from './space.guard';
import { TankGuard } from './tank.guard';

const routes: Routes = [

  {
    path : "",
    component : AquariumComponent,
    canActivate : [SpaceGuard]
  },  
  {
    path : "dimentions",
    component : DimentionsComponent
  },
  {
    path : "hardscape",
    component : HardscapeComponent,
    canActivate : [TankGuard]
  },
  {
    path : "aquarium",
    component : AquariumComponent,
    canActivate : [SpaceGuard]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
