import dynamic from "next/dynamic";
import { Button } from "@/components/ui/button";
import { useBilling } from "@/providers/billing-provider";
import { useModal } from "@/providers/modal-provider";
import { Plus } from "lucide-react";
import React from "react";

// Lazy load workflow form and modal
const WorkflowForm = dynamic(() => import("@/components/forms/workflow-form"), {
  ssr: false,
});

const CustomModal = dynamic(() => import("@/components/global/custom-modal"), {
  ssr: false,
});

const WorkflowButton = () => {
  const { setOpen, setClose } = useModal();
  const { credits } = useBilling();

  const handleClick = () => {
    setOpen(
      <CustomModal
        title="Create a Workflow Automation"
        subheading="Workflows are powerful tools to automate tasks."
      >
        <WorkflowForm />
      </CustomModal>
    );
  };

  return (
    <Button
      aria-label="Create Workflow"
      size="icon"
      className="!bg-muted hover:!bg-primary/90"
      {...(credits !== "0" ? { onClick: handleClick } : { disabled: true })}
    >
      <Plus />
    </Button>
  );
};

export default WorkflowButton;
