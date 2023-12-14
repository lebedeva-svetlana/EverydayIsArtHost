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

export default TermsOfUsePart;