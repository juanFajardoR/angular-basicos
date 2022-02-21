import { Component} from "@angular/core";

@Component({
    selector: 'app-contador',
    template: `
        
    <h1> {{titulo}} </h1>
    <h3><strong>la base es = </strong>{{base}}</h3>
   
    <button (click)="acumular(base)"> + {{base}}</button>

    <span>{{numero}}</span>

    <button (click)="acumular(-base)">  - {{base}} </button>    
     `
    })


export class ContadorComponent{
    titulo:string= 'Contador Component JJFR';
    numero:number= 10;
    base:number=5;
   
   // se va a realiza un metodo
   acumular(valor:number){
   this.numero  +=  valor;

}
}