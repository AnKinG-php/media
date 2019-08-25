import { Component } from '@angular/core';
import { trigger, style, animate, transition, state } from '@angular/animations';

@Component({
  selector: 'app-media',
  templateUrl: 'media.html',
  styleUrls: ['media.scss'],
  animations: [
    trigger(
      'FadeIn', [
        transition(':enter', [
          style({ transform: 'translatey(0%)', opacity: 0 }),
          animate('1s ease-in-out', style({ transform: 'translatey(0%)', opacity: 1 }))
        ])
      ]
    ),
    trigger(
      'Show', [
        transition(':enter', [
          style({ transform: 'translatey(-50%)', opacity: 0 }),
          animate('0.5s ease-in-out', style({ transform: 'translatey(0%)', opacity: 1 }))
        ])
      ]
    )
  ]
})
export class MediaComponent {

  constructor() { }

}
