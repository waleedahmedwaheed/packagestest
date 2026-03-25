// src/auto-import-styles.ts
if (typeof document !== "undefined") {
  const id = "your-ui-lib-styles";
  if (!document.getElementById(id)) {
    const link = document.createElement("link");
    link.id = id;
    link.rel = "stylesheet";
    link.href = "styles.css";
    document.head.appendChild(link);
  }
}

// src/components/Button.tsx
import { jsx } from "react/jsx-runtime";
var Button = ({
  children,
  onClick,
  type = "button",
  className = "",
  disabled = false
}) => /* @__PURE__ */ jsx(
  "button",
  {
    type,
    onClick,
    disabled,
    className: `ui-py-2 ui-px-4 ui-rounded ui-bg-red-600 ui-text-white ui-border-none ui-font-semibold ui-transition-colors ui-duration-200
      hover:ui-bg-red-800
      disabled:ui-bg-red-300 disabled:ui-cursor-not-allowed
      ${className}`,
    children
  }
);
var Button_default = Button;
export {
  Button_default as Button
};
//# sourceMappingURL=index.mjs.map