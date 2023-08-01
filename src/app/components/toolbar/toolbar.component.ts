import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { GButtonComponent } from '@src/components';
import { GDialogComponent } from '@src/components/g-dialog';
import { DialogService } from '@src/services';
import { GUserFormComponent } from '../g-user-form';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [CommonModule, GButtonComponent, GDialogComponent, GUserFormComponent],
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToolbarComponent {
  dialogService = inject(DialogService);

  openDialog() {
    //this.dialogService.$dialogSubject.setSubject(true);
    this.dialogService.dialogSignal.set(true);
  }
}
