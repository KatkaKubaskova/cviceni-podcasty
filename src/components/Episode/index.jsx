import "./index.css"

export const Episode = ({ num, title, guest }) => {
  return (
    <div className="episode">
      <h3>{num}: {title}</h3>
      <p>host: {guest}</p>
    </div>
  );
};