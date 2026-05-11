import type { IncomingMessage, ServerResponse } from "http";
import { readProduct } from "../service/product.service";
import type { product } from "../types/product.type";
import { ParseBody } from "./utility/parseBody";

export const productController = async (
  req: IncomingMessage,
  res: ServerResponse,
) => {
  const url = req.url;
  const method = req.method;

  const urlParts = url?.split("/");
  const id =
    urlParts && urlParts[1] === "products" ? Number(urlParts[2]) : null;
  if (url === "/products" && method === "GET") {
    const products = readProduct();
    res.writeHead(200, { "content-type": "text/plain" });
    res.end(JSON.stringify({ massage: "this it productsss", data: products }));
  } else if (method === "GET" && id !== null) {
    const products = readProduct();
    const product = products.find((product: product) => product.id === id);
    res.writeHead(200, { "content-type": "text/plain" });
    res.end(JSON.stringify({ massage: "this is the product", data: product }));
  } else if (method === "POST" && url === "/products") {
    const body = await ParseBody(req);
    console.log(body);
    res.writeHead(200, { "content-type": "text/plain" });
    res.end(JSON.stringify({ 
      massage: "product created successfully", 
      //data: products 
    }));
  }
};
