import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import GithubProvider from "next-auth/providers/github";


const handler = NextAuth({
  providers: [
    // Add your authentication providers here
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "Please enter username" },
        password: { label: "Password", type: "Please enter password" }
      },
      async authorize(credentials, req) {
        // Add your authentication logic here
        // For example, you can check the credentials against a database
        // and return the user object if the credentials are valid
        console.log("credentials: ", credentials);
        console.log("req: ", req);
        // 这边可以发送fetch请求，验证用户信息
        if (credentials?.username !== "admin" || credentials?.password !== "admin") {
          return null;
        }
        const user = { id: "1", name: "John Doe", email: "EMAIL" };
        return user;
      },
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID || '',
      clientSecret: process.env.GITHUB_SECRET || '',
    }),
  ],
})

export { handler as GET, handler as POST }