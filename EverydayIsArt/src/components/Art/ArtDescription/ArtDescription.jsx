import PropTypes from 'prop-types';

function ArtDescription({ description }) {
    return (
        <>{Object.values(description).map(p => (
            <div className="art-description-group">
                <p className="art-par">{p}</p>
            </div>
        ))}</>
    );
}

ArtDescription.propTypes = {
    description: PropTypes.object
};

export default ArtDescription;