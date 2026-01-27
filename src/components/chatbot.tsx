"use client";

import { useState, useEffect, useRef, useTransition } from "react";
import { MessageCircle, Send, Bot, User, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetFooter,
  SheetClose
} from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { chatbotMenuInquiries } from "@/ai/flows/chatbot-menu-inquiries";
import { checkOrderStatus } from "@/ai/flows/chatbot-order-updates";
import { smartPromotions } from "@/ai/flows/smart-promotions";
import { cn } from "@/lib/utils";

type Message = {
  id: number;
  sender: "user" | "bot";
  text: string;
};

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isPending, startTransition] = useTransition();
  const [isProactiveMessageSent, setIsProactiveMessageSent] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && !isProactiveMessageSent) {
      startTransition(async () => {
        try {
          const res = await smartPromotions({ userId: "guest" });
          if (res.promotionMessage) {
            setMessages((prev) => [
              ...prev,
              { id: Date.now(), sender: "bot", text: res.promotionMessage },
            ]);
            setIsProactiveMessageSent(true);
          }
        } catch (error) {
          console.error("Error fetching smart promotion:", error);
          setMessages((prev) => [
            ...prev,
            { id: Date.now(), sender: "bot", text: "I'm having trouble fetching promotions right now. How can I help?" },
          ]);
        }
      });
    }
  }, [isOpen, isProactiveMessageSent]);
  
  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTo({
        top: scrollAreaRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [messages]);


  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now(),
      sender: "user",
      text: inputValue,
    };
    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");

    startTransition(async () => {
      try {
        let response;
        const orderIdMatch = inputValue.match(/order\s*#?(\d+)/i);
        
        if (orderIdMatch) {
          const orderId = orderIdMatch[1];
          response = await checkOrderStatus({ orderId });
          let botText = `Status for order #${orderId}: ${response.status}.`;
          if (response.estimatedDeliveryTime) {
            botText += ` Estimated delivery time: ${response.estimatedDeliveryTime}.`;
          }
          setMessages(prev => [...prev, { id: Date.now() + 1, sender: "bot", text: botText }]);
        } else {
          response = await chatbotMenuInquiries({ query: inputValue });
          setMessages(prev => [...prev, { id: Date.now() + 1, sender: "bot", text: response.answer }]);
        }
      } catch (error) {
        console.error("Chatbot error:", error);
        setMessages(prev => [...prev, { id: Date.now() + 1, sender: "bot", text: "Sorry, I'm having a little trouble right now. Please try again later." }]);
      }
    });
  };

  return (
    <>
      <Button
        className="fixed bottom-6 right-6 h-16 w-16 rounded-full shadow-lg"
        onClick={() => setIsOpen(true)}
        aria-label="Open chatbot"
      >
        <MessageCircle className="h-8 w-8" />
      </Button>
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetContent className="flex flex-col p-0">
          <SheetHeader className="p-6 pb-2">
            <SheetTitle className="font-headline text-2xl flex items-center gap-2">
              <Bot/> Saucy's Assistant
            </SheetTitle>
          </SheetHeader>
          <ScrollArea className="flex-1 px-6" ref={scrollAreaRef}>
            <div className="flex flex-col gap-4 py-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={cn(
                    "flex items-start gap-3",
                    message.sender === "user" && "justify-end"
                  )}
                >
                  {message.sender === "bot" && (
                    <Avatar className="h-8 w-8">
                      <AvatarFallback><Bot/></AvatarFallback>
                    </Avatar>
                  )}
                  <div
                    className={cn(
                      "max-w-xs rounded-lg p-3 text-sm",
                      message.sender === "user"
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted"
                    )}
                  >
                    {message.text}
                  </div>
                  {message.sender === "user" && (
                     <Avatar className="h-8 w-8">
                      <AvatarFallback><User/></AvatarFallback>
                    </Avatar>
                  )}
                </div>
              ))}
              {isPending && (
                <div className="flex items-start gap-3">
                  <Avatar className="h-8 w-8">
                    <AvatarFallback><Bot/></AvatarFallback>
                  </Avatar>
                  <div className="max-w-xs rounded-lg bg-muted p-3 text-sm">
                    <div className="flex items-center gap-1.5">
                      <span className="h-2 w-2 animate-pulse rounded-full bg-foreground/50 [animation-delay:-0.3s]"></span>
                      <span className="h-2 w-2 animate-pulse rounded-full bg-foreground/50 [animation-delay:-0.15s]"></span>
                      <span className="h-2 w-2 animate-pulse rounded-full bg-foreground/50"></span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </ScrollArea>
          <SheetFooter className="p-6 pt-2">
            <form onSubmit={handleSendMessage} className="flex w-full items-center gap-2">
              <Input
                type="text"
                placeholder="Ask about the menu..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                disabled={isPending}
                className="flex-1"
              />
              <Button type="submit" disabled={isPending || !inputValue.trim()} size="icon">
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </>
  );
}
