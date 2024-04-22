import { Meta, StoryObj } from '@storybook/react'
import { Button } from './button'
import { Toaster } from './toaster'
import { toast } from './use-toast'

const meta: Meta<typeof Toaster> = {
  component: Toaster,
  argTypes: {
    position: {
      control: { type: 'select', options: ['top-left', 'top-right', 'bottom-left', 'bottom-right'] }
    }
  },
  args: {
    position: 'top-right'
  }
}

export default meta

type Story = StoryObj<typeof Toaster>

function Sample (): JSX.Element {
  return (
    <>
      <Button onClick={() => toast({ title: 'Notification', description: 'Notification text' })}>Notify</Button>
      <Button onClick={() => toast({ title: 'Notification', description: 'Notification text', variant: 'destructive' })}>Notify Destructive</Button>
      <Toaster />
    </>

  )
}

export const Primary: Story = { render: Sample }
export const Dark: Story = { parameters: { theme: 'dark' }, render: Sample }
