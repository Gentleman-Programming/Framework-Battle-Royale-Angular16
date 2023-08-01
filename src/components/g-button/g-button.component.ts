import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-g-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './g-button.component.html',
  styleUrls: ['./g-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GButtonComponent {
  @Output() clickEvent = new EventEmitter();

  clickButton() {
    this.clickEvent.emit(true);
  }
}
