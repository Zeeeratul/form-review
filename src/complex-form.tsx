import { zodResolver } from "@hookform/resolvers/zod";
import { useFieldArray, useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "./components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "./components/ui/input";
import { collectibleDefault, collectibleSchema } from "./zod";
import { Separator } from "./components/ui/separator";
import { Switch } from "@radix-ui/react-switch";

const formSchema = z.object({
  userId: z.string().min(1),
  collectibles: z.array(collectibleSchema),
});

function ComplexForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      userId: "",
      collectibles: [collectibleDefault],
    },
  });
  const { fields, append } = useFieldArray({
    control: form.control,
    name: "collectibles",
  });

  const handleSubmit = async () => {
    const isFormValid = await form.trigger();
    console.log(isFormValid);
    if (isFormValid) {
      console.log(form.getValues());
    }
  };

  return (
    <Form {...form}>
      <div className="flex-1 flex flex-col gap-4 p-4">
        <p>Complex form</p>

        <FormField
          control={form.control}
          name="userId"
          render={({ field }) => (
            <FormItem className="flex-1">
              <FormLabel>User id</FormLabel>
              <FormControl>
                <Input placeholder="" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {fields.map((field, index) => (
          <div className="flex flex-col justify-between gap-4">
            <p className="text-xl font-semibold">Item #{index + 1}</p>
            <FormField
              control={form.control}
              name={`collectibles.${index}.category`}
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel>Category</FormLabel>
                  <FormControl>
                    <Input placeholder="" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name={`collectibles.${index}.language`}
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel>Language</FormLabel>
                  <FormControl>
                    <Input placeholder="" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name={`collectibles.${index}.extension`}
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel>Extension</FormLabel>
                  <FormControl>
                    <Input placeholder="" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name={`collectibles.${index}.graded`}
              render={({ field }) => (
                <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                  <div className="space-y-0.5">
                    <FormLabel className="text-base">Graded</FormLabel>
                  </div>
                  <FormControl>
                    <Switch
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name={`collectibles.${index}.note`}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Note</FormLabel>
                  <FormControl>
                    <Input placeholder="" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Separator className="my-4" />
          </div>
        ))}

        <Button
          onClick={() => append(collectibleDefault)}
          className="mt-auto"
          variant="outline"
        >
          Add new collectible
        </Button>

        <Button onClick={handleSubmit} className="mt-auto">
          Submit
        </Button>
      </div>
    </Form>
  );
}

export default ComplexForm;
