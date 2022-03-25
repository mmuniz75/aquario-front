import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import { DimentionsComponent } from './screens/dimentions/dimentions.component';
import { HardscapeComponent } from './screens/hardscape/hardscape.component';
import { AquariumComponent } from './screens/aquarium/aquarium.component';
import { FormsModule } from '@angular/forms';
import { InputNumberComponent } from './components/input-number/input-number.component';
import { HttpClientModule } from '@angular/common/http';
import { SpinnerComponent } from './components/UI/spinner/spinner.component';


@NgModule({
  declarations: [
    AppComponent,
    DimentionsComponent,
    HardscapeComponent,
    AquariumComponent,
    InputNumberComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
