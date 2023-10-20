import * as z from "zod";

export const collectibleSchema = z.object({
  type: z.union([
    z.literal("CARDS"),
    z.literal("BOOSTERS"),
    z.literal("OTHERS"),
  ]),

  // OPTIONNAL WHEN type === CARDS, else MANDATORY
  category: z.string().min(1),

  // OPTIONNAL WHEN type === BOOSTER || type === OTHERS, else MANDATORY
  language: z.string().min(1),

  // OPTIONAL
  extension: z.string().min(1),
});

export const collectibleDefault: z.infer<typeof collectibleSchema> = {
  type: "CARDS",
  category: "",
  language: "",
  extension: "",
};
