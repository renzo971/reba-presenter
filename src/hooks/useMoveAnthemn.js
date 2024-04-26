import { useContext } from "react";
import { AnthemnsContext } from "../providers/anthemns";

export function useMoveAnthemn() {
  const { anthemns, anthemn, setAnthemn, total, setSlide } =
    useContext(AnthemnsContext);
  const { index } = anthemn;

  const moveToNextAnthemn = () => {
    const i = Math.min(index + 1, total - 1);
    const anthemnToGo = anthemns[i];

    setAnthemn(anthemnToGo);
    setSlide(anthemnToGo.slides[0]);

    return anthemnToGo;
  };

  const moveToPrevAnthemn = () => {
    const i = Math.max(index - 1, 0);
    const anthemnToGo = anthemns[i];

    setAnthemn(anthemnToGo);
    setSlide(anthemnToGo.slides[0]);

    return anthemnToGo;
  };

  const moveAnthemn = (inc = 1) => {
    return inc > 0 ? moveToNextAnthemn() : moveToPrevAnthemn();
  };

  return {
    moveToNextAnthemn,
    moveToPrevAnthemn,
    moveAnthemn,
  };
}
