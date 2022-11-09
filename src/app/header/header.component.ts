import { Component, OnInit } from '@angular/core';
import { PredictService } from '../shared/predict.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  usdToPlnRatio: string = " $1 = ";

  constructor(private predictService: PredictService) { }

  ngOnInit(): void {
    this.predictService.fetchPredictionForToday()
      .subscribe(rate => {
        this.usdToPlnRatio = this.usdToPlnRatio + rate.mid + " PLN";
      });
  }

}
