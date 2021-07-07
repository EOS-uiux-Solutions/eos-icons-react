interface TemplateProps {
    fileName: string;
}

function iconIndexTemplate ({ fileName }:TemplateProps) {
  const indexContent = `export { default as EOS_${fileName} } from './${fileName}';
`
  return (indexContent)
}

export default iconIndexTemplate
