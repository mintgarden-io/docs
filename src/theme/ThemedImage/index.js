/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from "react";
import clsx from "clsx";
import useIsBrowser from "@docusaurus/useIsBrowser";
import { useColorMode } from "@docusaurus/theme-common";
import styles from "./styles.module.css";
export default function ThemedImage(props) {
  const isBrowser = useIsBrowser();
  const { isDarkTheme } = useColorMode();
  const { sources, className, alt = "", ...propsRest } = props;
  const clientThemes = isDarkTheme ? ["dark"] : ["light"];
  const renderedSourceNames = isBrowser
    ? clientThemes // We need to render both images on the server to avoid flash
    : // See https://github.com/facebook/docusaurus/pull/3730
      ["light", "dark"];

  const srcToSrcSet = (src) => {
    const twox = src.replace(".png", "-2x.png");
    const threex = src.replace(".png", "-3x.png");
    return `${twox} 2x, ${threex} 3x`;
  };
  return (
    <>
      {renderedSourceNames.map((sourceName) => (
        <img
          key={sourceName}
          src={sources[sourceName]}
          srcSet={srcToSrcSet(sources[sourceName])}
          alt={alt}
          className={clsx(
            styles.themedImage,
            styles[`themedImage--${sourceName}`],
            className
          )}
          {...propsRest}
        />
      ))}
    </>
  );
}
