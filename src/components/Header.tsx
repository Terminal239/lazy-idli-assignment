import Container from "./Reusable/Container";
import Logo from "./Reusable/Logo";

type Props = {};

const Header = (props: Props) => {
  return (
    <header className="bg-black/90 text-white px-4 py-1">
      <Container className="flex items-center justify-between h-[48px]">
        <div className="flex flex-col leading-none items-center">
          <span className="font-extrabold text-lg bold-text">GILLY's</span>
          <span className="text-sm -mt-1">Koramangala</span>
        </div>
        <Logo height={12} />
      </Container>
    </header>
  );
};

export default Header;
