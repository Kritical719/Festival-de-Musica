import { GaleriaFotos } from "./GaleriaFotos";
const Galeria: React.FC = () => {
  const handleOnClickGal = (e: React.MouseEvent) => {
    const imagen = document.createElement("picture");
    imagen.innerHTML = `<img src=../src/assets/img/grande/${
      parseInt(e.currentTarget.id) + 1
    }.jpg loading='lazy' width='200' height='300' alt='imagen' />  `;

    //Crea el overlay con la imagen
    const overlay = document.createElement("DIV");
    overlay.appendChild(imagen);
    overlay.classList.add("overlay");
    overlay.onclick = function(){
      const body: HTMLBodyElement | null = document.querySelector("body");
      body?.classList.remove("fijar-body");
      overlay.remove();
    }

    //Añadir la foto
    const body: HTMLBodyElement | null = document.querySelector("body");
    body?.appendChild(overlay);
    body?.classList.add("fijar-body");

    //Cerrar Foto

    const cerrarFoto = document.createElement("P");
    cerrarFoto.textContent = "X";
    cerrarFoto.classList.add("btn-cerrar");
    cerrarFoto.onclick = function () {
      const body: HTMLBodyElement | null = document.querySelector("body");
      body?.classList.remove("fijar-body");
      overlay.remove();
    };
    overlay.appendChild(cerrarFoto);

    console.log(`mostrar ${parseInt(e.currentTarget.id) + 1}`);
  };
  return (
    <>
      <section id="galeria" className="galeria contenedor">
        <h3>Galería</h3>

        <ul className="galeria-imagenes">
          {Array.from({ length: 12 }, (_, i) => (
            <GaleriaFotos
              key={i}
              idImg={i.toString()}
              imagen={`../src/assets/img/thumb/${i + 1}.jpg`}
              onClickGal={handleOnClickGal}
            />
          ))}
        </ul>
      </section>
    </>
  );
};

export default Galeria;
