/**
 * Vercel Blob Storage utility functions
 */

import { put, del, list } from '@vercel/blob';

/**
 * Upload a file to Vercel Blob Storage
 * @param file - The file to upload
 * @param pathname - The path where the file should be stored
 * @returns Promise with the uploaded file information
 */
export const uploadToBlob = async (file: File, pathname: string) => {
  try {
    const blob = await put(pathname, file, {
      access: 'public',
    });
    return blob;
  } catch (error) {
    console.error('Error uploading to blob:', error);
    throw error;
  }
};

/**
 * Delete a file from Vercel Blob Storage
 * @param url - The URL of the file to delete
 * @returns Promise with the deletion result
 */
export const deleteFromBlob = async (url: string) => {
  try {
    await del(url);
    return true;
  } catch (error) {
    console.error('Error deleting from blob:', error);
    throw error;
  }
};

/**
 * List all files in a specific folder
 * @param folder - The folder path to list
 * @returns Promise with the list of files
 */
export const listBlobFiles = async (folder: string) => {
  try {
    const { blobs } = await list({ prefix: folder });
    return blobs;
  } catch (error) {
    console.error('Error listing blob files:', error);
    throw error;
  }
};

/**
 * Generates a blob URL for a given filename
 * @param filename - The filename (e.g., 'about_photo.png', 'artwork/Aterro_I.jpg')
 * @returns The full blob URL
 * @throws Error if NEXT_PUBLIC_BLOB_BASE_URL is not configured
 */
export const getBlobUrl = (filename: string): string => {
  const blobBaseUrl = process.env.NEXT_PUBLIC_BLOB_BASE_URL;
  if (!blobBaseUrl) {
    throw new Error(
      'NEXT_PUBLIC_BLOB_BASE_URL environment variable is not configured. Please add it to your .env.local file or Vercel project settings.'
    );
  }
  return `${blobBaseUrl}/${filename}`;
};
