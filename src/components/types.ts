export type Template = {
    id: number,
    name: string,
    query: string,
    filters: string[],
    joins: string[],
    columns: string[],
}


export type Column = {
    name: string,
    type: string,
    alias: string | null,
}