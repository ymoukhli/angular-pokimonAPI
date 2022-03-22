import { Component, Input } from "@angular/core";
import { Stats } from "./stats.interface";

@Component({
    selector: 'pokimon-stat',
    templateUrl: './pokimon-stat.component.html',
    styleUrls: ['./pokimon-stat.component.css']
})

export class PokimonStat {

    @Input()
    stats : any ;

    
}