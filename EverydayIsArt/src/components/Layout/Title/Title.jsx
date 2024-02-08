import { Link } from "react-router-dom";

function Title() {
    return (
        <Link to="/" className="header-link">
            <h1 className="header-title">
                Everyday
                <span className="header-title-is">Is</span>
                Art
            </h1>
        </Link>
    );
}

export default Title;