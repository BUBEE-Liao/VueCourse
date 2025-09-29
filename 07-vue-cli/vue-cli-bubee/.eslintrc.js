module.exports = {
    root: true,
    env: {
      node: true,
    },
    extends: [
      "eslint:recommended",
      "plugin:vue/vue3-recommended"   // 🔑 確定是 Vue 3
    ],
    parserOptions: {
      parser: "@babel/eslint-parser"
    },
    rules: {
      "vue/no-multiple-template-root": "off"   // 可以不寫，vue3 本來就允許
    }
  }
  