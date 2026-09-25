import type { Meta, StoryObj } from '@storybook/angular-vite';

import { HelloComponent } from './hello.component';

const meta: Meta<HelloComponent> = {
  title: 'Hello',
  component: HelloComponent,
};

export default meta;

export const Default: StoryObj<HelloComponent> = {
  args: { name: 'Angular 22.2' },
};
