import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-hello',
  template: `<p>Hello, {{ name() }}!</p>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HelloComponent {
  readonly name = input('Storybook');
}
