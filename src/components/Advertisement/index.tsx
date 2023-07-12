interface IImage {
  src: string;
  alt: string;
}

const Advertisement = ({ src, alt }: IImage) => {
  return (
    <div>
      <img src={src} alt={alt} />
    </div>
  );
};

export default Advertisement;
