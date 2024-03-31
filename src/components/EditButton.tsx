export function EditButton({ onClick }: any) {
  return (
    <div>
      <button
        onClick={onClick}
        className="relative cursor-pointer opacity-90 hover:opacity-100 transition-opacity p-[2px] bg-black rounded-[16px] bg-gradient-to-t from-[#111] to-[#dc98fd] active:scale-85 translate-x-[600px] translate-y-[-200px]"
      >
        <span className="w-full h-full flex items-center gap-2 px-2 py-2 bg-[#555] text-[#f1d5fe] rounded-[14px] bg-gradient-to-t from-[#a62ce2] to-[#c045fc]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
            />
          </svg>
          Edit
        </span>
      </button>
    </div>
  );
}
