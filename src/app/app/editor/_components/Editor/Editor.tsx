"use client";

import { useRef, useCallback, useState } from "react";
import {
  MiniMap,
  addEdge,
  Controls,
  ReactFlow,
  Background,
  useEdgesState,
  useNodesState,
  type Edge,
  type Connection,
  type ReactFlowInstance,
} from "@xyflow/react";
import { EdgeType, type NodeType } from "@/types/editor.types";

type EditorInstance = ReactFlowInstance<NodeType, EdgeType>;

function Editor() {
  const editorRef = useRef<HTMLDivElement>(null);
  const [edges, setEdges, onEdgesChange] = useEdgesState<EdgeType>([]);
  const [nodes, setNodes, onNodesChange] = useNodesState<NodeType>([]);
  const [flowInstance, setFlowInstance] = useState<EditorInstance | null>(null);

  const handleFlowInstance = (ins: EditorInstance) => setFlowInstance(ins);

  const onConnect = useCallback(
    (params: Edge | Connection) =>
      setEdges((eds) => addEdge({ ...params, type: "normal" }, eds)),
    [setEdges],
  );

  return (
    <div className="flex flex-1 flex-col">
      <ReactFlow
        fitView
        id="editor"
        nodes={[]}
        maxZoom={1.5}
        minZoom={0.5}
        ref={editorRef}
        // edgeTypes={edgeTypes}
        // nodeTypes={nodeTypes}
        onConnect={onConnect}
        onInit={handleFlowInstance}
        // edges={edgesWithUpdatedTypes}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        fitViewOptions={{ maxZoom: 0.5 }}
        proOptions={{ hideAttribution: true }}>
        <MiniMap
          zoomable
          pannable
          title="Mini map"
          nodeBorderRadius={8}
          style={{ height: 150 }}
          position="bottom-right"
          //   nodeColor={getNodeColor}
          className="rounded-small border-[0.125rem] border-solid border-[hsl(var(--border))]"
        />
        <Controls position="top-right" showInteractive={false} />
        <Background color="#aaa" size={1} gap={16} />
      </ReactFlow>
    </div>
  );
}

export default Editor;
