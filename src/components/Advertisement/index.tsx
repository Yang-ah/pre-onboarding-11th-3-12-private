import styled from '@emotion/styled';
import { IImage } from '../../models';

const Advertisement = ({ src, alt, path }: IImage) => {
  return (
    <Link href={path}>
      <img src={src} alt={alt} />
    </Link>
  );
};

const Link = styled.a`
  width: 100%;
  display: block;
  padding: 4px;
  margin: 20px 0;
`;

export default Advertisement;
