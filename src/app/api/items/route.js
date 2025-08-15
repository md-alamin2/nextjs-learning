import dbConnect from "@/lib/dbconnect.js"


export async function GET() {
  const data = await dbConnect("user").find().toArray();

  return Response.json({ data })
}
export async function POST(req) {

  const postedData = await req.json()
  const result = await dbConnect("user").insertOne(postedData);
 
  return Response.json(result)
}