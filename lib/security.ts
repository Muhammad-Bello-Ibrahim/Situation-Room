const bucket = new Map<string,{count:number;time:number}>();
export function rateLimit(key:string, limit=60, windowMs=60000){ const now=Date.now(); const item=bucket.get(key); if(!item||now-item.time>windowMs){bucket.set(key,{count:1,time:now}); return true;} if(item.count>=limit) return false; item.count++; return true; }
export function secureHeaders(){ return {"X-Content-Type-Options":"nosniff","X-Frame-Options":"DENY","Referrer-Policy":"strict-origin-when-cross-origin","Content-Security-Policy":"default-src 'self'; img-src 'self' data: https:; media-src 'self' https:;"}; }
