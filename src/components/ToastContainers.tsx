import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";

/** Both toast containers, loaded on their own after the page is up (App.tsx). */
const ToastContainers = () => (
  <>
    <Toaster />
    <Sonner />
  </>
);

export default ToastContainers;
