import {Component, OnInit} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'second',
  template: `
    <h3>Second Component</h3>
    <p>This is the content of SecondComponent</p>
    <p>Routing Parameter ID: {{id}}</p>
  `
})

export class SecondComponent implements OnInit {
  id: number;
  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      if (params['id'] !== undefined) {
         this.id = +params['id'];
      }
    });
  }


}