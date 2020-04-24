import typescript from "rollup-plugin-typescript2";
import commonjs from "rollup-plugin-commonjs";
import external from "rollup-plugin-peer-deps-external";
import resolve from "rollup-plugin-node-resolve";
import { terser } from "rollup-plugin-terser";

import pkg from "./package.json";

export default {
  input: "src/index.ts",
  output: [
    {
      file: pkg.main,
      format: "cjs",
      exports: "named",
    },
    {
      file: pkg.module,
      format: "es",
      exports: "named",
    },
  ],
  plugins: [
    external(),
    resolve(),
    typescript({
      rollupCommonJSResolveHack: true,
      exclude: ["**/__tests__/**"],
      clean: true,
    }),
    commonjs({
      include: ["node_modules/**"],
      exclude: ["**/*.stories.tsx"],
      namedExports: {
        "node_modules/react/react.js": [
          "Children",
          "Component",
          "PropTypes",
          "createElement",
        ],
        "node_modules/react-is/index.js": [
          "typeOf",
          "isElement",
          "isValidElementType",
          "ForwardRef",
        ],
        "node_modules/react-dom/index.js": ["render"],
      },
    }),
    terser(),
  ],
};
