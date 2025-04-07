import { useAuth } from "../../contexts/AuthContext";

export default function AuthForm() {
  const { unique_id, setUnique_id, handleSubmit } = useAuth();

  return (
    <div className="mt-32 flex items-center justify-center px-16">
      <div className="w-[475px] px-4 py-8 bg-[#383838] rounded-2xl">
        <h2 className="text-white text-center mx-auto text-[25px] font-black max-w-[250px]">
          Welcome to Abba Coding Club
        </h2>
        <div className="w-28 h-28 rounded-full bg-white mx-auto mt-4"></div>

        <form className="pt-8 relative w-fit mx-auto" onSubmit={handleSubmit}>
          <input
            type="text"
            className="px-8 py-6 min-w-[350px] bg-white rounded-2xl border-none outline-none"
            placeholder="Enter your ID here"
            value={unique_id}
            onChange={(e) => setUnique_id(e.target.value)}
          />
          <button className="absolute right-1 bg-[#383838] px-[20px] py-[20px] rounded-2xl text-white cursor-pointer mt-1">
            Enter
          </button>
        </form>

        <p className="text-[#9C9C9C] text-sm text-center mt-4">
          Enter your ID to continue
        </p>
      </div>
    </div>
  );
}
