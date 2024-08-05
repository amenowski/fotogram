import { ClipLoader } from "react-spinners";

type SpinnerProps = {
  size: number;
  color: string;
};
export default function Spinner({ size, color }: SpinnerProps) {
  return <ClipLoader size={size} color={color} />;
}
