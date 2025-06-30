import {CommonModule} from '@angular/common';
import {Component, Input, ViewEncapsulation} from '@angular/core';

@Component({
    selector: 'mds-input',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './input.component.html',
    styleUrls: ['./input.component.scss'],
    encapsulation: ViewEncapsulation.None
})

export class InputComponent {
    /**
     * Input type
     *
     * @required
     */
    @Input() type = 'text';
    /**
     * input ID
     *
     * @required
     */
    @Input() id = '';
    /** Should the input be small? */
    @Input() small = false;
    /** Should the input be large? */
    @Input() large = false;
    /**
     * Is this input disabled?
     *
     * @default false
     */
    @Input() isDisabled = false;
    /**
     * Is this input required?
     *
     * @default false
     */
    @Input() isRequired = false;
    /** Input contents */
    @Input() placeholder = '';

    public get classes(): string[] {
        const size = this.small ? 'form-control-sm' : this.large ? 'form-control-lg' : '';

        return ['form-control', size];
    }
}
