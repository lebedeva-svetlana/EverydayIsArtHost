import Icon from '../assets/images/share.svg';

import '../styles/ShareButton.scss';

function ShareButton({ authors, title, date, org, url }) {
    function handleClick() {
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
        text += `${org}: ${url}\n\nНайдено с помощью EverydaIsArt`

        navigator.clipboard.writeText(text).then(() => alert('Скопировано!'));
    }

    return (
        <button onClick={handleClick} className="share-art">
            <img src={Icon} className="share-art-icon"></img>
        </button >
    );
}

export default ShareButton;