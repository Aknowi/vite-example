interface Props {
  name: string;
  age?: number;
  isAdmin?: boolean;
}

function Exercise3({ name }: Props) {
  return (
    <div className="card">
      <h2>Exercise 3</h2>
      <p>User name: {name}</p>
    </div>
  );
}

export default Exercise3;
