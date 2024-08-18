import { Button } from "@nextui-org/react";
import { MdDragIndicator } from "react-icons/md";
import JSONEditor from "@/components/JSON";
import { formatJSONString } from "@/utils/objects";

function Sidebar() {
  return (
    <aside className="relative hidden flex-[30%] flex-col border-r-[0.0625rem] border-solid border-r-[hsl(var(--border))] pr-1 md:flex">
      <Button
        size="sm"
        isIconOnly
        radius="sm"
        variant="solid"
        color="default"
        className="absolute -right-2 top-2/4 z-20 h-8 w-3 min-w-3 -translate-y-2/4 cursor-w-resize p-0">
        <MdDragIndicator size={18} color="hsl(var(--icon))" />
      </Button>
      <JSONEditor
        copyMessage="Copied!"
        editorProps={{
          value: formatJSONString(
            JSON.stringify({
              name: "MAX SHAHDOOST",
              isActive: true,
              hobbies: [
                {
                  name: "Coding",
                  skills: ["React.js", "TypeScript", "Next.js"],
                },
                {
                  name: "Gaming",
                  powers: [
                    "Battlefields",
                    "Grand Theft Auto",
                    "Company Of Heroes",
                    "Metro Games",
                    "Mafia Games",
                  ],
                },
              ],
            }),
          ),
          height: "100%",
          theme: "GitHub-Dark",
          defaultLanguage: "json",
          className: "rounded-small",
          options: {
            readOnly: false,
            wordWrap: "bounded",
            minimap: { enabled: true },
          },
        }}
      />
    </aside>
  );
}

export default Sidebar;
