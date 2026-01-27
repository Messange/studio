"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useState } from "react";
import { Trash2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { menuItems } from "@/lib/data";

const orderItemSchema = z.object({
  itemId: z.string().min(1, "Please select an item."),
  quantity: z.coerce.number().min(1, "Quantity must be at least 1."),
  sides: z.array(z.string()).max(2, "You can select up to 2 sides.").optional(),
});

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  phone: z.string().min(10, "Please enter a valid phone number."),
  items: z.array(orderItemSchema).min(1, "Please add at least one item to your order."),
});

type OrderItem = {
  id: number;
};

const sideItems = menuItems.filter(item => item.category === 'side');

export default function OrderSection() {
  const { toast } = useToast();
  const [orderItems, setOrderItems] = useState<OrderItem[]>([{ id: 1 }]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      items: [{ itemId: "", quantity: 1, sides: [] }],
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Order Submitted!",
      description: "Thank you! We've received your order and will start preparing it right away.",
    });
    form.reset();
    setOrderItems([{ id: 1 }]);
  }
  
  const addNewItem = () => {
    const newId = (orderItems[orderItems.length - 1]?.id || 0) + 1;
    setOrderItems([...orderItems, { id: newId }]);
    const currentItems = form.getValues("items");
    form.setValue("items", [...currentItems, { itemId: "", quantity: 1, sides: [] }]);
  };

  const removeItem = (index: number) => {
    if (orderItems.length <= 1) return;
    const newOrderItems = orderItems.filter((_, i) => i !== index);
    setOrderItems(newOrderItems);
    const currentItems = form.getValues("items");
    const newFormItems = currentItems.filter((_, i) => i !== index);
    form.setValue("items", newFormItems);
  };

  return (
    <div className="space-y-6 max-w-3xl mx-auto">
       <div className="text-center">
        <h2 className="text-3xl font-bold font-headline">Order Online</h2>
        <p className="text-lg text-muted-foreground mt-2">
          Get your favorite BBQ fix without the wait.
        </p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="grid md:grid-cols-2 gap-8">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="John Doe" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <Input placeholder="(555) 555-5555" type="tel" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-medium">Your Order</h3>
            {orderItems.map((orderItem, index) => {
               const selectedItemId = form.watch(`items.${index}.itemId`);
               const selectedItem = menuItems.find(item => item.id.toString() === selectedItemId);
              
              return (
              <div key={orderItem.id} className="space-y-4 rounded-lg border p-4">
                 <div className="flex items-end gap-4">
                  <FormField
                    control={form.control}
                    name={`items.${index}.itemId`}
                    render={({ field }) => (
                      <FormItem className="flex-1">
                        <FormLabel>Menu Item</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a dish" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {menuItems.map(item => (
                              <SelectItem key={item.id} value={item.id.toString()}>{item.name}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name={`items.${index}.quantity`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Quantity</FormLabel>
                        <FormControl>
                          <Input type="number" min="1" {...field} className="w-24"/>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button variant="ghost" size="icon" onClick={() => removeItem(index)} disabled={orderItems.length <= 1} aria-label="Remove item">
                    <Trash2 className="h-4 w-4 text-destructive" />
                  </Button>
                </div>

                {selectedItem?.isPlate && (
                  <FormField
                    control={form.control}
                    name={`items.${index}.sides`}
                    render={({ field }) => (
                      <FormItem className="space-y-3">
                        <div>
                          <FormLabel className="text-base">Side Options</FormLabel>
                          <FormDescription>
                            (Optional) Select up to 2 sides for your plate.
                          </FormDescription>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          {sideItems.map((side) => (
                              <FormField
                                key={side.id}
                                control={form.control}
                                name={`items.${index}.sides`}
                                render={({ field: sideField }) => (
                                  <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                                    <FormControl>
                                      <Checkbox
                                        checked={sideField.value?.includes(side.id.toString())}
                                        onCheckedChange={(checked) => {
                                          const currentSides = sideField.value || [];
                                          if (checked) {
                                            if (currentSides.length < 2) {
                                              sideField.onChange([...currentSides, side.id.toString()]);
                                            }
                                          } else {
                                            sideField.onChange(currentSides.filter((value) => value !== side.id.toString()));
                                          }
                                        }}
                                        disabled={!sideField.value?.includes(side.id.toString()) && sideField.value?.length >= 2}
                                      />
                                    </FormControl>
                                    <FormLabel className="font-normal">
                                      {side.name}
                                    </FormLabel>
                                  </FormItem>
                                )}
                              />
                          ))}
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                )}
              </div>
            )})}
          </div>

          <div className="flex justify-between items-center">
            <Button type="button" variant="outline" onClick={addNewItem}>Add Another Item</Button>
            <Button type="submit" size="lg">Place Order</Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
