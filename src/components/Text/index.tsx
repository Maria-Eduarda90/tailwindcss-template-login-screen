import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';
import { TextProps } from '../../@types/TextProps';

export function Text({ size = "md", children, asChild }: TextProps){
    const Component = asChild ? Slot : 'span';

    return(
        <Component 
            className={clsx(
                "text-gray-300 font-sans",
                {
                    'text-xs': size === 'sm',
                    'text-sm': size === 'md',
                    'text-md': size === 'lg',
                }
            )}
        >
            {children}
        </Component>
    );
}