export interface CopyCreatorOptions {
    from: string[];
    toDir: string;
}

export interface IconGenerateScript {
    type: string;
    from: string;
}

export interface TemplateProps {
    fileName: string;
    data: string;
}
