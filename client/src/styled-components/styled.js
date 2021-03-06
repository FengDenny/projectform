import styled from "styled-components";
import Modal, { BaseModalBackground } from "styled-react-modal";

// media queries

const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
};

export const MediaQueries = (key) => {
  return (style) => `@media (max-width: ${size[key]}){${style}}`;
};

// Hero
export const Hero = styled.div`
  //   background: var(--primary-color);
`;

export const HeroLogo = styled.h1`
  font-size: ${(props) => props.theme.fontSizeMD};
  color: var(--primary-color);
`;

export const HeroCard = styled.div`
  position: relative;
  margin-top: 80rem;
  padding: 10px 0;
  ${MediaQueries("tablet")`
  margin-top: 90rem;
  `}
`;
// Form
export const FormGroup = styled.form`
  display: flex;
  flex-direction: column;
  padding-left: 15px;
  margin-top: 10px;
`;

export const FormLabel = styled.label`
  position: relative;
  color: ${(props) => props.theme.color};
  font-size: ${(props) => props.theme.fontSizeSM};
  margin-left: ${(props) => props.theme.marginLeft};
  margin-top: ${(props) => props.theme.marginTop};
  width: ${(props) => props.theme.errorLabelWidth};
  top: ${(props) => props.theme.labelTop};
`;

export const FormInput = styled.input`
  width: ${(props) => props.theme.maxWidth};
  border: 1px solid var(--primary-color);
  border-radius: 4px;
  height: ${(props) => props.theme.formItemHeight};
  margin-top: ${(props) => props.theme.marginTopInput};
  padding: 4px;
  ::placeholder {
    padding: 4px;
  }
  :focus {
    outline: none;
  }
  // :invalid {
  //   border: 2px solid red;
  // }

  // :valid {
  //   border: 2px solid green;
  // }
`;

export const FormSelect = styled.select`
  width: ${(props) => props.theme.maxWidth};
  border: 1px solid var(--primary-color);
  border-radius: 4px;
  height: ${(props) => props.theme.formItemHeight};
  margin-top: 2px;
  background: #fff;
  cursor: pointer;
`;

export const SelectOptions = styled.option`
  font-size: 16px;
  color: var(--primary-color);
  cursor: pointer;
`;

export const FormButton = styled.button`
  // center button
  // display: block;
  // margin-left: auto;
  // margin-right: auto;
  border: 1px solid var(--primary-color);
  border-radius: 5px;
  background: var(--primary-color);
  width: ${(props) => props.theme.maxWidth};
  height: ${(props) => props.theme.formItemHeight};
  margin-top: 10px;
  cursor: pointer;
  box-shadow: 0 2px 5px 0 var(--content-overlay);
  color: #fff;
`;

export const FormSubmission = styled.div`
  position: relative;
  top: 40px;
`;

export const PreviewForm = styled.div`
  // position: absolute;
  // left: -50px;
  // top: 150px;
`;

// Modal
export const StyledModal = Modal.styled`
  position:relative;
  width: 43rem;
  height: 25rem;
  display: flex;
  flex-direction: column;
  background-color: white;
  opacity: ${(props) => props.opacity};
  transition : all 0.3s ease-in-out;
  border-radius:5px; 

  ${MediaQueries("tablet")`
  width: 35rem;
  `}
  ${MediaQueries("mobileL")`
  width: 25rem;
  `}
`;
export const StyledCloseModal = styled.span`
  position: absolute;
  top: -12px;
  right: 0;
  font-size: 50px;
  color: var(--light-gray-color);
  cursor: pointer;
  z-index: 100;
`;

export const FadingBackground = styled(BaseModalBackground)`
  opacity: ${(props) => props.opacity};
  transition: all 0.3s ease-in-out;
`;

// Form Result
export const ResultVerification = styled.div`
  background-color: #fff;
  width: 100%;
  height: 600px;
  margin-top: 1250px;
  position: relative;
`;

// Footer

export const FooterContainer = styled.footer`
  background-color: var(--bg-color);
  color: var(--primary-color);
  width: 100%;
  height: 150px;
  margin-top: 290px;
`;

// banner
export const BannerContainer = styled.div`
  background: var(--primary-color);
  height: 4rem;
  padding: 5px;
`;
