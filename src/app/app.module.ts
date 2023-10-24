import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopComponent } from './top/top.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ErrorLabelModule } from './shared/modules/error-label/error-label.module';

@NgModule({
  declarations: [AppComponent, TopComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BsDatepickerModule.forRoot(),
    ErrorLabelModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
