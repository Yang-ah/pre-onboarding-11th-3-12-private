import { Link } from 'react-router-dom';
import { IImage } from '../../models';

const Advertisement = ({ src, alt, path }: IImage) => {
  return (
    <Link to={path} target="_blank">
      <img src={src} alt={alt} />
    </Link>
  );
};

export default Advertisement;
