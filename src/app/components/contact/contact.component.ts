import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../../services/portfolio.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactData:any;

  constructor(private portfolioData:PortfolioService) { }

  ngOnInit(): void {
    this.portfolioData.getContactData().subscribe(contactData => {
      this.contactData = contactData;
      this.contactData = Array.of(this.contactData); 
      console.log(this.contactData);
    })
  }
}
