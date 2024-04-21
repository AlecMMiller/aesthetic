import { Meta, StoryObj } from '@storybook/react'
import { OptionProps, Selector } from './Selector'
import { Folder, PlusCircle } from 'lucide-react'

const mockOptions: OptionProps[] = [
  { header: 'Create', description: 'a new file', icon: PlusCircle, onClick: () => {} },
  { header: 'Load', description: 'a file', icon: Folder, onClick: () => {} }
]

const meta: Meta<typeof Selector> = {
  component: Selector,
  args: {
    options: mockOptions
  }
}

export default meta

type Story = StoryObj<typeof Selector>

export const Primary: Story = { }
