interface IBtnProps {
  text: string;
  count: number;
  onClick: () => void;
}

export const Btn = ({ text, count, onClick }: IBtnProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      style={{
        backgroundColor: count > 10 ? 'red' : 'green',
      }}
    >
      {text}
    </button>
  );
};
