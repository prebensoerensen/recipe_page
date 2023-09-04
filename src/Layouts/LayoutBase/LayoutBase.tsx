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
      <header className="header">
        <Logo size="5rem" />
        <h1>Recipes</h1>
      </header>

      <main>{children}</main>

      <footer>
        <p>&copy; PrebenS</p>
      </footer>
    </>
  );
}
