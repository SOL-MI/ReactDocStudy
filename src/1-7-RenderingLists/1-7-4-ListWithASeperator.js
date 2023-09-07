const poem = {
  lines: [
    "I write, erase, rewrite",
    "Erase again, and then",
    "A poppy blooms.",
  ],
};
function A() {
  return (
    <div>
      {poem.lines.map((line, index) => (
        <div key={index}>
          <p>{line}</p>
          {index < poem.lines.length - 1 && <hr />}
        </div>
      ))}
    </div>
  );
}
export default function Poem() {
  return (
    <article>
      <A />
    </article>
  );
}
