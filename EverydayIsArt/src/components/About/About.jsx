import Logo from '../../assets/images/icon.svg';

import './About.scss';

function About() {
    return (
        <div className="about">
            <img src={Logo} alt="Логотип EverydayIsArt" className="about-logo"></img>
            <div className="about-text">
                <h2 className="about-title">Открыйвайте для себя новое c
                    <span className="about-project-name-green"> Everyday</span>
                    Is
                    <span className="about-project-name-green">Art</span>
                </h2>
                <p className="about-info">Выберите источник и получите случайную работу из его коллекции.</p>
            </div>
        </div>
    );
}

export default About;