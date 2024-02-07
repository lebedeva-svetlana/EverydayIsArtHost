import TermsOfUsePart from './TermsOfUsePart/TermsOfUsePart.jsx';

import './TermsOfUse.scss';

function TermsOfUse() {
    return (
        <div className="terms">
            <ol className="terms-ol">
                <TermsOfUsePart url="https://www.tretyakovgallery.ru/about/copirith/" urlTitle="Использование материалов сайта" orgName="Государственная Третьяковская галерея"></TermsOfUsePart>
                <TermsOfUsePart url="https://www.vam.ac.uk/info/va-websites-terms-conditions" urlTitle="V&A websites terms and conditions" orgName="Музей Виктории и Альберта"></TermsOfUsePart>
                <TermsOfUsePart url="https://www.metmuseum.org/policies/terms-and-conditions" urlTitle="Terms and Conditions / Terms of Use" orgName="Метрополитен-музей"></TermsOfUsePart>
            </ol>
        </div>
    );
}

export default TermsOfUse;