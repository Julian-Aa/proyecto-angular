import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { TruncatePipe } from '../core/utils/truncate.pipe';


@NgModule({
  declarations: [TruncatePipe],
  exports:[TruncatePipe],
  imports: [
    CommonModule,
    SharedRoutingModule,
  ]
})
export class SharedModule { }
