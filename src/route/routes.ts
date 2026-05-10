import type { IncomingMessage } from "http";
import { productController } from "../controller/products.controller";


export const Handelroutes = (req: IncomingMessage, res) => {
  const url = req.url;
  const method = req.method;
  if (url === "/" && method == "GET") {
    // console.log("this is root router");
    res.writeHead(200, { "content-type": "text/plain" });
    res.end(JSON.stringify({ massage: "this it root route" }));
  } else if (url?.startsWith("/products")) {
    productController(req,res);
  } else {
    res.writeHead(400, { "content-type": "text/plain" });
    res.end(JSON.stringify({ massage: "error 404 page not found" }));
  }
};
