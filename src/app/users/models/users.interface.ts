

export interface Users {
    data: Array<Data>;
    page: number;
    per_page: number;
    total: number;
    total_pages: number;
}

export interface Data {
    avatar?: string;
    email?: string;
    first_name?: string;
    id?: number;
    last_name?: string;
}
