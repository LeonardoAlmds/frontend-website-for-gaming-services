import './Loading.css';

const Loading = () => {
    return (
        /* From Uiverse.io by G4b413l */ 
        <div className="loading-container">
            <div class="newtons-cradle">
                <div class="newtons-cradle__dot"></div>
                <div class="newtons-cradle__dot"></div>
                <div class="newtons-cradle__dot"></div>
                <div class="newtons-cradle__dot"></div>
            </div>
            <h3>Carregando...</h3>
        </div>
    );
}

export default Loading;