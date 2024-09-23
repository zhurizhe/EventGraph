export const configureWebpack = {
    output: {
        library: 'EventGraph',
        libraryTarget: 'umd',
        umdNamedDefine: true
    }
};
export const css = {
    extract: false // 组件库不需要单独提取 CSS
};
  