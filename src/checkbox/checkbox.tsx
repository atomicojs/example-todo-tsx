import { Props, c, useProp } from "atomico";
import tokens from "../tokens.css";
import style from "./checkbox.css";
import { useRender } from "@atomico/hooks/use-render";

function checkbox(props: Props<typeof checkbox.props>) {
  const [, setChecked] = useProp<boolean>("checked");

  /**
   * useRender allows you to run a render on the lightDOM,
   * the goal of this is to render the input to reflect
   * the events that you manage from your webcomponent to the form
   * that you associate this component.
   */
  useRender(() => (
    <input
      slot="input"
      type="checkbox"
      {...props}
      onchange={(event) => {
        setChecked(event.target.checked);
      }}
    />
  ));

  return (
    <host shadowDom>
      <slot name="input"></slot>
      <div class="icon">
        <slot name="checked">
          <svg width="12.728" height="12.728" viewBox="0 0 12.728 12.728">
            <path
              d="M326.657-927.172a1,1,0,0,1-1-1,1,1,0,0,1,1-1h3v-9a1,1,0,0,1,1-1,1,1,0,0,1,1,1v10a1,1,0,0,1-1,1Z"
              transform="translate(-885.884 433.82) rotate(45)"
            />
          </svg>
        </slot>
      </div>
    </host>
  );
}

checkbox.props = {
  checked: {
    type: Boolean,
    reflect: true,
  },
};

checkbox.styles = [tokens, style];

export const Checkbox = c(checkbox);
