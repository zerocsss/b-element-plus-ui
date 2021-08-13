declare const _default: import("vue").DefineComponent<{
    title: StringConstructor;
    data: ArrayConstructor;
    handleCurrentChange: FunctionConstructor;
}, {
    state: {
        pagination: {
            currentPage: number;
            total: number;
        };
        tableData: {
            date: string;
            name: string;
            address: string;
        }[];
    };
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    title?: unknown;
    data?: unknown;
    handleCurrentChange?: unknown;
} & {} & {
    title?: string | undefined;
    data?: unknown[] | undefined;
    handleCurrentChange?: Function | undefined;
}> & {}, {}>;
export default _default;
