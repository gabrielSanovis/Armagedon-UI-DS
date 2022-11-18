import { Meta, StoryObj } from '@storybook/react'
import { ProgressBar, IProgressBar } from './ProgressBar'

export default {
    title: 'Components/ProgressBar',
    component: ProgressBar,
    args: {
        min: 0,
        max: 10,
        bgColor: 'red'
    }
} as Meta<IProgressBar>

export const Default = {}
