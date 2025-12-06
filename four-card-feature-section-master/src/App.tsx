import CommonCard from "./components/CommonCard/CommonCard";
import Heading from "./components/Heading";

const App = () => {
  const dummyData = [
    {
      id: 1,
      title: "Supervisor",
      content: "Monitors activity to identify project roadblocks",
      borderColor: "hsl(180, 62%, 55%)",
      rowSpan: "span 2",
      iconSrc: "./images/icon-supervisor.svg",
    },
    {
      id: 2,
      title: "Team Builder",
      content:
        "Scans our talent network to create the optimal team for your project",
      rowSpan: "span 1",
      borderColor: "hsl(0, 78%, 62%)",
      iconSrc: "./images/icon-team-builder.svg",
    },

    {
      id: 3,
      title: "Calculator",
      content:
        "Uses data from past projects to provide better delivery estimates",
      rowSpan: "span 1",
      borderColor: "hsl(212, 86%, 64%)",
      iconSrc: "./images/icon-calculator.svg",
    },
    {
      id: 4,
      title: "Karma",
      content: "Regularly evaluates our talent to ensure quality",
      rowSpan: "span 2",
      borderColor: "hsl(34, 97%, 64%)",
      iconSrc: "./images/icon-karma.svg",
    },
  ];
  return (
    <div>
      <Heading />
      <div className="card-grid centering-element">
        {dummyData.map((item) => (
          <div
            className={`${item.id === 1 || item.id === 3 ? "grid-item" : null}`}
            key={item.id}
          >
            <CommonCard {...item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
