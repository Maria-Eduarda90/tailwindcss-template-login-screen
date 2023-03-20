import { InputHTMLAttributes, ReactNode } from "react"

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export interface InputRootProps {
    children: ReactNode;
}

export interface InputIconProps {
    children: ReactNode;
}