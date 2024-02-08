import PropTypes from 'prop-types';

function ArtDescription({ description }) {
    return (
        <>{Object.values(description).map(group => (
            <div className="art-description-group">
                {Object.values(group).map(par => (
                    Object.values(par).map(p => <p className="art-par">{p}</p>)
                ))}
            </div>
        ))}</>
    );
}

ArtDescription.propTypes = {
    description: PropTypes.object
};

export default ArtDescription;