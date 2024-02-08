import PropTypes from 'prop-types';

function TermsOfUsePart({ url, urlTitle, orgName }) {
    return (
        <li className="terms-li">
            <div className="terms-source-group">
                <h2 className="terms-source-title">{orgName}</h2>
                <p className="terms-source-p">
                    <a href={url} className="terms-source-link">{urlTitle}</a>
                </p>
            </div>
        </li>
    );
}

TermsOfUsePart.propTypes = {
    url: PropTypes.string,
    urlTitle: PropTypes.string,
    orgName: PropTypes.string
};

export default TermsOfUsePart;