import { NextRequest, NextResponse } from "next/server";
import { ConnectDB } from "@/lib/config/db";
import { writeFile, unlink } from "fs/promises";
import BlogModel from "@/lib/models/BlogModel";

const LoadDB = async () => {
  await ConnectDB();
};

LoadDB();

// GET all blogs or single blog
export async function GET(request: NextRequest) {
  const blogId = request.nextUrl.searchParams.get("id");

  if (blogId) {
    const blog = await BlogModel.findById(blogId);
    return NextResponse.json(blog);
  }

  const blogs = await BlogModel.find({});
  return NextResponse.json({ blogs });
}

// POST - create blog
export async function POST(request: NextRequest) {
  const formData = await request.formData();

  const image = formData.get("image") as File | null;
  if (!image) {
    return NextResponse.json(
      { success: false, message: "Image missing" },
      { status: 400 }
    );
  }

  const timeStamp = Date.now();
  const imageBytes = await image.arrayBuffer();
  const buffer = Buffer.from(imageBytes);

  const path = `./public/${timeStamp}_${image.name}`;
  await writeFile(path, buffer);

  const imgUrl = `/${timeStamp}_${image.name}`;

  const blogData = {
    title: formData.get("title") as string,
    description: formData.get("description") as string,
    category: formData.get("category") as string,
    author: formData.get("author") as string,
    image: imgUrl,
    authorImg: formData.get("authorImg") as string,
  };

  await BlogModel.create(blogData);

  return NextResponse.json({ success: true, msg: "Blog Added" });
}

// DELETE - delete blog
export async function DELETE(request: NextRequest) {
  const id = request.nextUrl.searchParams.get("id");

  if (!id) {
    return NextResponse.json({ msg: "Missing blog id" }, { status: 400 });
  }

  const blog = await BlogModel.findById(id);
  if (!blog) {
    return NextResponse.json({ msg: "Blog not found" }, { status: 404 });
  }

  // Remove file from public folder
  await unlink(`./public${blog.image}`);

  // Delete entry from DB
  await BlogModel.findByIdAndDelete(id);

  return NextResponse.json({ msg: "Blog Deleted" });
}
