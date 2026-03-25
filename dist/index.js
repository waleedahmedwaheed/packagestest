var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  Button: () => Button_default
});
module.exports = __toCommonJS(src_exports);

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
var import_jsx_runtime = require("react/jsx-runtime");
var Button = ({
  children,
  onClick,
  type = "button",
  className = "",
  disabled = false
}) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Button
});
//# sourceMappingURL=index.js.map