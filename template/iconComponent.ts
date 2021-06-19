interface templateProps {
    fileName: string;
    data: string;
}

function componentTemplate ({fileName,data}:templateProps) {
    const render = `
    // GENERATE BY ./scripts/index.ts

    import * as React from 'react';

    interface iconProps {
    height?: string | number | undefined,
    width?: string | number | undefined,
    color?: string | undefined,
    rotate?: string | undefined
    }

    function Eos${fileName}({height = 36, width = 36, color = "black", rotate = "0"}: iconProps) {
    return (
        ${data}
    );
    };


    export default Eos${fileName};
    `;
    return (render)
}

export default componentTemplate;