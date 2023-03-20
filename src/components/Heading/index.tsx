import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';
import { HeadingProps } from '../../@types/HeadingProps';

export function Heading({ size = "md", children, asChild, className }: HeadingProps){
    const Component = asChild ? Slot : 'h2';

    return(
        <Component 
            className={clsx(
                "text-gray-300 font-bold",
                {
                    'text-lg': size === 'sm',
                    'text-xl': size === 'md',
                    'text-2xl': size === 'lg',
                },
                className
            )}
        >
            {children}
        </Component>
    );
}