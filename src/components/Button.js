import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export default function Button(props) {
  const { children, className, href, onClick, style, color } = props;

  return href.startsWith('http') ? (
    <ExtLinkButton
      href={href}
      className={className}
      onClick={onClick}
      style={style}
      color={color}
    >
      {children}
    </ExtLinkButton>
  ) : (
    <IntLinkButton
      to={href}
      className={className}
      onClick={onClick}
      style={style}
      color={color}
    >
      {children}
    </IntLinkButton>
  );
}

const baseStyles = css`
  background-color: ${(props) => (props.color ? props.color[0] : '#fff')};
  border-radius: 38px;
  font-size: 16px;
  font-family: Gilroy;
  line-height: 19px;
  letter-spacing: 1.6px;
  color: ${(props) => (props.color ? props.color[1] : '#be9ea4')};
  text-decoration: none;
  text-transform: uppercase;
  padding: 28px 33px 26px 33px;
  display: inline-block;
`;

const IntLinkButton = styled(Link)`
  ${baseStyles}
`;

const ExtLinkButton = styled.a`
  ${baseStyles}
`;
