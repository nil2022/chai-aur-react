// Appwrite configuration
import urlConfig from "../config/url.config";
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service {
    client = new Client();
    databases;
    bucket;

    constructor() {
        this.client
            .setEndpoint(urlConfig.appwriteUrl)
            .setProject(urlConfig.appwriteProjectId);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async createPost({title, slug, content, featuredImage, status, userId}) {
        try {
            const createdPost = await this.databases.createDocument(
                urlConfig.appwriteDatabaseId,
                urlConfig.appwriteCollectionId,
                slug, // can also be ID.unique()
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId
                }
            )
            console.log('Post created: ', createdPost);
            return createdPost;
        } catch (error) {
            console.log('Appwrite service :: createPost :: error: ', error);
        }
    }

    async updatePost(slug, {title, content, featuredImage, status}) {
        try {
            await this.databases.updateDocument(
                urlConfig.appwriteDatabaseId,
                urlConfig.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status
                }
            )
            console.log('Post updated: ', slug);
        } catch (error) {
            console.log('Appwrite service :: updatePost :: error: ', error);
        }
    }

    async deletePost(slug) {
        try {
            await this.databases.deleteDocument(slug)
            console.log('Post deleted: ', slug);
            return true;
        } catch (error) {
            console.log('Appwrite service :: delatePost :: error: ', error);
            return false;
        }
    }

    async getPost(slug) {
        try {
            const fetchOnePost = await this.databases.getDocument(
                urlConfig.appwriteDatabaseId,
                urlConfig.appwriteCollectionId,
                slug
            )
            console.log('Post fetched: ', fetchOnePost);
            return fetchOnePost;
        } catch (error) {
            console.log('Appwrite service :: getDocument :: error: ', error);
            return false;
        }
    }

    async getPosts(queries = [Query.equal("status", "active")]) {
        try {
            await this.databases.listDocuments(
                urlConfig.appwriteDatabaseId,
                urlConfig.appwriteCollectionId,
                queries
            )
        } catch (error) {
            console.log('Appwrite service :: getPosts :: error: ', error);
            return false;
        }
    }

    // file upload service

    async uploadFile(file) {
        try {
            const fileUploadResponse = await this.bucket.createFile(
                urlConfig.appwriteBucketId,
                ID.unique(),
                file
            )
            console.log('File uploaded: ', fileUploadResponse);
            return fileUploadResponse;
        } catch (error) {
            console.log('Appwrite service :: uploadFile :: error: ', error);
            return false;
        }
    }

    async deleteFile(fileId) {
        try {
            console.log('File deleted: ', fileId);
            return await this.bucket.deleteFile(
                urlConfig.appwriteBucketId,
                fileId
            );
        } catch (error) {
            console.log('Appwrite service :: deleteFile :: error: ', error);
            return false;
        }
    }

    getFilePreview(fileId) {
        return this.bucket.getFilePreview(
            urlConfig.appwriteBucketId,
            fileId
        )
    }
}

const service = new Service();

export default service;
