import '@testing-library/jest-dom/extend-expect';
window.frames.parent.scrollTo = jest.fn();

jest.mock('@openmrs/esm-framework', () => ({
  ...jest.requireActual('@openmrs/esm-framework/mock'),
  age: jest.fn(),
}));
