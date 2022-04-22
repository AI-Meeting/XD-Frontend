import { useRecoilValue } from "recoil";
import { optionSelectName } from "../../../lib/module/atom/interview";
import { grayTextColor, mainColor } from "../../../styles/color";

type Props = {
  optionName: string;
  optionClickHandle: (option) => void;
};

const ControllOptionText = ({ optionName, optionClickHandle }: Props) => {
  const selectedName = useRecoilValue(optionSelectName);

  return (
    <span
      onClick={() => optionClickHandle(optionName)}
      style={{
        color:
          selectedName === optionName ? `${mainColor}` : `${grayTextColor}`,
      }}
    >
      {optionName}
    </span>
  );
};

export default ControllOptionText;
