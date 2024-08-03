export function SignButton({ onClick, type, isLoggedIn, isClickable }: Sign) {

  
  return (
    <div>
      <button
        onClick={onClick}
        className={`buttonSignin ${isClickable ? "" : "hidden"}`}
        type="button"
      >
        
        {isLoggedIn ?  <Loader /> : type}
      </button>
    </div>
  );
}

export const Loader = () => {
  return <article className="loader"></article>
}

interface Sign {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  type: string;
  isLoggedIn: boolean;
  isClickable: boolean;
}
