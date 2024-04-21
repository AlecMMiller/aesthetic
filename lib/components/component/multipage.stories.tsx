import { Meta, StoryObj } from '@storybook/react'
import { MultiPage } from './multipage'

const mockContent = (<div className='w-96 text-center h-44'>Hello world</div>)

const meta: Meta<typeof MultiPage> = {
  component: MultiPage,
  argTypes: {
    currentPage: {
      control: { type: 'number' },
      defaultValue: 1
    },
    pages: {
      control: { type: 'number' },
      defaultValue: 3
    },
    canGoBack: {
      control: { type: 'boolean' },
      defaultValue: true
    },
    canGoForward: {
      control: { type: 'boolean' },
      defaultValue: true
    }
  },
  args: {
    children: mockContent,
    pages: 3,
    currentPage: 1
  }
}

export default meta

type Story = StoryObj<typeof MultiPage>

export const Primary: Story = { }
export const Dark: Story = { parameters: { theme: 'dark' } }
