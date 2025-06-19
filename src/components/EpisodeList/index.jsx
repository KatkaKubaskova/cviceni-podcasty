import { Episode } from '../Episode/Episode';

export const EpisodeList = ({ episodes }) => {
  return (
    <div className="episodes">
      {episodes.map((ep) => (
        <Episode
          key={ep.num}
          num={ep.num}
          title={ep.title}
          guest={ep.guest}
        />
      ))}
    </div>
  );
};