import dbConnect from "@/lib/dbconnect.js"
import { revalidatePath } from "next/cache";


export async function GET() {
  const data = await dbConnect("user").find().toArray();

  return Response.json({ data })
}
// post api
export async function POST(req) {

  const postedData = await req.json()
  const result = await dbConnect("user").insertOne(postedData);
  revalidatePath("/users")
  return Response.json(result)
}