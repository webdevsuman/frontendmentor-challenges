interface ICardProps {
  title: string;
  content: string;
  rowSpan: string;
  borderColor: string;
  iconSrc: string;
}

const CommonCard = ({ title, content, borderColor, iconSrc }: ICardProps) => {
  return (
    <div
      style={{ borderTop: `4px solid ${borderColor}` }}
      className="card-main"
    >
      <h2>{title}</h2>
      <p>{content}</p>
      <img src={iconSrc} alt="" />
    </div>
  );
};

export default CommonCard;
