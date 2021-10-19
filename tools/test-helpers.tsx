import React from 'react';
import { SWRConfig } from 'swr';
import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';

const swrWrapper = ({ children }) => {
  return (
    <SWRConfig
      value={{
        dedupingInterval: 0,
        provider: () => new Map(),
      }}>
      {children}
    </SWRConfig>
  );
};

export const swrRender = (ui, options?) => render(ui, { wrapper: swrWrapper, ...options });

// Custom matcher that queries elements split up by multiple HTML elements by text
export function getByTextWithMarkup(text: RegExp | string) {
  return screen.getByText((content, node) => {
    const hasText = (node: Element) => node.textContent === text || node.textContent.match(text);
    const childrenDontHaveText = Array.from(node.children).every((child) => !hasText(child as HTMLElement));
    return hasText(node) && childrenDontHaveText;
  });
}

export function waitForLoadingToFinish() {
  return waitForElementToBeRemoved(() => [...screen.queryAllByRole(/progressbar/i)], {
    timeout: 4000,
  });
}
