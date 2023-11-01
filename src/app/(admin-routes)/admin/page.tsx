import { nextAuthOptions } from "@/app/api/auth/[...nextauth]/route"
import { getServerSession } from "next-auth";

export default async function Admin() {

  const session = await getServerSession(nextAuthOptions);

  return (
    <div>
      <h1>Admin {session?.user.firstName}</h1>
    </div>
  )
}