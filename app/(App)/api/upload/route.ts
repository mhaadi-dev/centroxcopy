import { NextResponse } from "next/server";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { v4 as uuidv4 } from "uuid";

const s3 = new S3Client({
  region: process.env.AWS_REGION!,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
});

export async function POST(req: Request) {
  try {
    const { folderName, fileData } = await req.json();
    
    if (!folderName || !fileData || !Array.isArray(fileData)) {
      return NextResponse.json({ error: "Invalid request format" }, { status: 400 });
    }

    const urls = await Promise.all(
      fileData.map(async (file) => {
        const fileKey = `${folderName}/${uuidv4()}-${file.name}`;
        
        // Convert base64 to buffer
        let buffer;
        try {
          buffer = Buffer.from(file.data, 'base64');
        } catch (error) {
          console.error('Base64 conversion error:', error);
          throw new Error('Invalid file data');
        }

        const uploadParams = {
          Bucket: process.env.S3_BUCKET_NAME!,
          Key: fileKey,
          Body: buffer,
          ContentType: 'image/*'
          // Removed ACL parameter
        };

        try {
          await s3.send(new PutObjectCommand(uploadParams));
        } catch (error) {
          console.error('S3 upload error:', error);
          throw error;
        }

        return {
          fileName: file.name,
          url: `https://${process.env.S3_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/${fileKey}`,
        };
      })
    );

    return NextResponse.json({ urls }, { status: 200 });
  } catch (error) {
    console.error("Upload Error:", error);
    return NextResponse.json({ error: "Error uploading files" }, { status: 500 });
  }
}
// export  async function POST(
//     req:Request
//   ): Promise<string> {
//     const s3 = await this.initializeS3();

//     const fileName = `${directory}/${uuidv4()}`;

//     const params = {
//       Bucket: `${process.env.BUCKET_ID}`,
//       Key: fileName,
//       Body: file.buffer,
//     };

//     await s3.upload(params).promise();

//     const imageUrl = `https://${process.env.BUCKET_ID}.s3.${process.env.REGION}.amazonaws.com/files/${fileName}`;

//     return imageUrl;
//   }


