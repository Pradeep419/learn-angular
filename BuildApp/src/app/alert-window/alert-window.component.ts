import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, input } from '@angular/core';

@Component({
  selector: 'app-alert-window',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './alert-window.component.html',
  styleUrl: './alert-window.component.css'
})
export class AlertWindowComponent {
  @Input() product: any;
  @Input() toggleBuying: any;
  @Output() notify = new EventEmitter<any>();

  constructor(){}

  clickChild(){
    this.notify.emit(this.product);
  }
}
