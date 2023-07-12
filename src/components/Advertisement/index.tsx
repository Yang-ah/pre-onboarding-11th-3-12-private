import { Link } from 'react-router-dom';

interface IImage {
  src: string;
  alt: string;
  path: string;
}

const Advertisement = ({ src, alt, path }: IImage) => {
  return (
    <Link to={path} target="_blank">
      <img src={src} alt={alt} />
    </Link>
  );
};

export default Advertisement;
