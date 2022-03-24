import { PokimonService } from './../pokimon.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { tap, map } from 'rxjs';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-pokimon-details',
  templateUrl: './pokimon-details.component.html',
  styleUrls: ['./pokimon-details.component.css']
})
export class PokimonDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private pokimonService: PokimonService) { }

  ngOnInit(): void {
    this.pokimon = this.route.snapshot.paramMap.get('name') || ''
    this.getPokimon()
    this.getComments();
  }

  formComment = new FormGroup({
    name : new FormControl(''),
    comment : new FormControl(''),
  });

  pokimonRes: any;
  pokimonImage: string = '';
  stats:any = {};
  pokimon: string = '';
  comments: any;

  getComments() {
    this.pokimonService.getComments(this.pokimon).subscribe((res: any) => {
      console.log('com',res);
      this.comments = res;
    });
  }
  handleForm() {
    this.formComment.value.pokimon = this.pokimon;
    this.pokimonService.putData(this.formComment.value).subscribe(res => this.getComments());
    this.formComment.setValue({ name: '', comment: ''});
  }

  getPokimon(): void {
    this.pokimonService.getData(`https://pokeapi.co/api/v2/pokemon/${this.pokimon}`)
    .subscribe(result => { 
      this.pokimonImage = result?.sprites.other.dream_world.front_default;
      result?.stats.forEach((elem: any) => {
        this.stats[elem.stat.name] = elem.base_stat
      });
      this.pokimonRes = result;
      this.pokimonService.getData(result.species.url).subscribe((res: any) => {
        this.stats.description = res.flavor_text_entries[0].flavor_text;
        this.stats.description = this.stats.description.replace(//gi, '');
      })
    })
  }

}
