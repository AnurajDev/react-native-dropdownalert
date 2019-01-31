import * as React from "react";

export type actionType = "automatic" | "programmatic" | "tap" | "pan" | "cancel";
export type DropdownAlertType = "info" | "warn" | "error" | "custom" | "success";

export interface OnCloseReturnType {
  type: DropdownAlertType;
  title: string;
  message: string;
  action: actionType;
}

export interface DropdownAlertProps {
  imageSrc?: string | number;
  infoImageSrc?: string | number;
  warnImageSrc?: string | number;
  errorImageSrc?: string | number;
  successImageSrc?: string | number;
  cancelBtnImageSrc?: string | number;
  infoColor?: string;
  warnColor?: string;
  errorColor?: string;
  successColor?: string;
  closeInterval?: number;
  startDelta?: number;
  endDelta?: number;
  wrapperStyle?: object | number;
  containerStyle?: object | number;
  safeAreaStyle?: object | number;
  titleStyle?: object | number;
  messageStyle?: object | number;
  imageStyle?: object | number;
  cancelBtnImageStyle?: object | number;
  titleNumOfLines?: number;
  messageNumOfLines?: number;
  onClose?(data: OnCloseReturnType): void;
  onCancel?(): void;
  showCancel?: boolean;
  tapToCloseEnabled?: boolean;
  panResponderEnabled?: boolean;
  replaceEnabled?: boolean;
  translucent?: boolean;
  useNativeDriver?: boolean;
  activeStatusBarStyle?: string;
  activeStatusBarBackgroundColor?: string;
  inactiveStatusBarStyle?: string;
  inactiveStatusBarBackgroundColor?: string;
  updateStatusBar?: boolean;
  elevation?: number;
  zIndex?: number;
  sensitivity?: number;
  defaultContainer?: object | number;
  defaultTextContainer?: object | number;
  renderImage?(props: DropdownAlertProps, state: { type: string }): React.ReactNode;
  renderCancel?(props: DropdownAlertProps, state: { type: string }): React.ReactNode;
  renderTitle?(props: DropdownAlertProps, state: { type: string }): React.ReactNode;
  renderMessage?(props: DropdownAlertProps, state: { type: string }): React.ReactNode;
  testID?: string;
  accessible?: boolean;
  accessibilityLabel?: string;
  titleTextProps?: object;
  messageTextProps?: object;
}

export default class DropdownAlert extends React.Component<DropdownAlertProps> {
  alertWithType(type: DropdownAlertType, title: string, message: string, interval?: number): void;
  closeDirectly(): void;
}
