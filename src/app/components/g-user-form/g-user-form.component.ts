import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormsModule,
  ReactiveFormsModule,
  NonNullableFormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';
import { UserService } from '@src/app/services';
import { GButtonComponent } from '@src/components';
import { User } from '@src/app/models';
import { DialogService } from '@src/services';

@Component({
  selector: 'app-g-user-form',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, GButtonComponent],
  templateUrl: './g-user-form.component.html',
  styleUrls: ['./g-user-form.component.scss'],
})
export class GUserFormComponent {
  fb = inject(NonNullableFormBuilder);
  userService = inject(UserService);
  dialogService = inject(DialogService);

  form = this.fb.group({
    name: new FormControl<string>('', [Validators.required]),
  });

  submit() {
    if (this.form.valid) {
      this.userService.setUserFormState(this.form.getRawValue() as User);
      this.dialogService.dialogSignal.set(false);
    } else this.form.markAllAsTouched();
  }
}
