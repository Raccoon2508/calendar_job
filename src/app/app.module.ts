import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
// import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';




import { DaySheduleComponent } from './shedule/shedule.component';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    DaySheduleComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  exports: [RouterModule],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }