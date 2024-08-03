export interface signupTypes {
  setIsTrue: React.Dispatch<React.SetStateAction<boolean>>;
  isTrue?: boolean;
}

export type openModalType = {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  open?: boolean;
};

export type firebaseConfigtypes = {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
  measurementId: string;
};

export interface detailsdDatatypeItem {
  originalUrl: string;
  shortUrl: string;
  clicks: number;
  date: string;
}

export type userDashboard = {
  Clicks: number;
  LongUrl: string;
  ShortUrl: string;
  handleeachData: () => void;
  date: string;
  urlCode: string;
  onDelete: () => void;
  setOriginalCustomiseValue: React.Dispatch<React.SetStateAction<string>>;
  setCustomisableLongUrl: React.Dispatch<React.SetStateAction<string>>;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
};

export type parentUserDashboardUrlType = {
  originalUrl: string;
  shortUrl: string;
  clicks: number;
  urlCode: string;
  date: string;
  handleeachData?: () => void;
};

export type CustomizeUrlTypes = {
  originalCode: string;
  currentShortUrl: string;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  onUpdate?: () => void;
};

type pieDataType = {
  name: string;
  value: number;
};

export type piechatype = {
  data01: pieDataType[];
  size: number;
};
