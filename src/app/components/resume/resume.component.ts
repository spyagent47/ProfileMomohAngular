import { Component, input, ChangeDetectionStrategy } from '@angular/core';
import { AnimateOnScrollDirective } from '../../directives/animate-on-scroll.directive';
import { GradientButtonComponent } from '../shared/buttons/gradient-button.component';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [AnimateOnScrollDirective, GradientButtonComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.scss'
})
export class ResumeComponent {
  readonly cvUrl = input('assets/files/john-doe-cv.pdf');
  readonly authorName = input('John Doe');
}
