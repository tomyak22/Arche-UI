import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'button[arche-button]',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  host: {
    class: 'arche-button',
  }
})
export class ButtonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
