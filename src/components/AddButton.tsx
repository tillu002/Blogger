export function AddButton() {
  return (
    <button
      title="Add New"
      className="group cursor-pointer outline-none hover:rotate-90 duration-300 hover:-translate-y-1 hover:scale-110 px-4 py-1 text-sm flex items-center mt-1 mr-[-15px]"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="35px"
        height="35px"
        viewBox="0 0 28 28"
        className="stroke-zinc-400 fill-none group-hover:fill-zinc-800 group-active:stroke-zinc-200 group-active:fill-zinc-600 group-active:duration-0 duration-300"
      >
        <path
          d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
          strokeWidth="1.5"
        ></path>
        <path d="M8 12H16" strokeWidth="1.5"></path>
        <path d="M12 16V8" strokeWidth="1.5"></path>
      </svg>
    </button>
  );
}
