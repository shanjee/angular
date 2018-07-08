import { Component, ViewEncapsulation, OnInit, OnDestroy } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';




@Component({
  selector: 'app-root',
  templateUrl: './FindBookPageComponent.html',
  styleUrls: ['./FindBookPageComponent.css'],
  encapsulation: ViewEncapsulation.None
})

export class FindBookPageComponent implements OnInit, OnDestroy {
  percentageValue: (value: number) => string;

  gaugeValues: any = {
    1: 100,
    2: 50,
    3: 50,
    4: 50,
    5: 50,
    6: 50,
    7: 50
  };

  interval: any;


  ngOnInit(): void {
    const updateValues = (): void => {
      this.gaugeValues = {
        1: Math.round(Math.random() * 100),
        2: Math.round(Math.random() * 100),
        3: Math.round(Math.random() * 100),
        4: Math.round(Math.random() * 100),
        5: Math.round(Math.random() * 200),
        6: Math.round(Math.random() * 100),
        7: Math.round(Math.random() * 100)
      };
    };

    const INTERVAL: number = 1000;

    this.interval = setInterval(updateValues, INTERVAL);
    updateValues();
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }

  title = 'My book page';
  description = 'Angular5-Book page';

  itemValue = '';
  itemKey = ''; // for keeping the key of the selected user

  books: Observable<any[]>;

  constructor(public db: AngularFireDatabase) {

    this.books = db.list('Books').snapshotChanges().map(
      changes => { return changes.map(c => ({ key: c.payload.key, ...c.payload.val() })) });

    this.percentageValue = function (value: number): string {
      return `${Math.round(value)} / ${this['max']}`;
    }
  }

  // Codes can be seen in https://www.npmjs.com/package/ngx-gauge
  gaugeType = "semi";
  gaugeValue = 65;
  gaugeLabel = "Speed";
  gaugeAppendText = "km/hr";

  thresholdConfig = {
    '0': { color: 'green' },
    '40': { color: 'orange' },
    '75.5': { color: 'red' }
  };

}