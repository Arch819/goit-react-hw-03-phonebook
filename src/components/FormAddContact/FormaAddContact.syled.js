import { Form } from 'formik';
import { styled } from 'styled-components';

export const FormStyled = styled(Form)({
  width: '400px',
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
  marginBottom: '20px',
});

export const ButtonSubmit = styled('button')({
  margin: '10px auto 0',
  borderRadius: '15px',
  position: 'relative',
  width: '150px',
  height: '40px',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  overflow: 'hidden',
  border: '1px solid #34974d',
  backgroundColor: '#3aa856',

  '&, & span': {
    transition: 'transform 0.3s, background 0.3s',
  },

  '&:hover': {
    background: '#34974d',
  },
  '&:active': {
    border: '1px solid #2e8644',
  },
});

export const ButtonText = styled('span')({
  transform: 'translateX(20px)',
  color: '#fff',
  fontWeight: '600',

  'button:hover &': {
    color: 'transparent',
  },
});

export const ButtonIcon = styled('span')({
  position: 'absolute',
  transform: 'translateX(104px)',
  height: '100%',
  width: '39px',
  backgroundColor: '#34974d',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  '& svg': {
    width: '30px',
    strokeWidth: 2,
    stroke: '#fff',
  },

  'button:hover &': {
    width: '148px',
    transform: 'translateX(-4px)',
  },
});

export const InputBox = styled('div')({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  
})
export const ErrorMessageStyled = styled('div')({
  display: 'inline-block',
  fontSize: '12px',
  color: '#955',
});
