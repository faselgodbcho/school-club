import Header from "../components/Home/Header";
import Sidebar from "../components/Home/Sidebar";

export default function Home() {
  return (
    <div className="p-8 gap-16 flex h-full">
      <Sidebar />

      <div className="flex flex-col flex-1">
        <Header />
      </div>
    </div>
  );
}
