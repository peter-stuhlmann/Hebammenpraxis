import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export default function Button(props) {
  const { children, className, href, onClick, style, color, type, disabled } =
    props;

  if (href && href.startsWith('http')) {
    return (
      <ExtLinkButton
        href={href}
        className={className}
        onClick={onClick}
        style={style}
        color={color}
        disabled={disabled}
      >
        {children}
      </ExtLinkButton>
    );
  } else if (href && !href.startsWith('http')) {
    return (
      <IntLinkButton
        to={href}
        className={className}
        onClick={onClick}
        style={style}
        color={color}
        disabled={disabled}
      >
        {children}
      </IntLinkButton>
    );
  } else {
    return (
      <NoHrefButton
        className={className}
        onClick={onClick}
        style={style}
        color={color}
        type={type}
        disabled={disabled}
      >
        {children}
      </NoHrefButton>
    );
  }
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
  border: none;
  cursor: pointer;

  ${(props) =>
    props.disabled &&
    `
      background-color: #bfbfbf;
      color: #a4a4a4;
      pointer-events: none;
      cursor: default;
      user-select: none;
  `};
`;

const IntLinkButton = styled(Link)`
  ${baseStyles}
`;

const ExtLinkButton = styled.a`
  ${baseStyles}
`;

const NoHrefButton = styled.button`
  ${baseStyles}
`;
