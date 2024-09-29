import { useState } from "react";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";

export const GeneratorDialog = () => {
  const [prompt, SetPrompt] = useState("");
  const [isDialogOpen, SetIsDialogOpen] = useState(false);

  return (
    <>
      <form className="flex items-end gap-4">
        <Textarea
          placeholder="A beautiful landing page"
          value={prompt}
          onChange={e => SetPrompt(e.target.value)}
        />
        <Button onClick={() => alert(prompt)}>Generate Now</Button>
      </form>
    </>
  );
};
