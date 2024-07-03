import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { addDoc, collection } from "firebase/firestore";
import { db } from "@/app/firebase/config";
import  { mutate } from "swr";

const formSchema = z.object({
  project_name: z.string().min(2, {
    message: "project_name must be at least 2 characters.",
  }),
  deadline: z.string().min(2, {}),
});

export function ProjectForm({ userEmail }: { userEmail: string | null }) {
  // ...
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      project_name: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    // console.log(userEmail);
    try {
      await addDoc(collection(db, "projects"), {
        deadline: values.deadline,
        name: values.project_name,
        owner: userEmail,
        tasks: [],
      });

      // Reset the form fields to their default values after successful submission
      form.reset({
        project_name: "",
        deadline: "",
      });
      mutate(["projects", userEmail]);
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  }

  return (
    <Form {...form} >
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 w-full">
        <FormField
          control={form.control}
          name="project_name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Project Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter the project name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="deadline"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Deadline</FormLabel>
              <FormControl>
                <Input type="datetime-local" placeholder="" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="my-3 px-6">Create Project</Button>
      </form>
    </Form>
  );
}
