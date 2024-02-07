import './NotFound.scss';

function NotFound() {
    return (
        <div className="not-found">
            <h2 className="not-found-code">404</h2>
            <p className="not-found-message">Извините, страница, которую вы ищете, не существует.</p>
        </div>
    )
}

export default NotFound;