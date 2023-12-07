import '../styles/TermsOfUse.scss';

function TermsOfUse() {
    return (
        <div className="terms">
            <ol className="terms-ol">
                <li className="terms-li">
                    <div className="terms-source-group">
                        <h2 className="terms-source-title">Государственная Третьяковская галерея</h2>
                        <p className="terms-source-p">
                            <a href="https://www.tretyakovgallery.ru/about/copirith/" className="terms-source-link">Использование материалов сайта</a>
                        </p>
                    </div>
                </li>
                <li className="terms-li">
                    <div className="terms-source-group">
                        <h2 className="terms-source-title">Музей Виктории и Альберта</h2>
                        <p className="terms-source-p">
                            <a href="https://www.vam.ac.uk/info/va-websites-terms-conditions" className="terms-source-link">V&A websites terms and conditions</a>
                        </p>
                    </div>
                </li>
            </ol>

        </div>
    );
}

export default TermsOfUse;