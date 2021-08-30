import { Props, c } from "atomico";
import { Checkbox } from "../checkbox/checkbox";
import tokens from "../tokens.css";
import style from "./todo-task.css";

function todoTask({ checked }: Props<typeof todoTask.props>) {
  return (
    <host shadowDom>
      <label>
        <Checkbox checked={checked} />
        <span>
          <slot></slot>
        </span>
      </label>
    </host>
  );
}

todoTask.props = {
  checked: {
    type: Boolean,
    reflect: true,
  },
};

todoTask.styles = [tokens, style];

export const TodoTask = c(todoTask);
