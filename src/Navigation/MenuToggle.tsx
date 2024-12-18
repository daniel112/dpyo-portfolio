import { motion, SVGMotionProps } from "framer-motion";
import { FC } from "react";
import { IconButton, SvgIcon, useTheme } from "@mui/material";

const Path = (props: SVGMotionProps<SVGPathElement>) => {
  const theme = useTheme();
  return (
    <motion.path
      fill="transparent"
      strokeWidth="3"
      stroke={theme.palette.primary.light}
      strokeLinecap="round"
      {...props}
    />
  );
};

interface MenuToggleProps {
  toggle: () => void;
}

export const MenuToggle: FC<MenuToggleProps> = ({ toggle }) => {
  return (
    <IconButton
      onClick={toggle}
      sx={{
        top: 18,
        left: 15,
        position: "absolute",
        width: 50,
        height: 50,
      }}
    >
      <SvgIcon
        component={motion.svg}
        viewBox="0 0 23 23"
        sx={{
          width: 23,
          height: 23,
        }}
      >
        <Path
          variants={{
            closed: { d: "M 2 2.5 L 20 2.5" },
            open: { d: "M 3 16.5 L 17 2.5" },
          }}
        />
        <Path
          d="M 2 9.423 L 20 9.423"
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
          transition={{ duration: 0.1 }}
        />
        <Path
          variants={{
            closed: { d: "M 2 16.346 L 20 16.346" },
            open: { d: "M 3 2.5 L 17 16.346" },
          }}
        />
      </SvgIcon>
    </IconButton>
  );
};
