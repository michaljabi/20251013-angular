import { Component } from '@angular/core';
import { SharedModule } from '../../shared/shared-module';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  imports: [SharedModule],
  styleUrls: ['./sample.component.css'],
})
export class SampleComponent {}
