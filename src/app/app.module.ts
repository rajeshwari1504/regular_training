import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompanyModule } from './company/company.module';
import { EmployeeComponent } from './company/employee/employee.component';
import { MyserviceService } from './myservice.service';
import { UsernameComponent } from './username/username.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    UsernameComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CompanyModule,
    FormsModule

  ],
  providers: [MyserviceService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    console.log("hii i m the module");
  }
}
