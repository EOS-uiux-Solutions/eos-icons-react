import { StoryBookProps } from '../interface/index'

function storybookTemplate ({ fileName }:StoryBookProps) {
  const render = `
// GENERATED BY ./scripts/storyBookScript.ts
import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { EOS_${fileName} } from '../../src/icon/'

export default {
  title: 'icon/EOS_${fileName}',
  component: EOS_${fileName},
  argTypes: {
    color: { control: 'color' },
    rotate: { control: 'number' },
    size: { control: 'number' }
  }
} as ComponentMeta<typeof EOS_${fileName}>

export const Template: ComponentStory<typeof EOS_${fileName}> = (args) => <EOS_${fileName} {...args} />

//export const main = Template.bind({})
`
  return (render)
}

export default storybookTemplate
