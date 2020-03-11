import { Component, OnInit } from '@angular/core';
import { FormationServiceService } from '../services/formation/formation-service.service';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.css']
})
export class FormationComponent implements OnInit {
  ListFormation: any = [];
  constructor(public formationService: FormationServiceService) { }

  ngOnInit() {
    this.loadFormation();
  }

  loadFormation(){
    return this.formationService.listFormation().subscribe((data: {})=>{
      this.ListFormation = data;
    })
  }

}
