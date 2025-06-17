import { CommonModule } from '@angular/common';
import {Component, Input, Output, EventEmitter, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'mds-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class ButtonComponent {
  /** Is this the principal call to action on the page? */
  @Input()
  primary = false;

  /** Should the button be small? */
  @Input()
  small = false;

  /** Should the button be large? */
  @Input()
  large = false;

  /**
   * Is this button disabled?
   *
   * @default false
   */
  @Input()
  isDisabled = false;

  /**
   * Button contents
   *
   * @required
   */
  @Input()
  label = '';

  /** Optional click handler */
  @Output()
  onClick = new EventEmitter<Event>();

  public get classes(): string[] {
    const mode = this.primary ? 'btn-primary' : 'btn-secondary';
    const size = this.small ? 'btn-sm' : this.large ? 'btn-lg' : '';

    return ['btn', mode, size];
  }
}
