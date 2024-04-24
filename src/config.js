export const JWT_SECRET = process.env['JWT_SECRET']

if(!JWT_SECRET){
    throw new Error("JWR_SECRET environment variable must be initialized")
}