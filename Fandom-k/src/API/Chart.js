export const getCharts = async ({
  gender = 'female',
  cursor = null,
  pageSize = 10,
}) => {
  try {
    const query = `${cursor ? `cursor=${cursor}&` : ''}gender=${gender}&pageSize=${pageSize}`;
    const res = await fetch(`https://fandom-k-api.vercel.app/21-2/charts/${gender}?${query}`);

    if (!res.ok) {
      throw new Error(`${res.status} 차트 데이터를 가져오는 데 실패했어요.`);
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error('차트 데이터를 불러오는 중 오류가 발생했어요:', error);
    throw error;
  }
};

export const voteIdol = async ({ idolId }) => {
  const res = await fetch(
    `https://fandom-k-api.vercel.app/21-2/votes`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ idolId }),
    }
  );

  if (!res.ok) {
    const errorData = await res.json();
    console.error('투표 서버 에러:', errorData);
    throw new Error(errorData.message || '투표에 실패했습니다.');
  }
  return await res.json();
};