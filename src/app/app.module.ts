import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
// import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from "./app.component";
import { EventRedactorComponent } from "./event-redactor/event-redactor.component";

import { DaySheduleComponent } from "./shedule/shedule.component";

import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, DaySheduleComponent, EventRedactorComponent],
  imports: [BrowserModule, HttpClientModule, ReactiveFormsModule],
  exports: [RouterModule],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
