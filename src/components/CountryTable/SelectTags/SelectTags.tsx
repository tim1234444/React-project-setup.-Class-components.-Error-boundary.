import type { Tag } from '../../../type/type';
type Props = {
  SetTags: React.Dispatch<React.SetStateAction<Tag[]>>;
  selectedTags: Tag[];
};
export default function SelectTags({ SetTags, selectedTags }: Props) {
  const tags: Tag[] = ['methane', 'oil_co2', 'temperature_change_from_co2'];
  return (
    <div className="select-tags">
      <div className="select-tags__container">
        <p className="select-tags__title">Select additional fields</p>
        <ul className="select-tags__list">
          {tags.map((tag) => (
            <li className="select-tags__block" key={tag}>
              <p className="selected-tags__item">{tag}</p>
              <label>
                <input
                  type="checkbox"
                  checked={selectedTags.includes(tag)}
                  onChange={(e) => {
                    if (e.target.checked === true) {
                      SetTags((prev) => [...prev, tag]);
                    } else {
                      const index = selectedTags.indexOf(tag);
                      selectedTags.splice(index, 1);
                    }
                  }}
                />
              </label>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
