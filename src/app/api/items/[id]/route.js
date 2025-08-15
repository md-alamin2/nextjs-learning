import dbConnect from "@/lib/dbconnect";
import { ObjectId } from "mongodb";

export async function GET(req, { params }) {
  const { id } = await params;

  const data = await dbConnect("user").findOne({ _id: new ObjectId(id) });

  return Response.json({ data });
}
// patch api
export async function PATCH(req, { params }) {
  const { id } = await params;
  const query = { _id: new ObjectId(id) };
  const updatedData = await req.json();
  const result = await dbConnect("user").updateOne(query, {
    $set: updatedData,
  });

  return Response.json(result);
}
// delete api
export async function DELETE(req, { params }) {
  const { id } = await params;
  const query = { _id: new ObjectId(id) };
  const result = await dbConnect("user").deleteOne(query);
  return Response.json(result);
}
