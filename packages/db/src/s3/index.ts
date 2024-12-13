import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3';
import { getS3 } from '@repo/utils/env';

const s3Env = getS3();

const s3Client = new S3Client({
    endpoint: s3Env.S3_API_ENDPOINT,
    region: 'production',
    credentials: {
        accessKeyId: s3Env.S3_ACCESS_KEY,
        secretAccessKey: s3Env.S3_SECRET_ACCESS_KEY
    }
});


export const upload = async (key: string, file: File): Promise<boolean> => {
    const command = new PutObjectCommand({
        Bucket: s3Env.S3_BACKET_NAME,
        Key: key,
        Body: await file.arrayBuffer()
    });

    try {
        await s3Client.send(command);

        return true;
    } catch(__error__) {
        console.log(__error__)
        return false;
    }
};
