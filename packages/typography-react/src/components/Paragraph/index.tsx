import React, { useCallback, useEffect, useState } from 'react';
import formatWithEllipsis from '@typography-org/native';

export interface Ellipsis {
  /**
   * if recognize line breaks
   * @default false
   */
  recognizeLineBreaks?: boolean;
  /**
   * ellipsis more than how many lines
   */
  rows: number;
  /**
   * ellipsis occupy
   */
  suffix?: React.ReactNode | string;
  /**
   * enable expand
   * @default false
   */
  expandable?: boolean;
  /**
   * expand text style
   */
  expandStyle?: React.CSSProperties;
  /**
   * packup element or string
   */
  packup?: React.ReactElement | string;
  /**
   * enable packup
   * @default false
   */
  packupable?: boolean;
  /**
   * packup text style
   */
  packupStyle?: React.CSSProperties;
}

export interface Props {
  /** [ellipsisConfig](#api-ellipsisconfig) */
  ellipsis: Ellipsis;
  /**
   * when the omission is triggered, click the callback of the text box
   */
  onClickWhenEllipsis?: (event: React.MouseEvent) => void;
  /** will compute text */
  children: string;
}

const Paragraph: React.FC<Props> = props => {
  const { ellipsis = { } as Ellipsis } = props;
  const {
    expandable,
    expandStyle,
    packup: packupEl,
    packupable,
    packupStyle,
    recognizeLineBreaks = false,
    rows,
    suffix: extraSuffix
  } = ellipsis;

  const suffix = extraSuffix
    ? extraSuffix
    : expandable
      ? '展开'
      : null;

  const packup = packupEl || '收起';

  const [displayText, setDisplayText] = useState<string>(null);
  const [displayTextBeforeExpand, setDisplayTextBeforeExpand] = useState<string>(null);
  const [suffixWidth, setSuffixWidth] = useState<number>(!!suffix ? null : 0);
  const [containerInfo, setContainerInfo] = useState<any>(null);

  const suffixRefCb = useCallback((dom: HTMLSpanElement) => {
    if (!dom) return null;
    setSuffixWidth(dom.offsetWidth);
  }, []);

  const containerRefCb = useCallback((dom: HTMLDivElement) => {
    if (!dom) return null;
    setContainerInfo({
      width: dom.offsetWidth,
      fontSize: +getComputedStyle(dom).fontSize.replace('px', ''),
      fontFamily: getComputedStyle(dom).fontFamily,
    });
  }, [])

  useEffect(() => {
    if (suffixWidth === null) return;
    if (containerInfo === null) return;
    console.log('suffix width', suffixWidth);
    const { width, fontSize, fontFamily } = containerInfo;
    const newDisplayText = formatWithEllipsis(props.children, {
      length: width * rows,
      lines: rows,
      fontSize,
      ellipsisWidth: suffixWidth,
      fontFamily,
    }, {
      recognizeLineBreaks,
    });
    setDisplayText(newDisplayText);
    setDisplayTextBeforeExpand(newDisplayText);
  }, [suffixWidth, containerInfo])

  const onExpand = () => {
    if (!expandable) return;
    setDisplayText(props.children);
  }

  const onPackup = () => {
    if (!packupable) return;
    setDisplayText(displayTextBeforeExpand);
  }

  return (
    <div
      style={{ visibility: suffixWidth === null ? 'hidden' : 'initial' }}
      ref={containerRefCb}
      onClick={
        displayText !== props.children && !!props.onClickWhenEllipsis
          ? props.onClickWhenEllipsis
          : undefined
      }
    >
      {
        !!displayText &&
        (
          recognizeLineBreaks
            ? <span dangerouslySetInnerHTML={{ __html: displayText.replace(/\n/g, '<br />').replace(/\\n/g, '<br />') }} />
            : <span>{displayText}</span>
        )
      }

      {
        !!suffix &&
        <span
          ref={suffixRefCb}
          style={{
            visibility: !displayText ? 'hidden' : 'initial',
            display: displayText === props.children ? 'none' : 'initial',
            color: '#7395f7',
            cursor: 'pointer',
            ...expandStyle,
          }}
          onClick={onExpand}
        >
          {suffix}
        </span>
      }

      {
        packupable && displayTextBeforeExpand &&
        <div
          style={{
            display: displayText === displayTextBeforeExpand ? 'none' : 'block',
            color: '#7395f7',
            cursor: 'pointer',
            textAlign: 'right',
            ...packupStyle,
          }}
          onClick={onPackup}
        >
          {packup}
        </div>
      }
    </div>
  )
}

export default Paragraph;
