import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { CATEGORIES } from "../data/categories";

const schema = z.object({
  description: z
    .string()
    .min(3, { message: "Description at least have 3 characters." }),
  amount: z
    .number({ invalid_type_error: "Amount is required." })
    .min(0.001)
    .max(100_000),
  category: z.enum(CATEGORIES, {
    errorMap: () => ({ message: "Category is required." }),
  }),
});

type ExpenseFormData = z.infer<typeof schema>;
interface Props {
  onSubmit: (data: ExpenseFormData) => void;
}

export default function ExpenseForm({ onSubmit }: Props) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ExpenseFormData>({ resolver: zodResolver(schema) });
  return (
    <form
      className="border p-3"
      onSubmit={handleSubmit((data) => {
        onSubmit(data);
        reset();
      })}
    >
      <div className="mt-3">
        <label htmlFor="description">Description</label>
        <input
          {...register("description")}
          type="text"
          className="form-control"
          id="description"
        />
        {errors.description?.message && (
          <p className="text-danger">{errors.description?.message}</p>
        )}
      </div>

      <div className="mt-3">
        <label htmlFor="amount">Amount</label>
        <input
          {...register("amount", { valueAsNumber: true })}
          type="number"
          className="form-control"
          id="amount"
        />
        {errors.amount?.message && (
          <p className="text-danger">{errors.amount?.message}</p>
        )}
      </div>

      <div className="mt-3">
        <label htmlFor="category">Category</label>
        <select {...register("category")} className="form-control">
          <option value="">Select category</option>
          {CATEGORIES.map((category) => (
            <option key={category} id={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        {errors.category?.message && (
          <p className="text-danger">{errors.category?.message}</p>
        )}
      </div>

      <button className="mt-3 btn btn-outline-primary">Add</button>
    </form>
  );
}
