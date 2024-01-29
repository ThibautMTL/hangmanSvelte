import type { Meta, StoryObj } from '@storybook/svelte';
import SecretLetter from './SecretLetter.svelte';

const meta = {
	title: 'SvelteMan/Secret Letter',
	component: SecretLetter,
	tags: ['autodocs'],
	argTypes: {
		letter: { control: 'text' },
		guessed: { control: 'boolean' }
	},
	parameters: {
		layout: 'centered'
	}
} satisfies Meta<SecretLetter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		letter: 'A',
		guessed: false
	}
};
