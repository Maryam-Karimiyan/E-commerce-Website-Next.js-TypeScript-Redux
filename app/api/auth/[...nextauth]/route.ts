// import NextAuth from "next-auth/next";
// export default NextAuth({

// })
import { authOptions } from "../../auth";
import NextAuth from "next-auth/next";

const authHandler=NextAuth(authOptions)
export { authHandler as GET, authHandler as POST };