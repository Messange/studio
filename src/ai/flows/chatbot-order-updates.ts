'use server';

/**
 * @fileOverview Provides order status updates via chatbot.
 *
 * - checkOrderStatus - A function that checks the order status for a given order ID.
 * - CheckOrderStatusInput - The input type for the checkOrderStatus function.
 * - CheckOrderStatusOutput - The return type for the checkOrderStatus function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const CheckOrderStatusInputSchema = z.object({
  orderId: z.string().describe('The ID of the order to check.'),
});

export type CheckOrderStatusInput = z.infer<typeof CheckOrderStatusInputSchema>;

const CheckOrderStatusOutputSchema = z.object({
  status: z.string().describe('The current status of the order.'),
  estimatedDeliveryTime: z
    .string()
    .optional()
    .describe('The estimated delivery time of the order, if applicable.'),
});

export type CheckOrderStatusOutput = z.infer<typeof CheckOrderStatusOutputSchema>;

export async function checkOrderStatus(
  input: CheckOrderStatusInput
): Promise<CheckOrderStatusOutput> {
  return checkOrderStatusFlow(input);
}

const prompt = ai.definePrompt({
  name: 'checkOrderStatusPrompt',
  input: {schema: CheckOrderStatusInputSchema},
  output: {schema: CheckOrderStatusOutputSchema},
  prompt: `You are a chatbot assisting customers with their order status.

  Given the order ID, you will check the order status and provide the customer with the current status and estimated delivery time if available.

  Order ID: {{{orderId}}}

  Respond in a clear and concise manner.`,
});

const checkOrderStatusFlow = ai.defineFlow(
  {
    name: 'checkOrderStatusFlow',
    inputSchema: CheckOrderStatusInputSchema,
    outputSchema: CheckOrderStatusOutputSchema,
  },
  async input => {
    // In a real application, you would fetch the order status from a database or external API.
    // This is a placeholder implementation that returns a canned response.
    const orderStatuses = {
      '123': {
        status: 'Confirmed',
        estimatedDeliveryTime: '30 minutes',
      },
      '456': {
        status: 'Out for delivery',
        estimatedDeliveryTime: '15 minutes',
      },
      '789': {
        status: 'Delivered',
      },
      '101': {
        status: 'Preparing',
      },
    };

    const orderId = input.orderId;
    const orderStatus = orderStatuses[orderId] || {
      status: 'Order not found',
    };

    const {output} = await prompt({
      ...input,
    });

    return {
      status: orderStatus.status,
      estimatedDeliveryTime: orderStatus.estimatedDeliveryTime,
    };
  }
);
