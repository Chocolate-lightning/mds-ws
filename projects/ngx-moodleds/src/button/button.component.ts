import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'mds-btn',
  imports: [CommonModule, NgbModule],
  // templateUrl: './button.component.html',
  template: ` <button
  type="button"
  (click)="onClick.emit($event)"
  [ngClass]="classes"
  [ngStyle]="{ 'background-color': backgroundColor }"
>
  {{ label }}
</button>`,
  styleUrls: ['./button.component.scss'],
})

export class ButtonComponent {
  /** Is this the principal call to action on the page? */
  @Input()
  primary = false;

  /** What background color to use */
  @Input()
  backgroundColor?: string;

  /** How large should the button be? */
  @Input()
  size: 'sm' | 'std' | 'lg' = 'std';

  /**
   * Button contents
   *
   * @required
   */
  @Input()
  label = 'Button';

  /** Optional click handler */
  @Output()
  onClick = new EventEmitter<Event>();

  public get classes(): string[] {
    const mode = this.primary ? 'btn-primary' : 'btn-secondary';

    return ['btn', `btn-${this.size}`, mode];
  }
}
