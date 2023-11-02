import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RssReaderRoutingModule } from './rss-reader-routing.module';
import { RssReaderComponent } from './rss-reader/rss-reader.component';


@NgModule({
  declarations: [
    RssReaderComponent
  ],
  imports: [
    CommonModule,
    RssReaderRoutingModule
  ]
})
export class RssReaderModule { }
