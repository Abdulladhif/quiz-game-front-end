import Image from "next/image";
import Login from "../../components/login";

export default function Home() {
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center">
      <p>Quiz Blockchain App</p>
      <Login />
    </div>
  );
}