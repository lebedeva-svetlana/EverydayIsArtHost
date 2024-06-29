import PropTypes from 'prop-types';

import Icon from '../../../assets/images/share.svg';

import './ShareButton.scss';

function ShareButton({ authors, title, date, org, url }) {
    function getShareTextToClipboard() {
        let text = '';
        if (title) {
            text += title;
        }
        if (date) {
            text += text.length != 0 ? `. ${date}` : date;
        }
        if (authors) {
            if (text.length != 0) {
                text += '\n\n';
            }

            text += authors.join('. ');
        }
        if (text.length != 0) {
            text += '\n\n';
        }
        text += `${org}: ${url}\n\nНайдено с помощью EverydayIsArt`

        navigator.clipboard.writeText(text).then(() => alert('Скопировано!'));
    }

    return (
        <button onClick={getShareTextToClipboard} className="share-art">
            <img src={Icon} className="share-art-icon"></img>
        </button>
    );
}

ShareButton.propTypes = {
    authors: PropTypes.array,
    title: PropTypes.string,
    date: PropTypes.string,
    org: PropTypes.string,
    url: PropTypes.string
};

export default ShareButton;