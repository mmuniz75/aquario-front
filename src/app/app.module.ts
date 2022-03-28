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
import { MessageComponent } from './components/UI/message/message.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    DimentionsComponent,
    HardscapeComponent,
    AquariumComponent,
    InputNumberComponent,
    SpinnerComponent,
    MessageComponent
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
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
