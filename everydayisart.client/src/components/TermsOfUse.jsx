import TermsOfUsePart from './TermsOfUsePart.jsx';

import '../styles/TermsOfUse.scss';

function TermsOfUse() {
    return (
        <div className="terms">
            <ol className="terms-ol">
                <TermsOfUsePart url="https://www.tretyakovgallery.ru/about/copirith/" urlTitle="Использование материалов сайта" orgName="Государственная Третьяковская галерея"></TermsOfUsePart>
                <TermsOfUsePart url="https://www.vam.ac.uk/info/va-websites-terms-conditions" urlTitle="V&A websites terms and conditions" orgName="Музей Виктории и Альберта"></TermsOfUsePart>
            </ol>
        </div>
    );
}

export default TermsOfUse;