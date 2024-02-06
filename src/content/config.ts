import { defineCollection, z } from 'astro:content';

export const collections = {
	work: defineCollection({
		type: 'content',
		schema: z.object({
			title: z.string(),
			description: z.string(),
			publishDate: z.coerce.date(),
			tags: z.array(z.string()),
			img: z.string(),
			img_alt: z.string().optional(),
		}),
	}),
	experience: defineCollection({
		type: 'content',
		schema: z.object({
			type: z.string(),
			companyName: z.string(),
			companyUrl: z.string().url().optional(),
			jobTitle: z.string(),
			location: z.string(),
			startDate: z.any(),
			endDate: z.any(),
			tags: z.array(z.string()),
		}),
	})
};
