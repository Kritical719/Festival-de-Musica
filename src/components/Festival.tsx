import vocalista from "../assets/img/imagen_vocalista.webp"
const Festival = () => {
  return (
    <>
    <section className="contenedor sobre-festival">
        <div className="imagen">
            <picture>
            <source srcSet={vocalista} type="image/webp"/>

            

            <img loading="lazy" src={vocalista} alt="" />
            </picture>

          
        
        </div>
        <div className="contenido-festival">
        <h2>Rock & EDM Festival</h2>
        <p className="fecha">Julio 2023, Quilpué, Chile</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis sit enim perspiciatis exercitationem nemo provident, quod mollitia, consequatur nesciunt eaque autem at maxime, accusantium beatae? Error nulla totam fugit odit.</p>
        </div>
    </section>
    </>
  )
}

export default Festival