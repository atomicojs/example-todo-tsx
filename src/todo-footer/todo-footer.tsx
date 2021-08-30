import { c } from "atomico";
import tokens from "../tokens.css";
import style from "./todo-footer.css";

function todoFooter() {
  return (
    <host shadowDom>
      <slot></slot>
    </host>
  );
}

todoFooter.styles = [tokens, style];

export const TodoFooter = c(todoFooter);
