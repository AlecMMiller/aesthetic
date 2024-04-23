import { Meta, StoryObj } from '@storybook/react'
import { DarkModeToggle } from './dark-toggle'
import { Wrapper } from './wrapper'

const meta: Meta<typeof DarkModeToggle> = {
  component: DarkModeToggle,
  argTypes: {},
  args: {}
}

export default meta

type Story = StoryObj<typeof DarkModeToggle>

export const Primary: Story = {
  parameters: { layout: 'fullscreen' },
  render: () => {
    return (
      <Wrapper>
        <DarkModeToggle />
      </Wrapper>
    )
  }
}
