import { createServer, Server, ServerRequest, ServerResponse } from "http";

export class App {
    private readonly httpServer: Server;
    constructor() {
        this.httpServer = createServer(this.onRequest);
    }

    public run(): void {
        this.httpServer.listen(81);
    }

    private onRequest = (request: ServerRequest, response: ServerResponse): void => {        
        response.writeHead(200, {"Content-Type": "application/json"});
        response.end("Hello World!");
    }
}