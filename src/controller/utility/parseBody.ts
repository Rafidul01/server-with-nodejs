import type { IncomingMessage } from "http";

export const ParseBody = (req: IncomingMessage) => {
    return new Promise((resolve, regect)=>{
        let body = "";
        req.on("data",(chunk)=>{
            body += chunk;
        })
        req.on("end",()=>{
            try {
                resolve(JSON.parse(body));
            } catch (error) {
                regect(error);
            }
        })

    })
    
}