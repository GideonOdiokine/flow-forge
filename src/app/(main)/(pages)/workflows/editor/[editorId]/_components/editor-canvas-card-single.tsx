import { EditorCanvasCardType } from "@/lib/types";
import { useEditor } from "@/providers/editor-provider";
import { Position, useNodeId } from "@xyflow/react";
import React, { useMemo } from "react";
import EditorCanvasIconHelper from "./editor-canvas-card-icon-hepler";
import CustomHandle from "./custom-handle";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const EditorCanvasCardSingle = ({ data }: { data: EditorCanvasCardType }) => {
  const { dispatch, state } = useEditor();
  const nodeId = useNodeId();
  const logo = <EditorCanvasIconHelper type={data.type} />;
  const statusColor = useMemo(() => {
    const hash = nodeId?.charCodeAt(0) ?? 0;
    if (hash % 3 === 0) return "bg-green-500";
    if (hash % 3 === 1) return "bg-orange-500";
    return "bg-red-500";
  }, [nodeId]);

  return (
    <>
      {data.type !== "Trigger" && data.type !== "Google Drive" && (
        <CustomHandle
          type="target"
          position={Position.Top}
          style={{ zIndex: 100 }}
        />
      )}
      <Card
        onClick={(e) => {
          e.stopPropagation();
          const val = state.editor.elements.find((n) => n.id === nodeId);
          console.log(val);
          if (val)
            dispatch({
              type: "SELECTED_ELEMENT",
              payload: {
                element: val,
              },
            });
        }}
        className="relative max-w-[400px] dark:border-muted-foreground/70"
      >
        <CardHeader className="flex flex-row items-center gap-4">
          <div>{logo}</div>
          <div>
            <CardTitle className="text-md">{data.title}</CardTitle>
            <CardDescription>
              <p className="text-xs text-muted-foreground/50">
                <b className="text-muted-foreground/80">ID: </b>
                {nodeId}
              </p>
              <p>{data.description}</p>
            </CardDescription>
          </div>
        </CardHeader>
        <Badge variant="secondary" className="absolute right-2 top-2">
          {data.type}
        </Badge>
        <div
          className={cn(
            "absolute left-3 top-4 h-2 w-2 rounded-full",
            statusColor
          )}
        ></div>
      </Card>
      <CustomHandle
        type="source"
        position={Position.Bottom}
        style={{ zIndex: 100 }}
        id='a'
      />
    </>
  );
};

export default EditorCanvasCardSingle;
