import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ValidationManagementComponent } from './pages/validation-management/validation-management.component';
import { ControlMessagesComponent } from './components/control-messages/control-messages.component';
import { ValidationService } from './services/validation.service';

@NgModule({
  declarations: [
    AppComponent,
    ValidationManagementComponent,
    ControlMessagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    ValidationService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
