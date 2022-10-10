import styled from '@emotion/styled';
import { Form } from 'formik';

export const SearchbarBox = styled.div`
  width: 100%;
  padding-top: 20px;
  padding-bottom: 20px;
  margin-bottom: 10px;
  background-image:linear-gradient(to right, #10e6b0, #1f1c18);
`;

export const FormStyles = styled(Form)`
  position: relative;
  width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 20px;
  margin-right: auto;
`;

export const LabelStyles = styled.label`
  width: 100%;
`;

export const InputStyles = styled.input`
  width: 100%;
  height: 30px;
  padding-left: 40px;
  padding-right: 10px;
  background-color: #fff;
  border: 1px solid rgba(10, 255, 75, 0.3);
  border-radius: 4px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  outline: none;

  &:hover,
  &:focus {
    border-color: rgba(172, 250, 193 0.7);
  }
`;

export const ButtonBox = styled.button`
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  padding-top: 5px;
  width: 30px;
  height: 100%;
  background-color: white;
  border: transparent;

  &:hover,
  &:focus {
    background-color: rgba(10, 255, 75, 0.7);
  }
`;
