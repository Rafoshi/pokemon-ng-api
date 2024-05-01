import { Component } from '@angular/core';
import { IbgeService } from '../../services/ibge.service';
import { Estado } from '../../interfaces/Estado';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ibge',
  standalone: true,
  imports: [ CommonModule],
  templateUrl: './ibge.component.html',
  styleUrl: './ibge.component.css'
})
export class IbgeComponent {
  estados: Estado[] = [];

  constructor(private ibgeService: IbgeService){}

  listar():void{
     this.ibgeService.listar().subscribe((estados) => {this.estados = estados});
  }
  ngOnInit(){
     this.listar();
  }
}
