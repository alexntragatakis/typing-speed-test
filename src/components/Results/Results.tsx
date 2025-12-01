import "./Results.css";

interface Props {
  WPM: number;
}

const Results = ({ WPM }: Props) => {
  return <div>{WPM}</div>;
};

export default Results;
