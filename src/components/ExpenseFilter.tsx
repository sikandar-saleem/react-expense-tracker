interface Props {
  onSelectCategory: (category: string) => void;
  categories: string[];
}

export default function ExpenseFilter({ onSelectCategory, categories }: Props) {
  return (
    <select
      className="form-select"
      onChange={(e) => onSelectCategory(e.target.value)}
    >
      <option value="">Select Categories</option>
      {categories.map((category) => (
        <option id={category} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
}
