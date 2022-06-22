import exp from "constants";
import { atom } from "recoil";
import { QuestionAnwerType } from "../../../@types/QuestionType";

export const optionSelectName = atom<string>({
  key: "selectNameAtom",
  default: "등록한 면접 후기",
});

export const stopModalAtom = atom<boolean>({
  key: "stopModalAtom",
  default: false,
});

export const textInterviewAtom = atom<QuestionAnwerType>({
  key: "textInterviewAtom",
  default: {
    answer: "안녕!!",
    voiceUrl: null,
    videoUrl: null,
    resetVoice: null,
  },
});

export const videoModalAtom = atom<boolean>({
  key: "videoModalAtom",
  default: false,
});

export const videoAtom = atom<string>({
  key: "videoAtom",
  default: null,
});
