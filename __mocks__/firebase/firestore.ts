
export const getFirestore = jest.fn(() => ({}));

export const collection = jest.fn(() => ({}));

export const addDoc = jest.fn(() => Promise.resolve({ id: "test-id" }));
export const setDoc = jest.fn();
export const doc = jest.fn();

