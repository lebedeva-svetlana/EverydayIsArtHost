function ArtDescription({ description }) {
    let groups = Object.values(description).map(group => (
        <div className="art-description-group">
            {Object.values(group).map(par => (
                Object.values(par).map(p => <p className="art-par">{p}</p>)
            ))}
        </div>
    ));
    return (
        <>{groups}</>
    );
}

export default ArtDescription;