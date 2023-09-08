import { styled } from "styled-components";

export const Section = styled('section')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '10px',
  '& h2': {
    marginBottom: '20px',
    textShadow: '1px 2px 0 #505050, -1px 3px 0 #505050',
    letterSpacing: '0.9px',
  },
});
