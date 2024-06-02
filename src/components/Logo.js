import { Logos } from "./style";

const Logo = () => {
  return (
    <>
      <Logos>
        <img alt="logo" src={`${process.env.PUBLIC_URL}/logo-toy.png`} width="50px" height="45px" />
      </Logos>
    </>
  );
};

export default Logo;
