import styled from '@emotion/styled';
import { IImage } from '../../models';

const Advertisement = ({ src, alt, path }: IImage) => {
  return (
    <Link href={path}>
      <h3>[ AD ]</h3>
      <img src={src} alt={alt} />
    </Link>
  );
};

const Link = styled.a`
  width: 100%;
  background-color: white;
  display: block;
  padding: 8px 12px;
  border-radius: 4px;
  margin: 20px 0;
  display: flex;
  align-items: center;

  > h3 {
    padding: 0 4px 4px 0;
    font-size: 16px;
    color: rgb(51, 51, 51);
  }
`;

export default Advertisement;
