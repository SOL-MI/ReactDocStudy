function Drink({ name }) {
  let caf, age;
  if (name === "tea") {
    caf = "15–70 mg/cup";
    age = "4,000+ years";
  } else {
    caf = "80–185 mg/cup";
    age = "1,000+ years";
  }
  return (
    <section>
      <h1>{name}</h1>
      <dl>
        <dt>Part of plant</dt>
        <dd>{name}</dd>
        <dt>Caffeine content</dt>
        <dd>{caf}</dd>
        <dt>Age</dt>
        <dd>{age}</dd>
      </dl>
    </section>
  );
}

export default function DrinkList() {
  return (
    <div>
      <Drink name="tea" />
      <Drink name="coffee" />
    </div>
  );
}
