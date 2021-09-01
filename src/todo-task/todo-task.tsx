import { Props, c, useProp, DOMEvent } from "atomico";
import { Checkbox } from "../checkbox/checkbox";
import tokens from "../tokens.css";
import style from "./todo-task.css";

/**
 * This component has a special behavior, since
 * use an input inside the shadowDOM, I have created this situation
 * so that you know how to emit events automatically
 * through the props
 */
function todoTask({ checked }: Props<typeof todoTask.props>) {
  const [, setChecked] = useProp("checked");
  return (
    <host shadowDom>
      <label>
        {/* 
        In this case we must reflect the checked state 
        to the component that nests it, in order to 
        synchronize the state of both the parent and the child 
        */}
        <Checkbox
          checked={checked}
          onchange={(event: DOMEvent<"change", HTMLInputElement>) => {
            setChecked(event.target.checked);
          }}
        />
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
    event: {
      /**
       * The native event of the form does not traverse the shadowDOM
       * thanks to the following configuration we will emit a second event
       * through the shadowDOM
       */
      type: "change",
      bubbles: true,
      composed: true,
    },
  },
};

todoTask.styles = [tokens, style];

export const TodoTask = c(todoTask);
