"use client";

import { Button } from "@nextui-org/react";
import { toast } from "sonner";
import Editor, { type EditorProps } from "@monaco-editor/react";
import { LuCopy } from "react-icons/lu";

type Props = {
  copyMessage?: string;
  editorProps: EditorProps;
  heading?: React.ReactNode;
};

const JSONEditor: React.FC<Props> = ({ heading, editorProps, copyMessage }) => {
  const handleCopy = async (text: string | undefined) => {
    if (text) {
      if (!navigator.clipboard) {
        toast.warning("Your browser does not support clipboard!");
        return;
      }

      await navigator.clipboard.writeText(text);
      if (copyMessage) toast.success(copyMessage);
    }
  };

  return (
    <div className="relative flex flex-1 flex-col rounded-small">
      {heading && (
        <div className="flex items-center bg-dark-2-600 px-2 py-1">
          {heading}
        </div>
      )}
      <Editor {...editorProps} />
      {copyMessage && (
        <Button
          size="sm"
          radius="sm"
          color="default"
          variant="solid"
          isIconOnly
          className="absolute bottom-2 right-6 z-10"
          onClick={() => {
            handleCopy(editorProps.value).catch(() => {});
          }}>
          <LuCopy size={18} color="hsl(var(--icon))" />
        </Button>
      )}
    </div>
  );
};

export default JSONEditor;
