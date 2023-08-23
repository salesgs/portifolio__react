import './Header.css';
const Header =()=>{
return(
  <header>
    <nav className='header'>
      <div className='header__name'>
          <h3>Gabriel Sales</h3>
          <div id='photo'></div>
    
      </div>
      <div className='header__nav'>
        <ul className='header__nav-list'>
            <li className='nav-item'><a href="">Sobre mim</a></li>
            <li className='nav-item'><a href="">Skills</a></li> 
            <li className='nav-item'><a href="">Hobbies</a></li>
            <li className='nav-item'><a href="">Formação</a></li>
            <li className='nav-item'><a href="">Projetos</a></li>
            <li><a href="">Whatssap</a></li>
        </ul>
      </div>
    </nav>
    <section className='section__sobre'>
        <div className='section__text'>
          <h1 className='section__title'>Olá meu nome é Gabriel Sales sou desenvolvedor Front-and Jr</h1>
          <p>
            Eu sou estudante de Desenvolvimento de Sistemas no Senai (Ba), também formado no programa de formação full-stack da Recode-Pro, atualmente faço parte do programa de formação da Oracle Next Education em parceria com Alura.
          </p>
          <ul className='navPerfil'>
            <li><a href=''>GitHub</a></li>
            <li><a href=''>LinkedIn</a></li>
            <li><a href=''>Instagram</a></li>
            <li><a href=''>Curriculo</a></li>
         </ul>

        </div>
        <div className='section__photo'>
          <div className='photo'>
            {/* <img src='./images/gabriel.jpeg'/> */}
          </div>
        </div>
    </section>
     </header>
     
  )  
}
export default Header;