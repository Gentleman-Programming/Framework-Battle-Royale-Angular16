import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { GButtonComponent } from '../g-button';
import { DialogService } from '@src/services';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-g-dialog',
  standalone: true,
  imports: [CommonModule, GButtonComponent],
  templateUrl: './g-dialog.component.html',
  styleUrls: ['./g-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GDialogComponent {
  dialogService = inject(DialogService);
  isOpen = this.dialogService.dialogSignal;

  closeDialog() {
    this.dialogService.dialogSignal.set(false);
  }
}
