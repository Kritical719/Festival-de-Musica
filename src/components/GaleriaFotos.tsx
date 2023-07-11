interface PropsGaleriaFotos {
  imagen: string;
  onClickGal: (e: React.MouseEvent<HTMLImageElement>) => void;
  idImg: string
}

export const GaleriaFotos: React.FC<PropsGaleriaFotos> = ({
  imagen,
  onClickGal,
  idImg
}) => {
  return (
    <>
       
        <img src={imagen} alt="" id={idImg} onClick={onClickGal} />
      
    </>
  );
};
