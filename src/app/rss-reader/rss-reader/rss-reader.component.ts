import { Component } from '@angular/core';
import * as Parser from 'rss-parser';

@Component({
  selector: 'app-rss-reader',
  templateUrl: './rss-reader.component.html',
  styleUrls: ['./rss-reader.component.css']
})
export class RssReaderComponent {
  rssFeedItems: any[] = [];

  constructor() { }

  ngOnInit() {
    this.loadRSSFeed();
  }

  loadRSSFeed() {
    const parser = new Parser();

    parser.parseURL('https://www.eltiempo.com/rss/colombia.xml', (err, feed) => {
      if (!err) {
        this.rssFeedItems = feed.items;
      }
    });
  }
}
