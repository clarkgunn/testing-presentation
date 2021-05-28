import { useRef, useState } from 'react';

export default function Tags() {
  const inputEl = useRef(null);
  const [tags, setTags] = useState([]);
  const MAXIMUM_TAGS = 3;

  function submit(e) {
    e.preventDefault();

    if (tags.length === MAXIMUM_TAGS) {
      return;
    }

    const uniqueTags = new Set([...tags, inputEl.current.value]);
    setTags(Array.from(uniqueTags));
    inputEl.current.value = '';
  }

  return (
    <form className="tags" onSubmit={submit}>
      <div className="tags__input">
        <label htmlFor="input">
          <h1>Tags</h1>
          <input type="text" id="input" ref={inputEl} />
        </label>
      </div>
      <div className="tags__button">
        <button type="submit">Enter</button>
      </div>
      {tags.map((tag) => (
        <span key={tag}>{tag}</span>
      ))}
    </form>
  );
}
