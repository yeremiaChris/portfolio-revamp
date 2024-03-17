export interface CardProps {
  date: string;
  companyLabel: string;
  workType: "Fulltime" | "Parttime";
  companyType: string;
  link: string;
  src: string;
}
const Card = ({
  companyLabel,
  companyType,
  date,
  link,
  workType,
  src,
}: CardProps) => {
  return (
    <div className="flex gap-5 items-center">
      <img
        src={src}
        alt="primaku"
        className="w-[200px] rounded-full hover:-translate-y-3 transform duration-300"
      />
      <div className="grid gap-1">
        <h2>{date}</h2>
        <h2 className="text-2xl font-medium">
          {companyLabel} <span className="text-sm font-normal">{workType}</span>
        </h2>
        <p>{companyType}</p>
        <p>Frontend Developer</p>
        <a
          href={link}
          target="_blank"
          className="text-green-500 text-sm underline"
        >
          Visit
        </a>
      </div>
    </div>
  );
};

export default Card;
