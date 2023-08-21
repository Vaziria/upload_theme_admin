export interface CascaderOption {
    value: number;
    label?: React.ReactNode;
    disabled?: boolean;
    children?: CascaderOption[];
    isLeaf?: boolean;
}