interface TemplateProps {
    fileName: string;
}

function iconIndexTemplate ({ fileName }:TemplateProps) {
  const indexContent = `export { default as Eos${fileName} } from './${fileName}';
`
  return (indexContent)
}

export default iconIndexTemplate
