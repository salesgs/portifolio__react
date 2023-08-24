import './Header.css';
import './Responsive.css';
const Header = () => {
  return(
    <header>
      <div className='top'>
            <div className='top__navigation'>
              <h2><img src='./images/group.png'/> Gabriel</h2>    
              <nav className='top__nav'>
                  <ul className='top__list'>
                      <li className='iten'>Sobre mim</li>
                      <li className='iten'>Skills</li>
                      <li className='iten'>Hobbies</li>
                      <li className='iten'>Formação</li>
                      <li className='iten'>Projetos</li>
                      <li>Whatsapp</li>
                   </ul>
              </nav>
            </div>
      </div>
      <div className='sobre'>
        <div className='sobre__box'>
          <div className='sobre__text'>
            <h1>Olá meu nome é Gabriel Sales, sou Desenvolvedor Front-end Jr.</h1>
            <p>Sou estudante de Desenvolvimento de sistemas do Senai(BA), formado no programa de formação full-stack na Recode-Pro,e atualmente aluno da Oracle Next Education. Bom estou embusca da minha primeira oportunidade no mundo da tecnologia, espero e irie conseguir logo em breve.
            <div>
               <ul className='sobre__link-itens'>
                    <li>GitHub</li>
                    <li>LinkedIn</li>
                    <li>Instagram</li>
                    <li>Curriculo</li>
               </ul>
            </div>
            </p>
            
          </div>
          <div className='sobre__photo'>

          </div>
        </div>
      </div>
      </header>
  ) 
}
export default Header;