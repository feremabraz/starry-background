import { NextResponse } from "next/server";
import sharp from "sharp";

export async function GET(request: Request) {
	const { searchParams } = new URL(request.url);
	const imageUrl = searchParams.get("url");

	if (!imageUrl) {
		return new NextResponse("Missing image URL", { status: 400 });
	}

	try {
		const response = await fetch(imageUrl);
		const arrayBuffer = await response.arrayBuffer();
		const buffer = Buffer.from(arrayBuffer);

		const processedImage = await sharp(buffer).jpeg({ quality: 90 }).toBuffer();

		return new NextResponse(processedImage, {
			headers: {
				"Content-Type": "image/jpeg",
				"Cache-Control": "public, max-age=31536000",
			},
		});
	} catch (error) {
		console.error("Error processing TIFF:", error);
		return new NextResponse("Error processing image", { status: 500 });
	}
}
