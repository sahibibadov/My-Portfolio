"use client";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import { toast } from "sonner";

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    toast.error("error");
  }, [error]);

  return (
    <div className="flex flex-col gap-3 justify-center w-full">
      <h2 className="text-3xl font-semibold">Something went wrong!</h2>
      <Button onClick={() => reset()}>Try again</Button>
      <pre className="text-sm text-muted-foreground">{JSON.stringify(error, null, 2)}</pre>
    </div>
  );
}
