import { Props, c, useProp } from "atomico";
import tokens from "../tokens.css";
import style from "./input.css";
import { useRender } from "@atomico/hooks/use-render";
import { useFormListener } from "@atomico/hooks/use-form";

const svg = ({ color, width }) => (
  <svg height="2" width={width}>
    <line
      x1="0"
      y1="50%"
      x2="100%"
      y2="50%"
      stroke={color}
      stroke-linecap="round"
      stroke-width="2"
      stroke-dasharray="0.1 5"
    />
  </svg>
);

function input({ value = "", ...props }: Props<typeof input.props>) {
  const [, setValue] = useProp<string>("value");
  /**
   * useFormListener will allow us to listen to the reset
   * event in order to clear the status of our form.
   */
  useFormListener("reset", () => setValue(""));
  /**
   * useRender allows you to run a render on the lightDOM,
   * the goal of this is to render the input to reflect
   * the events that you manage from your webcomponent to the form
   * that you associate this component.
   */
  useRender(() => (
    <input
      slot="input"
      type="text"
      value={value}
      {...props}
      oninput={(event) => setValue(event.target.value)}
    />
  ));

  return (
    <host shadowDom>
      <div class="box">
        <slot name="input"></slot>
        {svg({ color: "var(--token--secondary-light-2)", width: "100%" })}
        {svg({
          color: "var(--token--primary)",
          width: 1 + value.replace(/\s+/g, "").length * 0.7 + "em",
        })}
      </div>
    </host>
  );
}

input.props = {
  value: String,
  name: String,
  required: Boolean,
  placeholder: String,
};

input.styles = [tokens, style];

export const Input = c(input);
