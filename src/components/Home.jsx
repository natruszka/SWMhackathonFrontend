import reactLogo from "../assets/react.svg";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <img src={reactLogo} className="w-2/10" alt="React logo" />
      <h1 className="font-bold">
        Mapa z punktami obsługującymi zniżki studenckie
      </h1>
    </div>
  );
}
