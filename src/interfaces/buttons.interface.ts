export interface IDefaultButton {
  text: string;
  onClick: () => void;
}

export interface IDefaultButtonWithIcon extends IDefaultButton {
    startIcon?: React.ReactNode;
    endIcon?: React.ReactNode;
  }
  