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

  graded: z.boolean(),

  // check if this value is set when graded === true
  // else ignore
  note: z.string(),
});

export const collectibleDefault: z.infer<typeof collectibleSchema> = {
  type: "CARDS",
  category: "",
  language: "",
  extension: "",
  graded: false,
  note: "",
};
