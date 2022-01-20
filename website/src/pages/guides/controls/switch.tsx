import React from 'react'
import { ControlPageTemplate } from '../../../components/guides/controls'

const config = {
    id: 'Switch',
    type: 'switch',
    value: true,
}

const props = [
    {
        name: 'type',
        type: `'switch'`,
        required: true,
    },
    {
        name: 'value',
        type: 'boolean',
        required: true,
    },
]

export default () => {
    return <ControlPageTemplate name="SwitchControl" config={config} props={props} />
}