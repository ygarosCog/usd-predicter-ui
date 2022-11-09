import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { PredictService } from '../shared/predict.service';

@Component({
  selector: 'app-predict',
  templateUrl: './predict.component.html',
  styleUrls: ['./predict.component.css']
})
export class PredictComponent implements OnInit {
  forDateMode = false;
  prediction: string = "";
  error: string = "";

  constructor(private predictService: PredictService) { }

  ngOnInit(): void {
  }

  onDate(){
    this.forDateMode = !this.forDateMode;
  }

  onSubmit(form: NgForm){
    this.reset();
    const date = form.value.date;
    console.log(form.value);
    this.predictService.fetchPredictionForDate(new Date(form.value.date))
      .subscribe(data => {
        console.log(data);
        if(data.effectiveDate < date){
          this.error = `Data for ${date} is not available! Last update was on ${data.effectiveDate}!`;
        }
        this.prediction = `Exchange ratio for ${data.effectiveDate} $1 = ${data.mid} PLN`;
      })
      form.reset();
      
  }
  reset(){
    this.prediction = "";
    this.error = "";
  }
  onPredict(){
    this.reset();
    this.predictService.fetchPredictionForTomorrow()
      .subscribe((data) => {
        console.log(data);
        this.prediction = data ? "$ will go up!" : "$ will go down!";
     });
    }
}
