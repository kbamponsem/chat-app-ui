export default defineNuxtPlugin(() => {
    if (process.server) return
  
    const wsProtocol = window.location.protocol === "https:" ? "wss:" : "ws:"
    console.log(process.env.WS_ADDRESS)
    const wsAddress = "localhost:4850/ws"
    let socket = new WebSocket(`${wsProtocol}//${wsAddress}`)
  
    return {
      provide: {
        socket,
      },
    }
  })