import { atom } from "recoil";

export const dark_Theme = atom({
    key: 'darkTheme', // unique ID (with respect to other atoms/selectors)
    default: localStorage.getItem("dark-theme") == "true", // default value (aka initial value)
  });

export const codeText = atom({
    key: 'codeText', // unique ID (with respect to other atoms/selectors)
    default: ``, // default value (aka initial value)
  });
export const codeTextHtml = atom({
    key: 'codeTextHtml', // unique ID (with respect to other atoms/selectors)
    default: ``, // default value (aka initial value)
  });
export const codeTextCss = atom({
    key: 'codeTextCss', // unique ID (with respect to other atoms/selectors)
    default: ``, // default value (aka initial value)
  });
export const codeTextJs = atom({
    key: 'codeTextJs', // unique ID (with respect to other atoms/selectors)
    default: ``, // default value (aka initial value)
  });