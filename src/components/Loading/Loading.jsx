import './Loading.css';

const Loading = () => {
    return (
        /* From Uiverse.io by G4b413l */ 
        <div className="loading-container">
            <div className="newtons-cradle">
                <div className="newtons-cradle__dot"></div>
                <div className="newtons-cradle__dot"></div>
                <div className="newtons-cradle__dot"></div>
                <div className="newtons-cradle__dot"></div>
            </div>
            <h3>Carregando...</h3>
        </div>
    );
}

export default Loading;