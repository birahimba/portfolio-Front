import { Component, OnInit } from '@angular/core';
import { ProfilService } from '../services/profil/profil.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  ListProfil: any = [];

  constructor(public profilService: ProfilService) { }

  ngOnInit() {
    this.loadProfil();
  }

  loadProfil(){
    return this.profilService.listProfil().subscribe((data: {})=>{
      this.ListProfil = data;
    })
  }

}
