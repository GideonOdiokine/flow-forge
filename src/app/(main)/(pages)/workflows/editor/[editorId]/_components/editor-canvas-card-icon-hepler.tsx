"use client";
import React from "react";
import {
  Calendar,
  CircuitBoard,
  Database,
  GitBranch,
  HardDrive,
  Mail,
  MousePointerClickIcon,
  Plus,
  Slack,
  Timer,
  Webhook,
  Zap,
} from "lucide-react";
import { EditorCanvasTypes } from "@/lib/types";

type Props = { type: EditorCanvasTypes };

const ICON_MAP = {
  Email: Mail,
  Condition: GitBranch,
  AI: CircuitBoard,
  Slack: Slack,
  "Google Drive": HardDrive,
  Notion: Database,
  "Custom Webhook": Webhook,
  "Google Calendar": Calendar,
  Trigger: MousePointerClickIcon,
  Action: Zap,
  Wait: Timer,
} as const;

const EditorCanvasIconHelper = ({ type }: Props) => {
  const Icon = ICON_MAP[type] ?? Zap;
  return <Icon className="flex-shrink-0" size={30} />;
};

export default EditorCanvasIconHelper;
