import { ReactNode, useState } from "react";
import { colors } from "../../constants/constants";

interface Props {
  color: string;
  backGroundColor?: string;
  filledBackground?: boolean;
  height: string;
  width: string;
  hoverBackground?: string;
  outline?: boolean;
  borderWidth?: string;
  className?: string;
  disabled?: boolean;
  children: ReactNode;
}

const Button = ({
  color,
  height,
  width,
  backGroundColor = "",
  filledBackground = true,
  hoverBackground = "",
  outline = true,
  borderWidth = "1px",
  className = "",
  disabled = false,
  children,
}: Props) => {
  const [hover, setHover] = useState(false);
  const cssBackground = !filledBackground ? "background:none;" : "";
  let buttonCss = `flex justify-center items-center rounded-[25px] text-2xl font-semibold z-2   disabled:bg-gray-400 ${cssBackground} transition-colors duration-500 cursor-pointer`;
  buttonCss += " " + className;
  return (
    <button
      className={buttonCss}
      style={{
        color: hover ? "white" : color,
        height: height,
        width: width,
        border: `${outline ? `${borderWidth} solid ${color}` : "none"}`,
        backgroundColor: disabled
          ? colors.buttonDesabledBackgroundColor
          : hover
          ? hoverBackground
          : backGroundColor,
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
