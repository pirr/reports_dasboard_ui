export type Template = {
    id: number,
    name: string,
    query: string,
    filters: string[],
    joins: string[],
    columns: Column[],
}


export type Column = {
    name: string,
    type: string,
    alias: string | null,
}


export type ColumnOperations = {
    column: Column,
    operations: Operation[],
}


export enum Operation {
    DIV = 'DIV',
    ADD = 'ADD',
    SUB = 'SUB',
    MUL = 'MUL',
    CONCAT = 'CONCAT',
    CONCAT_WS = 'CONCAT_WS',
    MOD = 'MOD',
    POW = 'POW',
    ROUND = 'ROUND',
    CEIL = 'CEIL',
    FLOOR = 'FLOOR',
    ABS = 'ABS',
} 

