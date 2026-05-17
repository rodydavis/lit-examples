export const editor = {
  create: () => ({
    dispose: () => {},
    getValue: () => "",
    setValue: () => {},
    updateOptions: () => {},
    getModel: () => ({
      onDidChangeContent: () => ({ dispose: () => {} }),
    }),
  }),
  setTheme: () => {},
};

const monacoMock = {
  editor,
};

export default monacoMock;