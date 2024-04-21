import { Meta, StoryObj } from '@storybook/react'
import { Switch } from './switch'

const meta: Meta<typeof Switch> = {
  component: Switch,
  argTypes: {
    disabled: {
      control: { type: 'boolean' }
    }
  },
  args: {
    'aria-label': 'Switch'
  }
}

export default meta

type Story = StoryObj<typeof Switch>

export const Primary: Story = { }
export const Dark: Story = { parameters: { theme: 'dark' } }
