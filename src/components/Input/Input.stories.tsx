import { Meta, StoryObj } from '@storybook/react';
import { Input } from '.';
import { InputRootProps } from '../../@types/InputProps';
import { Envelope } from 'phosphor-react';

export default {
    title: 'Components/Input',
    component: Input.Root,
    args: {
        children: (
            <>
                <Input.Icon>
                    <Envelope/>
                </Input.Icon>
                <Input.Input placeholder='E-mail' />
            </>
        )
    },
    argTypes: { 
        children: {
            table: {
                disable: true,
            }
        },
    }
} as Meta<InputRootProps>;

export const Default: StoryObj<InputRootProps> = {};

export const WithoutIcon: StoryObj<InputRootProps> = {
    args: {
        children: <Input.Input placeholder='E-mail' />
    }
}