import { LucideIcon } from 'lucide-react'
import { Container } from '../primitive/container'

interface OptionProps {
  header: string
  description: string
  icon: LucideIcon
  onClick: () => void
}

interface OptionPropsFull extends OptionProps {
  reverse: boolean
}

function Option (props: OptionPropsFull): JSX.Element {
  const direction = props.reverse ? 'flex-col-reverse' : 'flex-col'

  return (
    <button className='group hover:bg-slate-4 rounded-xl p-4 flex gap-6 items-center' onClick={props.onClick}>
      <props.icon size={32} className='group-hover:text-blue-9' />
      <div className={`flex ${direction} text-left`}>
        <div className='text-2xl font-bold text-blue-10'>
          {props.header}
        </div>
        <div className='text-xl text-slate-11'>
          {props.description}
        </div>
      </div>
    </button>
  )
}

interface SelectorProps {
  options: OptionProps[]
  reverse?: boolean
}

function Selector (props: SelectorProps): JSX.Element {
  const options = props.options.map((option) => <Option key={option.header} {...option} reverse={props.reverse ?? false} />)
  return (
    <Container className='flex flex-col gap-4 h-fit w-96 p-1'>
      {options}
    </Container>
  )
}

export { Selector }
export type { OptionProps, SelectorProps }
