import {
  animate,
  query,
  stagger,
  style,
  transition,
  trigger,
} from '@angular/animations';

// ? Effects

const fade_in = [
  style({ opacity: 0 }),
  animate('600ms ease'),
  style({ opacity: 1 }),
];

const fade_out = [animate('600ms ease'), style({ opacity: 0 })];

const ladder_effect = [
  style({ opacity: 0, transform: 'translateY(-100px)' }),
  stagger(30, [
    animate(
      '1000ms cubic-bezier(0.35, 0, 0.25, 1)',
      style({ opacity: 1, transform: 'none' })
    ),
  ]),
];

// ? Animations

export const main_anim = trigger('main_anim', [
  transition(':enter', [query('.container > *', ladder_effect)]),
]);

export const item_fade = trigger('item_fade', [
  transition(':enter', fade_in),
  transition(':leave', fade_out),
]);
