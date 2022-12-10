import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../../services/portfolio.service';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {
  resumeData:any;
  sumary: any;
  educationList:any;
  professionalExperienceList:any;
  constructor(private portfolioData:PortfolioService) { }

  ngOnInit(): void {
    this.portfolioData.getResumeData().subscribe(data => {
      this.resumeData = data;
      this.sumary = data.Sumary;
      this.educationList = data.Education;
      this.professionalExperienceList = data.ProfessionalExperience;
    });
  }

}
