declare namespace JSX {
    interface IntrinsicElements {
        'l-quantum': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
            size?: string;
            speed?: string;
            color?: string;
        };
    }
}
