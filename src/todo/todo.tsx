import { DOMEvent, c, useProp } from "atomico";
import { Tab } from "../tab/tab";
import { TodoHeader } from "../todo-header/todo-header";
import { TodoFooter } from "../todo-footer/todo-footer";
import { TodoTask } from "../todo-task/todo-task";
import tokens from "../tokens.css";
import style from "./todo.css";
import { Task, View } from "../todo/types";

function todo() {
  const [task, setTask] = useProp<Task[]>("task");
  const [view, setView] = useProp<View>("view");

  return (
    <host shadowDom>
      <TodoHeader
        onNewTask={(event: CustomEvent<Task>) => {
          setTask((tasks) => [...tasks, event.detail]);
        }}
      ></TodoHeader>
      <div class="tasks">
        <div class="list">
          {task
            .filter((task) =>
              view == "complete"
                ? task.checked
                : view == "active"
                ? !task.checked
                : true
            )
            .map(({ value, checked, id }) => (
              <TodoTask
                checked={checked}
                onchange={(event: DOMEvent<"change", HTMLInputElement>) => {
                  const { target } = event;
                  setTask((task) =>
                    task.map((task) =>
                      id === task.id
                        ? { ...task, checked: target.checked }
                        : task
                    )
                  );
                }}
              >
                {value}
              </TodoTask>
            ))}
        </div>
      </div>
      <TodoFooter class="footer">
        <Tab selected={view == "all"} onclick={() => setView("all")}>
          All
        </Tab>
        <Tab selected={view == "active"} onclick={() => setView("active")}>
          Active
        </Tab>
        <Tab selected={view == "complete"} onclick={() => setView("complete")}>
          Complete
        </Tab>
      </TodoFooter>
    </host>
  );
}

todo.props = {
  view: {
    type: String,
    value: "all",
  },
  task: {
    type: Array,
    value: (): Task[] => [],
  },
};

todo.styles = [tokens, style];

export const Todo = c(todo);
