export declare class DbService {
    constructor();
    sync(): void;
    getTrucks(): Promise<unknown>;
    getUsers(): Promise<import("sequelize/types").Model<any, any>[]>;
    createUser(body: any): Promise<import("sequelize/types").Model<any, any>>;
    getRoleTypes(): Promise<import("sequelize/types").Model<any, any>[]>;
}
export declare const dbService: DbService;
//# sourceMappingURL=dbService.d.ts.map