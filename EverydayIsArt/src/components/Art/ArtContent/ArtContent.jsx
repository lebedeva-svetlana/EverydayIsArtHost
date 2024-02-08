import PropTypes from 'prop-types';

import ArtDescription from '../ArtDescription/ArtDescription.jsx';

import './ArtContent.scss';

function ArtContent({ artContent, isDescNeed }) {
    return (
        <div className="art">
            <img className="art-image" src={artContent.imageUrl} alt={artContent.title} />
            <div className="art-text">
                <h2 className="art-title">{artContent.title}</h2>
                <div className="art-description-group">
                    <p className="art-par art-date">{artContent.date}</p>
                </div>
                <div className="art-description-group">
                    {artContent.author && Object.keys(artContent.author).map(a => <p className="art-par" key={artContent.author[a]}>{artContent.author[a]}</p>)}
                </div>
                {artContent.description && isDescNeed && <ArtDescription description={artContent.description}></ArtDescription>}
                <p className="art-par art-source">
                    <a href={artContent.sourceUrl} className="a-base">{artContent.sourceUrlText}</a>
                </p>
            </div>
        </div>
    );
}

ArtContent.propTypes = {
    artContent: PropTypes.object,
    isDescNeed: PropTypes.bool
};

export default ArtContent;