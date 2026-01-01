import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Loader2 } from "lucide-react";
import { useModal } from "@/providers/modal-provider";
import { onCreateWorkflow } from "@/app/(main)/(pages)/workflows/_actions/workflow-connection";
import { toast } from "sonner";

type Props = {
  title?: string;
  subTitle?: string;
};
const WorkflowFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  description: z.string().min(1, "Description is required"),
});
const Workflowform = ({ subTitle, title }: Props) => {
  const { setClose } = useModal();
  const form = useForm<z.infer<typeof WorkflowFormSchema>>({
    mode: "onChange",
    resolver: zodResolver(WorkflowFormSchema),
    defaultValues: {
      name: "",
      description: "",
    },
  });

  const router = useRouter();

  const [isLoading, setIsLoading] = React.useState(false);

  const handleSubmit = async (values: z.infer<typeof WorkflowFormSchema>) => {
    setIsLoading(true);
    try {
      const workflow = await onCreateWorkflow(values.name, values.description);
      if (workflow) toast.success(workflow.message);
      router.refresh();
      setClose();
    } catch (err) {
      toast.error("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-[650px] border-none">
      {title && subTitle && (
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{subTitle}</CardDescription>
        </CardHeader>
      )}
      <CardContent>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className="flex flex-col gap-4 text-left"
          >
            <FormField
              disabled={isLoading}
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Name"
                      className={
                        form.formState.errors.name ? "border-red-500" : ""
                      }
                    />
                  </FormControl>
                  <FormMessage className="text-red-500" />
                </FormItem>
              )}
            />
            <FormField
              disabled={isLoading}
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Description"
                      {...field}
                      className={
                        form.formState.errors.description
                          ? "border-red-500"
                          : ""
                      }
                    />
                  </FormControl>
                  <FormMessage className="text-red-500" />
                </FormItem>
              )}
            />
            <Button
              className="mt-4  !bg-[#2F006B] "
              disabled={isLoading}
              type="submit"
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Saving
                </>
              ) : (
                "Save Settings"
              )}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default Workflowform;
