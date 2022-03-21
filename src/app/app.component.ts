import { PokimonService } from './pokimon.service';
import { Component, OnInit } from '@angular/core';
import { switchMap,map} from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private pokimon: PokimonService) {}
  
  ngOnInit(): void {
    this.getData();
  }

  data: any = [];
  items: any;
  getData(): void {
    this.pokimon.getData('https://pokeapi.co/api/v2/pokemon?limit=200&offset=20').pipe(
      switchMap(data => data.results),
      map((elem: any) => this.pokimon.getData(elem.url)
      .subscribe(result => {this.data.push({img : result.sprites.other.dream_world.front_default, name: result.name})}))
    ).subscribe();
  }

  displayPokimon(poki: any): void {
    
    console.log(poki);
  }
}
