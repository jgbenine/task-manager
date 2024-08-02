import "./Loading.scss";

export function Loading() {
  return (
    <div className="loading">
      <ul className="loading__group">
        <li className="loading__circle loading__circle--circle1" />
        <li className="loading__circle loading__circle--circle2" />
        <li className="loading__circle loading__circle--circle3" />
        <li className="loading__circle loading__circle--circle4" />
      </ul>
    </div>
  );
}
