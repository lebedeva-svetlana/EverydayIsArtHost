import { useEffect, useState } from 'react';
import ArtContent from './ArtContent.jsx';
import '../styles/Art.scss';
import DefaultArt from '../assets/defaultArt.json';
import Logo from '../assets/images/icon.svg';

function Art({ url, org }) {
    const [art, setArt] = useState(null);
    const [isArtShown, setIsArtShown] = useState(false);
    const [isDescNeed, setIsDescNeed] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const [hasError, setHasError] = useState(false);

    useEffect(() => {
        setArt(DefaultArt[org]);
        setIsArtShown(true);
    }, [org]);

    async function handleClick() {
        setHasError(false);
        setIsLoading(true);
        let response = await fetch(url);
        if (!response.ok) {
            setHasError(true);
            setIsLoading(false);
        }
        setArt(await response.json());
        setIsLoading(false);
    }

    function handleChange() {
        setIsDescNeed(!isDescNeed);
    }

    return (
        <div className="art-panel" disabled={isLoading}>
            <div className="art-toolbar">
                <button type="button" onClick={handleClick} disabled={isLoading} className="art-get">Исследовать</button>
                <label disabled={isLoading} className="art-checkbox-label">
                    <input type="checkbox" checked={isDescNeed} onChange={handleChange} disabled={isLoading} className="art-checkbox" />
                    Показать описание
                </label>
            </div>
            {hasError && <p className="art-error">Произошла ошибка! Повторите попытку.</p>}
            {isArtShown && !hasError && <ArtContent artContent={art} isDescNeed={isDescNeed}></ArtContent>}
        </div>
    );
}

export default Art;