import Container from 'components/Container';
import { FooterWrapper, Wrapper, Copyright, Studios } from './Footer.styled';

function Footer() {
  return (
    <FooterWrapper>
      <Container>
        <Wrapper>
          <Copyright>©MOVIES 2022</Copyright>
          <Studios>КА</Studios>
        </Wrapper>
      </Container>
    </FooterWrapper>
  );
}

export default Footer;
