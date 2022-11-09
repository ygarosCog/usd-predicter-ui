import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Rate } from "./rate.model";

@Injectable({providedIn: "root"})
export class PredictService{
    url = "http://localhost:8080";
    constructor(private http: HttpClient){}

    fetchPredictionForTomorrow(): Observable<boolean>{
        return this.http.get<boolean>(this.url + "/predict");
    }
    fetchPredictionForDate(date: Date): Observable<Rate>{
        return this.http.post<Rate>(this.url + "/ratesForDate", date);
    }
    fetchPredictionForToday(): Observable<Rate>{
        return this.http.get<Rate>(this.url + "/ratesForToday");
    }
}