import useSettings from "../../store/useSettings";

const Name = ({
  player,
  className,
}: {
  player: "first" | "second";
  className?: string;
}) => {
  const name = useSettings((state) => ({
    first: state.first.name,
    second: state.second.name,
  }));
  return <h1 className={className}>{name[player]}</h1>;
};

export default Name;
