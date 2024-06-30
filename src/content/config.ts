import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	type: 'content',
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		// Transform string to Date object
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
	}),
});

const cv = defineCollection({
	type: 'data',
	schema: z.object({
		profileImage: z.string().optional().nullable(),
		fullName: z.string(),
		workPosition: z.string(),
		githubLink: z.string().optional(),
		linkedInLink: z.string().optional(),
		cvDownloadLink: z.string().optional(),
		cellPhone: z.string().optional(),
		email: z.string().email(),
		address: z.string().optional(),
		birthDate: z.string(),
	})
})

export const collections = { blog, cv };
