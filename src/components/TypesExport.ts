export type stateSetsTypes ={
    setIsTrue?: React.Dispatch<React.SetStateAction<boolean>> ,
    isTrue?: boolean,
    setOpen?: React.Dispatch<React.SetStateAction<boolean>>,
    open?: boolean
};

export type userDashboard ={
    Clicks: number,
    LongUrl: string,
    ShortUrl: string
}
