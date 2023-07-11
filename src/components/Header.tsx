const Header = () => {


  function navegacionFija(){
    const barra = document.querySelector('.header');
    const sobreFestival = document.querySelector('.sobre-festival');
    const body = document.querySelector('body');


    window.addEventListener('scroll', function(){
     

      if(sobreFestival?.getBoundingClientRect().bottom < 0){
        barra?.classList.add('fijo');
        body?.classList.add('body-scroll');
      }else {
        barra?.classList.remove('fijo');
        body?.classList.remove('body-scroll');
      }
    })
  }
navegacionFija();








  function scrollNav(){
    
    const enlaces = document.querySelectorAll('.navegacion-principal');

      enlaces.forEach(enlace =>{
      enlace.addEventListener('click', function(e){
        e.preventDefault();
        const seccionScroll = e.target.attributes.href.value;
        const seccion = document.querySelector(seccionScroll);
        seccion.scrollIntoView({behavior: "smooth"});

      })  
    })
  }



 
  return (
    <>
    

    <header className="header">
        <div className="contenedor contenido-header">
            <h1>Rock & EDM Festival</h1>

            <nav onScroll={navegacionFija} onClick={scrollNav} className="navegacion-principal">
                <a href="#lineup" >Line Up</a>
                <a href="#galeria" >Galería</a>
                <a href="#boletos" >Boletos</a>
            </nav>


        </div>
    </header>
    

    </>
  )
}

export default Header;