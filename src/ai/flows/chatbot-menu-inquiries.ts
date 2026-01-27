'use server';

/**
 * @fileOverview A chatbot for answering menu inquiries.
 *
 * - chatbotMenuInquiries - A function that handles the chatbot menu inquiry process.
 * - ChatbotMenuInquiriesInput - The input type for the chatbotMenuInquiries function.
 * - ChatbotMenuInquiriesOutput - The return type for the chatbotMenuInquiries function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ChatbotMenuInquiriesInputSchema = z.object({
  query: z.string().describe('The user query about the menu.'),
});
export type ChatbotMenuInquiriesInput = z.infer<typeof ChatbotMenuInquiriesInputSchema>;

const ChatbotMenuInquiriesOutputSchema = z.object({
  answer: z.string().describe('The answer to the user query about the menu.'),
});
export type ChatbotMenuInquiriesOutput = z.infer<typeof ChatbotMenuInquiriesOutputSchema>;

export async function chatbotMenuInquiries(input: ChatbotMenuInquiriesInput): Promise<ChatbotMenuInquiriesOutput> {
  return chatbotMenuInquiriesFlow(input);
}

const prompt = ai.definePrompt({
  name: 'chatbotMenuInquiriesPrompt',
  input: {schema: ChatbotMenuInquiriesInputSchema},
  output: {schema: ChatbotMenuInquiriesOutputSchema},
  prompt: `You are a chatbot that answers questions about the menu of Saucy's Southern BBQ & Cuisine.

  Use the following menu information to answer the user's question:

  Menu:
  - Pulled Pork Sandwich: Slow-smoked pulled pork, served on a toasted bun with your choice of sauce. ($9.99)
  - Pulled Pork Plate: A generous portion of our slow-smoked pulled pork, served with two sides and cornbread. ($15.99)
  - BBQ Ribs: Tender, slow-smoked BBQ ribs, slathered in our signature BBQ sauce. Served with two sides and cornbread. (Half rack: $14.99, Full rack: $24.99)
  - Smoked Brisket Platter: Sliced smoked brisket, served with two sides and cornbread. ($16.99)
  - Fried Chicken Platter: Crispy fried chicken, seasoned with our special blend of spices. Served with two sides and cornbread. (2 pieces: $14.99, 4 pieces: $19.99)
  
  Sides:
  - Green Chili Mac and Cheese: Creamy mac and cheese with a kick of green chili. ($5.99)
  - Coleslaw: Fresh coleslaw with our tangy dressing. ($3.99)
  - Cornbread: Sweet and moist cornbread. ($2.99)
  - Sweet Potato Fries: Crispy and seasoned with cinnamon and sugar. ($5.99)
  - Baked Beans: Hearty baked beans with a sweet and smoky flavor. ($3.99)
  - Grilled Teriyaki Parmesan Corn: Grilled corn on the cob with a teriyaki glaze and parmesan cheese. ($4.99)
  - Great Grannys Green Beans: Classic-style green beans. ($3.99)
  - Fried Okra: Crispy fried okra. ($4.99)
  - Potato Salad: Creamy and tangy potato salad. ($3.99)
  - Fries: Classic crispy french fries. ($3.99)

  Question: {{{query}}}

  Answer:`,
});

const chatbotMenuInquiriesFlow = ai.defineFlow(
  {
    name: 'chatbotMenuInquiriesFlow',
    inputSchema: ChatbotMenuInquiriesInputSchema,
    outputSchema: ChatbotMenuInquiriesOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
