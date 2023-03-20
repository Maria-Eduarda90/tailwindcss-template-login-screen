import { InputProps, InputRootProps, InputIconProps } from "../../@types/InputProps";
import { Slot } from "@radix-ui/react-slot";

function InputRoot({ children }: InputRootProps){
    return(
        <div className='flex items-center gap-3 h-12 py-4 px-3 rounded bg-transparent border-solid border-2 border-purple-700 w-full '>
            {children}
        </div>
    );
}

function InputIcon({ children }: InputIconProps){
    return(
        <Slot className="w-6 h-6 text-gray-400">
            {children}
        </Slot>
    );
}

function IInput(props: InputProps){
    return(
        <input
            className="outline-none bg-transparent flex-1 text-gray-300 text-xs placeholder:text-gray-400"
            {...props}
        />
    );
}

export const Input = {
    Root: InputRoot,
    Input: IInput,
    Icon: InputIcon
}