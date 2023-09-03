import { ReactNode } from "react";
import { Logo } from "../../components/Logo/Logo";

interface LayoutBaseProps {
  children: ReactNode;
}

export function LayoutBase(props: LayoutBaseProps) {
  const { children } = props;

  return (
    <div>
      <header>
        <Logo size="2rem" />
      </header>

      <main>{children}</main>

      <footer>
        <p>&copy; PrebenS</p>
      </footer>
    </div>
  );
}
