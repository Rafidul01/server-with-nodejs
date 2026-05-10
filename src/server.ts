import { createServer, IncomingMessage, Server } from "http";
import { url } from "inspector";
import { json } from "stream/consumers";
import { Handelroutes } from "./route/routes";

const server: Server = createServer((req: IncomingMessage, res) => {
  //console.log(req.url);
  Handelroutes(req,res);

});

server.listen(3000, () => {
  console.log("server is running on port 3000");
});
