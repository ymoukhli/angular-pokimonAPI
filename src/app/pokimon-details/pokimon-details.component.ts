import { PokimonService } from './../pokimon.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-pokimon-details',
  templateUrl: './pokimon-details.component.html',
  styleUrls: ['./pokimon-details.component.css']
})
export class PokimonDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private pokimonService: PokimonService) { }

  ngOnInit(): void {
    this.pokimon = this.route.snapshot.paramMap.get('name')
    this.getPokimon()
  }

  pokimonRes: any;
  pokimonImage: string = '';
  pokimon: any;
  getPokimon(): void {
    this.pokimonService.getData(`https://pokeapi.co/api/v2/pokemon/${this.pokimon}`)
    .subscribe(result => { 
      this.pokimonImage = result.sprites.other.dream_world.front_default;
      this.pokimonRes = result;
    })

  }


}
