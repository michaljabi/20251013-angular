import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardModule } from './dashboard/dashboard.module';
import { OldAppRoutingModule } from './old-app-routing.module';
import { OldAppComponent } from './old-app.component';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    OldAppComponent
  ],
  imports: [
    CommonModule,
    OldAppRoutingModule,
    CoreModule,
    DashboardModule,
  ]
})
export class OldAppModule { }
