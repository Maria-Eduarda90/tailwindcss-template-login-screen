interface TextProps {
    size?: 'sm' | 'md' | 'lg';
}

export function Text({ size = "md" }: TextProps){
    return(
        <span className="text-gray-300 font-sans">Hello world</span>
    );
}