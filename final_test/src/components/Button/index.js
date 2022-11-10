import styled from "styled-components";

const ContainedButton = styled.button`
  background: gray;
  border: solid 2px gray;
  padding: 16px 35px;
  color: #fff;
  border-radius: 4px;
  font-size: 16px;
  text-transform: uppercase;
  cursor: pointer;
  letter-spacing: 0.02rem;
  margin: 5px;
  font-weight: 700;
  &:active {
    transform: scale(0.98);
    &:hover {
      opacity: 0.8;
    }
  }
`;

const Button = (props) => {
  return (
    <ContainedButton
      type={props.type}
      className={`btn ${props.children}`}
      onClick={props.func}
    >
      {props.children}
    </ContainedButton>
  );
};

export default Button;
