import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor() { }

  getData() { 
    console.log("services working");
  }
}
