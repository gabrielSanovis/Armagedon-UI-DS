import { Meta, StoryObj } from '@storybook/react'
import { CardCall, ICardCall } from './CardCall'

export default {
    title: 'Components/CardCall',
    component: CardCall.Root,
    args: {
        call: 7,
        minCall: 0,
        maxCall: 10,
        label: 'ligações',
        callType: 'humanizadas',
    }
} as Meta<ICardCall>

export const Default = {}
