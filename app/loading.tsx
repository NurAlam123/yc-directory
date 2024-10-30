export default function Loading() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div>
        <div className="h-36 w-36 rounded-full bg-primary animate-bounce" />
        <p className="text-black text-center font-semibold text-2xl mt-5">
          Loading...
        </p>
      </div>
    </div>
  );
}
