import { CATEGORIES } from "../data/categories";
interface Props {
  onSelectCategory: (category: string) => void;
}

export default function ExpenseFilter({ onSelectCategory }: Props) {
  return (
    <select
      className="form-select"
      onChange={(e) => onSelectCategory(e.target.value)}
    >
      <option value="">Select Categories</option>
      {CATEGORIES.map((category) => (
        <option key={category} id={category} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
}
