import { ReactFlowProvider } from "@xyflow/react";
import Header from "./_components/Header";
import Editor from "./_components/Editor";
import Sidebar from "./_components/Sidebar";

function EditorPage() {
  return (
    <ReactFlowProvider fitView>
      <div className="flex flex-1 flex-col">
        <Header />
        <div className="flex flex-1">
          <Sidebar />
          <main className="flex flex-[70%] flex-col">
            <Editor />
          </main>
        </div>
      </div>
    </ReactFlowProvider>
  );
}

export default EditorPage;
