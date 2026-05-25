export function emitEvent(event:string,payload:any){ const io=(globalThis as any)._io; if(io) io.emit(event,payload); }
