import { IoBugSharp } from "react-icons/io5";
import "./Error.css";

const Error = () => {
    return (
        <div className="error-container">
            <IoBugSharp className="error-icon" />
            <h1>Perdão, algo deu errado!</h1>
            <p>Por favor, tente novamente mais tarde.</p>
        </div>
    );
}

export default Error;