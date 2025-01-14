import { Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-court-modal',
  standalone: true,
  imports: [ MatDialogModule, MatButtonModule ],
  templateUrl: './court-modal.component.html',
  styleUrl: './court-modal.component.scss'
})

export class CourtModalComponent {
  data = inject(MAT_DIALOG_DATA);
}
// TODO: rename it because it is a DIALOG!