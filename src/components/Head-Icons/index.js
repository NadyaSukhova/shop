import { memo } from "react";
import cn from "../../utils/classnames.ts";
import "./style.css";

function HeadIcons({ amount }) {
  const className = "Head-Icons";
  return (
    <div className={cn(className)}>
        {amount}
    </div>
  );
}

export default memo(HeadIcons);
