import { Component, OnInit } from '@angular/core';
import { Pizza } from '../pizza'
import { MapType } from '@angular/compiler';


@Component({
  selector: 'app-pizza-oven',
  templateUrl: './pizza-oven.component.html',
  styleUrls: ['./pizza-oven.component.scss']
})
export class PizzaOvenComponent implements OnInit {
  
  
  pizzas: Pizza[] = [new Pizza({id:1, size: 'large'})];
  

  

    addPizza({ id, size }: { id: number; size: string; }){
      this.pizzas.push(new Pizza({ id, size }));
    }

    clearOder(){
      this.pizzas = [];
    }

    getPizzaToppings(id: number){
      return Array.from(this.pizzas[id].getToppings())
    }
    completeOrder(){

    }
    
    constructor() { }

    ngOnInit() {
    }

}
