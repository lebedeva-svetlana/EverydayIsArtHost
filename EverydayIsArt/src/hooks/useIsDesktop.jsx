import { useMediaQuery } from 'react-responsive';

export default function useIsDesktop() {
    let isDesktop = useMediaQuery({
        query: '(min-width: 980px)'
    });
    return isDesktop;
}