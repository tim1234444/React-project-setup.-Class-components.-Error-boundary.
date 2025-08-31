import { memo } from 'react';
import type { Tag } from '../../../type/type';
type Props = {
  toggleTag: (tag: Tag, checked: boolean) => void;
  selectedTags: Tag[];
};
function SelectTags({ toggleTag, selectedTags }: Props) {
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
                  onChange={(e) => toggleTag(tag, e.target.checked)}
                />
              </label>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default memo(SelectTags);
