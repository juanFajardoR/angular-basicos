import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

 heroes: string[]=["SpiderMan"," BatMan", "IronMan", "Hulk","Deadpool", "Thor"];
 superPoder:string[]=["fuerza", "armadura","solar","salto","rescate","lunar"];
heroeBorrado:string="";
poderBorrado:string="";

 borrarHeroe(){
   this.heroeBorrado =  this.heroes.shift() || "";
    
 }

 borrarPoder(){
  this.poderBorrado = this.superPoder.shift() || "";
 }

}
