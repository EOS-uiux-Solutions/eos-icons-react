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

export interface NameProps {
    iconName: string;
    type: string;
}

export interface CommonTemplateProps {
    fileName: string;
    filled: string;
    outlined: string;
}

export interface StoryBookProps {
    fileName: string;
    outlined: string;
    filled: string;
}
