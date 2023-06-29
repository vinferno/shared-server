/// <reference types="node" />
import { Server, Socket } from "socket.io";
import { Server as HttpServer } from "http";
import { DbService } from "../db/dbService";
export declare class ServerSocketService {
    io: Server;
    db: DbService;
    data: any;
    constructor(server: HttpServer);
    setupConnect(): void;
    setupDisconnect(socket: Socket): void;
    saveSocket(socket: Socket): void;
    deleteSocket(socket: Socket): void;
    setupGetTrucks(socket: Socket): void;
}
//# sourceMappingURL=serverSocketService.d.ts.map