import { useForm } from "react-hook-form";
import type { AnyObjectSchema } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import type { OrderFormData } from "../types";

export function useYupForm<T>(
  schema: AnyObjectSchema,
  defaultValues?: Partial<T>
) {
  const form = useForm<OrderFormData>({
    resolver: yupResolver(schema),
    defaultValues,
  });

  return form;
}
