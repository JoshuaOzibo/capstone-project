export type stateSetsTypes = {
  setIsTrue?: React.Dispatch<React.SetStateAction<boolean>>;
  isTrue?: boolean;
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  open?: boolean;
};

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
  originalCode?: string;
  currentShortUrl?: string;
  setShowModal?: React.Dispatch<React.SetStateAction<boolean>>;
  onUpdate?: () => void;
};
