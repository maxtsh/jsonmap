import { ReactFlowProvider } from "@xyflow/react";
import Header from "./_components/Header";
import Editor from "./_components/Editor";
import Sidebar from "./_components/Sidebar";
import Footer from "./_components/Footer";

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
        <Footer />
      </div>
    </ReactFlowProvider>
  );
}

export default EditorPage;
