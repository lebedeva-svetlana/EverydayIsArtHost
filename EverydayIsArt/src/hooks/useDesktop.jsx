import { useMediaQuery } from 'react-responsive';

export default function useDesktop() {
    let isDesktop = useMediaQuery({
        query: '(min-width: 980px)'
    });
    return isDesktop;
}