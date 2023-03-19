import { Meta, StoryObj } from '@storybook/react';
import { Button } from '.';
import { ButtonProps } from '../../@types/ButtonProps';

export default {
    title: 'Components/Button',
    component: Button,
    args: {
        children: 'Button as Button'
    },
    argTypes: {}
} as Meta<ButtonProps>

export const Default: StoryObj<ButtonProps> = {}