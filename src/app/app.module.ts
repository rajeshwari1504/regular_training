import { NgModule } from '@angular/core';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompanyModule } from './company/company.module';
import { EmployeeComponent } from './company/employee/employee.component';
import { MyserviceService } from './myservice.service';
import { UsernameComponent } from './username/username.component';
import { GameComponent } from './game/game.component';
import { OddComponent } from './odd/odd.component';
import { EvenComponent } from './even/even.component';
import { BasichightlightsDirective } from './basichighlights/basichightlights.directive';
import { BetterhighlightDirective } from './betterhighlight/betterhighlight.directive';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
import { ServerComponent } from './server/server.component';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
 const appRoute :Routes=[
    {path:'' ,component:HomeComponent},
   {path:'user',component:UserComponent},
   {path:'server',component:ServerComponent},

 ]

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    UsernameComponent,
    GameComponent,
    OddComponent,
    EvenComponent,
    BasichightlightsDirective,
    BetterhighlightDirective,
    UserComponent,
    HomeComponent,
    ServerComponent,

  ],
 
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    
    AppRoutingModule,
    CompanyModule,
    RouterModule.forRoot(appRoute)
 ],
  providers: [MyserviceService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    console.log("hii i m the module");
  }
}
