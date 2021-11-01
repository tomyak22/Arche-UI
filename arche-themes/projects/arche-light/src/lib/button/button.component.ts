import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'arche-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input('label') label: string | null = 'Arche Button';
  @Input('primary') primary: boolean = false;
  @Input('primary-dark') primaryDark: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
