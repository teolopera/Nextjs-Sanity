import { createClient, groq } from 'next-sanity';
import {apiVersion, dataset, projectId} from '../env'
import { Project } from '@/types/Project';

export async function getProjects(): Promise<Project[]> {
    const client = createClient({
        projectId,
        dataset,
        apiVersion
    });

    return client.fetch(
        groq`*[_type == 'project']{
            _id,
            _createdAt,
            name,
            "slug": slug.current,
            "image": image.asset->url,
            url,
            content
        }`
    )
}