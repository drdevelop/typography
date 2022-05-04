import React from 'react';
// import {
//   Props,
//   Ellipsis,
// } from '../';

export interface Ellipsis {
  /**
   * 是否识别换行符
   * @default false
   */
  recognizeLineBreaks?: boolean;
  /**
   * 当超出多少行省略
   */
  rows: number;
  /**
   * 省略占位
   */
  suffix?: React.ReactNode | string;
  /**
   * 是否启用展开功能
   * @default false
   */
  expandable?: boolean;
  /**
   * 设置展开按钮样式
   */
  expandStyle?: React.CSSProperties;
  /**
   * 是否启用收起功能
   * @default false
   */
  packupable?: boolean;
  /**
   * 设置收起按钮样式
   */
  packupStyle?: React.CSSProperties;
}

export interface Props {
  /** [ellipsisConfig](#api-ellipsisconfig) */
  ellipsis: Ellipsis;
  /* 文本省略时，点击文本框回调 */
  onClickWhenEllipsis?: (event: React.MouseEvent) => void;
  /** 要计算省略的文本 */
  children: string;
}

export const ParagraphProps: React.FC<Props> = () => null;
export const EllipsisConfig: React.FC<Ellipsis> = () => null;
