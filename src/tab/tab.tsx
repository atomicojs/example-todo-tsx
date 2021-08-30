import { c } from "atomico";
import tokens from "../tokens.css";
import style from "./tab.css";

function tab() {
  return (
    <host shadowDom>
      <button>
        <slot></slot>
      </button>
    </host>
  );
}

tab.props = {
  selected: {
    type: Boolean,
    reflect: true,
  },
};

tab.styles = [tokens, style];

export const Tab = c(tab);
