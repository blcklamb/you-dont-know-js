"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

const Tiptap = () => {
  const editor = useEditor({
    editorProps: {
      attributes: {
        class: "outline-none",
      },
    },
    extensions: [StarterKit],
  });

  return (
    <div className="border-border-strong rounded-sm bg-background border">
      <EditorContent
        editor={editor}
        className="md:p-6 h-[500px] overflow-y-auto whitespace-pre-wrap p-4"
      />
    </div>
  );
};

export default Tiptap;
