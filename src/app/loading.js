import { FadeLoader } from "react-spinners";

export default function Loading() {
  return (
    <div className="flex justify-center items-center h-screen">
      <FadeLoader />
    </div>
  );
}
