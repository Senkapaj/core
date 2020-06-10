export type DatabaseResult = {
    rowCount: number,
    rows: Array<Object>
}

export interface Database {
    query(query: String): Promise<DatabaseResult>;
}
