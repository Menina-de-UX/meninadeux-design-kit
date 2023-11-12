import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '../../components/Button'
import { ButtonRootProps } from '../../components/Button/ButtonRoot'
import { MdAlternateEmail } from 'react-icons/md'

export default {
  title: 'Components/Button',
  component: Button.Root,
  args: {
    children: <Button.Text>Default</Button.Text>,
    asChild: true,
  },
  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
} as Meta<ButtonRootProps>

export const Default: StoryObj<ButtonRootProps> = {}

export const Primary: StoryObj<ButtonRootProps> = {
  args: {
    variant: 'primary',
    children: <Button.Text>Primay</Button.Text>,
  },
}
export const Outline: StoryObj<ButtonRootProps> = {
  args: {
    variant: 'outline',
    children: <Button.Text>Outline</Button.Text>,
  },
}
export const Ghost: StoryObj<ButtonRootProps> = {
  args: {
    variant: 'ghost',
    children: <Button.Text>Ghost</Button.Text>,
  },
}

export const WhithIcon: StoryObj<ButtonRootProps> = {
  args: {
    asChild: false,
    children: (
      <>
        <Button.Icon>
          <MdAlternateEmail />
        </Button.Icon>
        <Button.Text>Whith Icon</Button.Text>
      </>
    ),
  },
}
