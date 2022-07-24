import { Container } from "./style";

export function Button({ title, href, ...rest }) {
  return (
    <Container type="button" {...rest}>
      <a href={href}>{title}</a>
    </Container>
  );
}
