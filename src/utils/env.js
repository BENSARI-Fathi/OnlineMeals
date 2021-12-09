const liveHost = "https://us-central1-mealstogo-78c2c.cloudfunctions.net"
const localHost = "http://192.168.1.6:5001/mealstogo-78c2c/us-central1"
const isDev = process.env.NODE_ENV === "development"
export const host = isDev ? localHost : liveHost
export const isMock = isDev && "true"