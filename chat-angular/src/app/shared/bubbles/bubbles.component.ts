import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bubbles',
  templateUrl: './bubbles.component.html',
  styleUrls: ['./bubbles.component.css']
})
export class BubblesComponent implements OnInit {

  constructor() { }

  @Input() bubblesNumber!: number
  bubbles:number[] = []

  ngOnInit(): void {
    console.log(this.bubblesNumber)
    this.bubblesNumber = this.bubblesNumber > 38 ? 38 : this.bubblesNumber;
    for(let i = 0; i < this.bubblesNumber; i++){
      this.bubbles.push(Math.floor(Math.random() * 12))
    }

  }



}
