'use server';

/**
 * @fileOverview A Genkit flow that proactively informs users about current promotions or special offers relevant to their interests or past orders.
 *
 * - smartPromotions - A function that retrieves relevant promotions for a user.
 * - SmartPromotionsInput - The input type for the smartPromotions function.
 * - SmartPromotionsOutput - The return type for the smartPromotions function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SmartPromotionsInputSchema = z.object({
  userId: z.string().describe('The ID of the user.'),
  interests: z.string().optional().describe('The user\u2019s interests, if known.'),
  pastOrders: z.string().optional().describe('The user\u2019s past orders, if available.'),
});
export type SmartPromotionsInput = z.infer<typeof SmartPromotionsInputSchema>;

const SmartPromotionsOutputSchema = z.object({
  promotionMessage: z.string().describe('A message informing the user about relevant promotions.'),
});
export type SmartPromotionsOutput = z.infer<typeof SmartPromotionsOutputSchema>;

export async function smartPromotions(input: SmartPromotionsInput): Promise<SmartPromotionsOutput> {
  return smartPromotionsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'smartPromotionsPrompt',
  input: {schema: SmartPromotionsInputSchema},
  output: {schema: SmartPromotionsOutputSchema},
  prompt: `You are a helpful chatbot for Saucy's Southern BBQ & Cuisine.

You are tasked with informing the user about current promotions or special offers relevant to their interests or past orders.

Use the following information to tailor the promotion message:

User ID: {{{userId}}}
User Interests: {{#if interests}}{{{interests}}}{{else}}Unknown{{/if}}
Past Orders: {{#if pastOrders}}{{{pastOrders}}}{{else}}None{{/if}}

Current Promotions: Buy one get one 50% off all BBQ sandwiches on Tuesdays, Free delivery for orders over $50, 10% off catering orders for new customers

Craft a concise and engaging message to inform the user about the most relevant promotion.
`,
});

const smartPromotionsFlow = ai.defineFlow(
  {
    name: 'smartPromotionsFlow',
    inputSchema: SmartPromotionsInputSchema,
    outputSchema: SmartPromotionsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
