import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx'
import { ButtonProps } from '../../@types/ButtonProps';

export function Button({ children, asChild }: ButtonProps){
    const Component = asChild ? Slot : 'button';

    return(
        <Component
            className={clsx(
                "py-4 px-3 bg-purple-700 rounded font-sans text-gray-100 text-sm w-full hover:bg-purple-600",
            )}
        >
            {children}
        </Component>
    );
}