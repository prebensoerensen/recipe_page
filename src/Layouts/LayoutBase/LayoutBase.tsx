import { ReactNode } from "react";
import { Logo } from "../../components/Logo/Logo";
import "./LayoutBase.css";

interface LayoutBaseProps {
  children: ReactNode;
}

export function LayoutBase(props: LayoutBaseProps) {
  const { children } = props;

  return (
    <>
      <header>
        <Logo size="5rem" />
        <div>
          <h1>Savor the Flavor</h1>
          <h2>Your Gateway to Gourmet Recipes</h2>
        </div>
      </header>

      <main>{children}</main>

      <footer>
        <p>&copy; PrebenS</p>
      </footer>
    </>
  );
}
