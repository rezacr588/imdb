import { FC } from "react";
import {
  BaseInput,
  BaseInputContainer,
  BaseLabel,
  Icon,
  WithIcon,
} from "./style";

interface InputInterface {
  icon?: string;
  label?: string;
  name: string;
  id: string;
  type: string;
}

export const Input: FC<InputInterface> = ({ name, id, icon, label, type }) => {
  return (
    <BaseInputContainer>
      <BaseLabel htmlFor={id}>{label}</BaseLabel>
      {icon ? (
        <WithIcon>
          <BaseInput type={type} name={name} id={id} />
          <Icon src={icon} />
        </WithIcon>
      ) : (
        <BaseInput type={type} name={name} id={id} />
      )}
    </BaseInputContainer>
  );
};
