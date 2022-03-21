import { Component, Input, OnInit, Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-pokimon-card',
  templateUrl: './pokimon-card.component.html',
  styleUrls: ['./pokimon-card.component.css']
})

export class PokimonCardComponent implements OnInit {

  constructor() { }


  ngOnInit(): void {
  }

  @Input()
  pokimon:any = {};

  @Output()
  clicked: EventEmitter<any> = new EventEmitter<any>();

  handleClick(): void {
    this.clicked.emit(this.pokimon);
  }
}
