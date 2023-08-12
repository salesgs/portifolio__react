import './Header.css'   //estilizando componente
const Header = ()=>{
  return(
    <header className="header">
      <nav className="header__navigation">
        <div className="header__name">
          <h3>Gabriel Sales</h3>
        </div>
        <div className="header__nav">
            <ul className="list">
               <li className="list-item"><a href=''>Sobre Min</a></li>
               <li className="list-item"><a href=''>Skils</a></li>
               <li className="list-item"><a href=''>Hobbies</a></li>
               <li className="list-item"><a href=''>Formação</a></li>
               <li className="list-item"><a href=''>Projetos</a></li>
               <li><a href=''>Whatsapp</a></li>
            </ul>
        </div>
      </nav>
    </header>
  )
}
export default Header; //exportando para usar em outro local