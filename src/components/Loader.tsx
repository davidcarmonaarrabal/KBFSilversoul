import { useEffect } from 'react';
import type { } from 'ldrs';

declare module "react" {
    // eslint-disable-next-line @typescript-eslint/no-namespace
    namespace JSX {
        interface IntrinsicElements {
            'l-quantum': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
                size?: string;
                speed?: string;
                color?: string;
            };
        }
    }
}

export default function Loader() {
    useEffect(() => {
        async function getLoader() {
            const { quantum } = await import('ldrs')
            quantum.register()
        }
        getLoader()
    }, [])
    return <l-quantum size='100' speed='2' color='black'></l-quantum>
}