const shortenUrl = async (longUrl: string, token: string, groupGuid: string, shortenUrlApi: string): Promise<{ shortUrl: string | null, error: string | null }> => {
  try {
    const response = await fetch(shortenUrlApi, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        group_guid: groupGuid,
        domain: "bit.ly",
        long_url: longUrl,
      }),
    });

    if (response.ok) {
      const data = await response.json();
      return { shortUrl: data.link, error: null };
    } else {
      const errorData = await response.json();
      return { shortUrl: null, error: errorData.message };
    }
  } catch (error: any) {
    return { shortUrl: null, error: error.message };
  }
};

export default shortenUrl;
