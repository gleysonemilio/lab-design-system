import { InputHTMLAttributes, ReactNode } from 'react'
import { Slot } from '@radix-ui/react-slot'

export interface TextInputRootProps {
  children: ReactNode
}

function TextInputRoot(props: TextInputRootProps) {
  return (
    <div className="flex items-center gap-3 h-12 py-4 px-3 rounded bg-gray-800 w-full focus-within:ring-2 ring-white">
      {props.children}
    </div>
  )
}
TextInputRoot.displayName = 'Textinput.Root'

interface TextinputIconProps {
  children: ReactNode
}

function TextInputIcon(props: TextinputIconProps) {
  return <Slot className="w-6 h-6 text-gray-400">{props.children}</Slot>
}
TextInputIcon.displayName = 'Textinput.Icon'

export interface TextInputInputProps extends InputHTMLAttributes<HTMLInputElement> {}

export function TextInputInput(props: TextInputInputProps) {
  return (
    <input
      className={
        'bg-transparent flex-1 text-gray-100 text-xs placeholder:text-gray-400 outline-none'
      }
      {...props}
    />
  )
}
TextInputInput.displayName = 'Textinput.Input'

export const TextInput = {
  Root: TextInputRoot,
  Input: TextInputInput,
  Icon: TextInputIcon
}
