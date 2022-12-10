import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor(private http:HttpClient) { }

  getResumeData():Observable<any> { 
    return this.http.get('../../assets/data/resumeData.json');
  }

  getContactData():Observable<any> {
    return this.http.get('../../assets/data/contactData.json');
  }
  
}