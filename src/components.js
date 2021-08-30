import { Input } from "./input/input";
import { Button } from "./button/button";
import { Checkbox } from "./checkbox/checkbox";
import { Tab } from "./tab/tab";
import { TodoHeader } from "./todo-header/todo-header";
import { TodoTask } from "./todo-task/todo-task";
import { TodoFooter } from "./todo-footer/todo-footer";
import { Todo } from "./todo/todo";

customElements.define("todo-input", Input);
customElements.define("todo-button", Button);
customElements.define("todo-checkbox", Checkbox);
customElements.define("todo-tab", Tab);
customElements.define("todo-header", TodoHeader);
customElements.define("todo-task", TodoTask);
customElements.define("todo-footer", TodoFooter);
customElements.define("todo-app", Todo);
