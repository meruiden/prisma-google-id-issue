import CustomLink from "@/components/custom-link"
import packageJSON from "../package.json"
import { auth } from "@/auth"

export default async function Index() {
  const session = await auth()

  if (!session?.user) {
    return (
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Please log in first.</h1>
      </div>
    )
  }

  return (
    <div className="space-y-2">
      <h2 className="text-3xl font-bold">Verify user ID incorrect format:</h2>
      <p>
        <strong>First, open prisma/dev.db in an SQlite viewer, or run "npx prisma studio" to view the User and Account tables.</strong>
      </p>
      <p>
        As you can see, the User ID is not the expected NanoID which is set to be the default ID for the user model in prisma/schema.prisma. All other models (Session, Account, VerificationToken) have the expected NanoID as ID.
      </p>
    </div>
  )
}
