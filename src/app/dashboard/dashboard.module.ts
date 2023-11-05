import { FooterModule } from './../shared/pages/footer/footer.module';
import { MenuModule } from './../modules/user/pages/menu/menu.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [DashboardComponent],
  imports: [CommonModule, DashboardRoutingModule, MenuModule, FooterModule],
  exports: [DashboardComponent],
})
export class DashboardModule {}
