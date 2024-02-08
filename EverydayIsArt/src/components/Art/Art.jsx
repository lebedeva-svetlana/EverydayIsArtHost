import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import ArtContent from '../Art/ArtContent/ArtContent.jsx';
import NotFound from '../Common/NotFound/NotFound.jsx'
import ShareButton from '../Art/ShareButton/ShareButton.jsx';

import DefaultArt from '../../assets/defaultArt.json';

import './Art.scss';

function Art() {
    const [art, setArt] = useState(null);
    const [isArtShown, setIsArtShown] = useState(false);
    const [isDescNeed, setIsDescNeed] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const [hasError, setHasError] = useState(false);

    let { org } = useParams();

    let url = `${import.meta.env.VITE_URL_API}/random/${org}`;

    useEffect(() => {
        setArt(DefaultArt[org]);
        setIsArtShown(true);
    }, [org, url]);

    async function getNewArt() {
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

    function inverseDescNeed() {
        setIsDescNeed(!isDescNeed);
    }

    if (DefaultArt[org] == undefined) {
        return <NotFound></NotFound>;
    }

    return (
        <div className="art-panel" disabled={isLoading}>
            <div className="art-toolbar">
                <button type="button" onClick={getNewArt} disabled={isLoading} className="art-get">Исследовать</button>
                <label disabled={isLoading} className="art-checkbox-label">
                    <input type="checkbox" checked={isDescNeed} onChange={inverseDescNeed} disabled={isLoading} className="art-checkbox" />
                    Показать описание
                </label>
                {isArtShown && <ShareButton authors={art.author} title={art.title} date={art.date} url={art.sourceUrl} org={art.sourceUrlText}></ShareButton>}
            </div>
            {hasError && <p className="art-error">Произошла ошибка! Повторите попытку.</p>}
            {isArtShown && !hasError && <ArtContent artContent={art} isDescNeed={isDescNeed}></ArtContent>}
        </div>
    );
}

export default Art;