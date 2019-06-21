import { mapToMapExpression } from '@angular/compiler/src/render3/util';

export class Pizza {
    id: number;
    size: string;
    AvblToppings: string[] = ["peperoni", "sausage", "bacon",
                     "green peppers", "mushroom", "grilled chicken"];
    selectedToppings: String[];
    // Toppings: Map<string, boolean> = new Map(
    // [    
    //         ["peperoni",false], 
    //         ["suasage",false],
    //         ["bacon",false],
    //         ["green peppers",false],
    //         ["mushrooms",false],
    //         ["grilled chicken",false],
    // ]);

    constructor({ id, size }: { id: number; size: string}){
        this.id = id;
        this.size = size;
    }

    getToppings(){
        return this.selectedToppings;
    }

    changeTopping(top: String, add: boolean){
        if(add)
            this.selectedToppings.push(top);
        else
            this.selectedToppings = this.selectedToppings.filter(obj => obj != top);
    }
}
