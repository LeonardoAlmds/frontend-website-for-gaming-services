import './Footer.css'
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-container">
        <div className="footer-section sobre">
          <h3>SOBRE</h3>
          <p>No mundo dos jogos, o tempo é precioso e a evolução pode ser desafiadora. Pensando nisso, criamos o K+ Services, um software especializado na venda de serviços para gamers que buscam melhorar suas experiências e conquistar novos níveis.</p>
          <div className="social-icons">
            <a href=""><FaGithub /></a>
            <a href=""><FaInstagram /></a>
          </div>
        </div>
        <div className="content-footer-right">
          <div className="footer-section">
            <h3>ACESSO RÁPIDO</h3>
            <ul>
              <li><Link href="">Anunciar</Link></li>
              <li><Link href="">Categorias</Link></li>
              <li><Link href="">Sobre</Link></li>
            </ul>
          </div>
          <div className="newsletter">
            <h3>Inscreva-se para receber novidades!</h3>
            <form>
              <input type="email" id="email" name="email" placeholder="Digite seu e-mail" required />
              <button type="submit">Inscrever-se</button>
            </form>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        © K+ Services 2025 | TODOS OS DIREITOS RESERVADOS
      </div>
    </div>
  )
}

export default Footer