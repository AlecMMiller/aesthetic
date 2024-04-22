import { Meta, StoryObj } from '@storybook/react'
import { Select, SelectContent, SelectTrigger, SelectValue, SelectItem } from './select'

function Sample (): JSX.Element {
  return (
    <Select>
      <SelectTrigger className='w-64'>
        <SelectValue>Bar</SelectValue>
      </SelectTrigger>
      <SelectContent>
        <SelectItem value='bar'>Bar</SelectItem>
        <SelectItem value='buzz'>Buzz</SelectItem>
        <SelectItem value='bang'>Bang</SelectItem>
      </SelectContent>
    </Select>
  )
}

const meta: Meta<typeof Select> = {
  component: Select,
  argTypes: {
    children: {
      control: { type: 'text' }
    }
  },
  args: {
    children: 'Foo'
  }
}

export default meta

type Story = StoryObj<typeof Select>

export const Primary: Story = { render: Sample }
export const Dark: Story = { parameters: { theme: 'dark' }, render: Sample }
