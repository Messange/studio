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
  
  Plates (Served with your choice of two sides and cornbread. Entree choices for plates are Wings, Ribs, and Hot Links):
  - One Entree Plate: Your choice of one entree. ($17.99)
  - Two Entree Plate: Your choice of two entrees. ($23.99)
  - Three Entree Plate: Your choice of three entrees. ($28.99)

  Entrees (A La Carte):
  - Wings (6pc): 6 pieces of our famous wings. Flavors: Smoky BBQ, Spicy Buffalo, Garlic Parmesan. ($10.99)
  - Hot Links: Spicy sausage links, smoked to perfection. ($8.99)
  - Pulled Pork Sandwich: Slow-smoked pulled pork on a toasted bun. ($9.99)
  - Pulled Pork (A La Carte): A half-pound of our slow-smoked pulled pork. ($10.99)
  - BBQ Ribs (A La Carte): Tender, slow-smoked BBQ ribs. (Half rack: $11.99, Full rack: $21.99)
  - Smoked Brisket (A La Carte): A half-pound of sliced smoked brisket. ($12.99)
  - Fried Chicken (A La Carte): Crispy fried chicken. (2 pieces: $9.99, 4 pieces: $14.99)

  Sides:
  - Green Chili Mac and Cheese: Creamy mac and cheese with a kick of green chili. ($5.99)
  - Coleslaw: Fresh coleslaw with our tangy dressing. ($3.99)
  - Cornbread: Sweet and moist cornbread. ($2.99)
  - Sweet Potato Fries: Crispy and seasoned with cinnamon and sugar. ($5.99)
  - Baked Beans: Hearty baked beans with a sweet and smoky flavor. ($3.99)
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
