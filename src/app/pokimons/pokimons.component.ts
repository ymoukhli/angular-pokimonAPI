import { Component, OnInit } from '@angular/core';
import { PokimonService } from '../pokimon.service';
import { switchMap,map} from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pokimons',
  templateUrl: './pokimons.component.html',
  styleUrls: ['./pokimons.component.css']
})
export class PokimonsComponent implements OnInit {

  constructor(private pokimon: PokimonService, private route: ActivatedRoute, private router: Router) { }

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
    )
    .subscribe();
  }

  
  displayPokimon(poki: any): void {
    console.log(poki.name)
    
   this.router.navigateByUrl(`/pokimon/${ poki.name }`);
  }
}
