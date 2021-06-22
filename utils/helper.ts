export interface IconProps {
    size?: string | number,
    color?: string,
    rotate?: string | number
}

export interface ValueMap {
    [index: string]: string | number,
}

// Pre-defined size
// default size m - 18

export const valuesMap: ValueMap = {
    xs: 4,
    s: 8,
    base: 14,
    m: 18,
    l: 24,
    xl: 32,
    xxl: 48,
    xxxl: 64,
}