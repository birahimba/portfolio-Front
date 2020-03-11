import { Component, OnInit } from '@angular/core';
import { ExperienceServiceService } from '../services/experience/experience-service.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  ListExperience: any = [];
  constructor( public experienceService: ExperienceServiceService) { }

  ngOnInit() {
    this.loadExperience();
  }

  loadExperience(){
    return this.experienceService.listExperience().subscribe((data: {})=>{
      this.ListExperience = data;
    })
  }

}
