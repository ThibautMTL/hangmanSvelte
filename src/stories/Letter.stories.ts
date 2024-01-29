import type { Meta, StoryObj } from '@storybook/svelte';
import Letter from './Letter.svelte';

const meta = {
	title: 'SvelteMan/Letter',
	component: Letter,
	tags: ['autodocs'],
	argTypes: {
		key: { control: 'text' },
		state: {
			control: { type: 'select' },
			options: ['default', 'correct', 'wrong']
		}
	},
	parameters: {
		layout: 'centered'
	}
} satisfies Meta<Letter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		key: 'a',
		state: 'default'
	}
};
