export function SignButton({ onClick, type, isLoggedIn}: Sign) {

  
  return (
    <div>
      <button
        onClick={onClick}
        className={`buttonSignin`}
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
}

export interface ClickProps {
onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
