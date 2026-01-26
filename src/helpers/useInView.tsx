import { useRef } from 'react';
import { useInView as useInViewFromFramer } from 'framer-motion'; // assuming you're using framer-motion's `useInView`

type UseInViewReturn = [React.MutableRefObject<HTMLDivElement | null>, boolean];

export default function useInView({ once = true }: { once?: boolean; margin?: string } = {}): UseInViewReturn
{
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInViewFromFramer(ref, {
        once: once
    });

    return [ref, isInView];
}
