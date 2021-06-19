interface templateProps {
    fileName: string;
}

function iconIndexTemplate ({fileName}:templateProps) {
    const indexContent = `export { default as Eos${fileName} } from './${fileName}';
`;
    return (indexContent)
}

export default iconIndexTemplate;