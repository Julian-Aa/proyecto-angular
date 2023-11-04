import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { MainUserAdminComponent } from './main-user-admin/main-user-admin.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [AppComponent, MainUserAdminComponent],
  imports: [BrowserModule, AppRoutingModule, LoginModule, DashboardModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
