import { c, useEvent } from "atomico";
import { Input } from "../input/input";
import { Button } from "../button/button";
import tokens from "../tokens.css";
import style from "./todo-header.css";
import { Task } from "../todo/types";

let id = Date.now();

function todoHeader() {
  const dispatchNewTask = useEvent<Task>("NewTask", {
    bubbles: true,
    composed: true,
  });

  return (
    <host shadowDom>
      <form
        class="header"
        onsubmit={(event) => {
          event.preventDefault();
          const { target } = event;
          const {
            input: { value },
          } = target;
          if (value.trim()) {
            id++;
            dispatchNewTask({
              id,
              value,
              checked: false,
            });
            target.reset();
          }
        }}
      >
        <Input placeholder="Todo" required name="input"></Input>
        <Button
          style={{
            "--radius": `0 var(--token--box-radius) 0 var(--token--box-radius)`,
          }}
        ></Button>
      </form>
    </host>
  );
}

todoHeader.styles = [tokens, style];

export const TodoHeader = c(todoHeader);
