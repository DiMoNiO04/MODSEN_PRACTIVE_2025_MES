interface ICountNumberProps {
  count: number;
}

export const CountNumber = ({ count }: ICountNumberProps) => {
  return (
    <div>{count}</div>
  )
}