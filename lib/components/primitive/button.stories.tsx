import { Meta, StoryObj } from '@storybook/react'
import { Button } from './button'

const meta: Meta<typeof Button> = {
  component: Button,
  argTypes: {
    variant: {
      options: ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link'],
      control: { type: 'radio' }
    },
    size: {
      options: ['default', 'sm', 'lg', 'icon'],
      control: { type: 'radio' }
    },
    rounding: {
      options: ['default', 'full'],
      control: { type: 'radio' }
    },
    children: {
      control: { type: 'text' },
      defaultValue: 'Foo'
    },
    disabled: {
      control: { type: 'boolean' }
    }
  }
}

export default meta

type Story = StoryObj<typeof Button>

export const Primary: Story = { }
