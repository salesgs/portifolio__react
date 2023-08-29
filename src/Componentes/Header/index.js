import './Header.css';
import './Responsive.css';
const Header = () => {
  return(
    <header> 
      
      <div className='top'>
            <div className='top__navigation'>
              <h2>
                <img src='./images/group.png'/> Gabriel
                  <div className='photo'></div>
                </h2>
            
              <nav className='top__nav'>
                  <ul className='top__list'>
                      <li className='iten'><a href='#sobre'>Sobre mim</a></li>
                      <li className='iten'><a href=''>Skills</a></li>
                      <li className='iten'><a href=''>Hobbies</a></li>
                      <li className='iten'><a href=''>Formação</a></li>
                      <li className='iten'><a href=''>Projetos</a> </li>
                      <li><a href='https://wa.me/55+71988375554'>Whatsapp</a></li>   
                   </ul>
            
              </nav>
            </div>
      </div>
              
      <div className='sobre'>
        <div className='sobre__box'>
        <div className='photo'></div>
          <div className='sobre__text'>
            <h1>Olá meu nome é Gabriel Sales, sou Desenvolvedor Front-end Jr.</h1>
            <p>Sou estudante de Desenvolvimento de sistemas do Senai(BA), formado no programa de formação full-stack na Recode-Pro,e atualmente aluno da Oracle Next Education. Bom estou embusca da minha primeira oportunidade no mundo da tecnologia, espero e irie conseguir logo em breve.
            <div>
               <ul className='sobre__link-itens'>
                    <li><a href="https://github.com/salesgs">GitHub</a></li>
                    <li><a href="https://www.linkedin.com/in/gabriel-salesgs">LinkedIn</a></li>
                    <li><a href="https://www.instagram.com/gabrielsalesjr/">Instagram</a></li>
                    <li><a href="#">Curriculum</a></li>
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