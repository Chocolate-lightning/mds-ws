import {CommonModule} from '@angular/common';
import {Component, ViewEncapsulation} from '@angular/core';
import {InputComponent} from '../input/input.component';
import {ButtonComponent} from '../button/button.component';

@Component({
    selector: 'mds-login',
    standalone: true,
    imports: [CommonModule, InputComponent, ButtonComponent],
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    encapsulation: ViewEncapsulation.None
})

export class LoginComponent {
    LoginCheck(): void {
        // Example starter JavaScript for disabling form submissions if there are invalid fields
        (function () {
            'use strict';
            // Fetch all the forms we want to apply custom Bootstrap validation styles to
            var forms = document.getElementsByClassName('needs-validation');
            // Loop over them and prevent submission
            var validation = Array.prototype.filter.call(forms, function (form) {
                form.addEventListener('click', function (event: MouseEvent) {
                    event.preventDefault();
                    event.stopPropagation();
                    form.classList.add('was-validated');
                    if (form.checkValidity() === true) {
                        form.querySelector('#demo-submit').classList.add('d-block');
                        return;
                    }
                }, false);
            });
        })();
    }
}
