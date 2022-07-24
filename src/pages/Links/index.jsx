import { Ellipse } from "../../assets/Ellipse";
import { Button } from "../../components/Button";
import {Container} from "./style"

export function Links() {
  return(
    <Container>

      <header>
        <Ellipse />
        <img src="https://github.com/Joanderson337.png" alt="" />
        <span>@Joanderson</span>
      </header>

      <Button href="https://github.com/Joanderson337" title="🐱 Github" />
      <Button href="https://www.linkedin.com/in/joandersonsilva337/" title="🧑‍💻 Linkedin" />
      <Button title="💼 Portfólio"/>
      <span>Entre em contato</span>
    </Container>
  )
}
