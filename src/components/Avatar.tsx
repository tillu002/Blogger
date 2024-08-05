export function Avatar({ authorName }: any) {
  if (authorName && authorName.length > 0) {
    return (
      <div className="flex justify-center rounded-full w-8 h-8 bg-black text-white p-6 text-2xl items-center xl:w-8 xl:h-8 md:p-4 l:p-5 l:text-xl sm:p-4 sm:text-base">
        {authorName[0].toUpperCase()}
      </div>
    );
  } else {
    return
  }
}
