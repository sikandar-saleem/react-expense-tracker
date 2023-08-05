import { CATEGORIES } from "../App";
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
        <option id={category} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
}
