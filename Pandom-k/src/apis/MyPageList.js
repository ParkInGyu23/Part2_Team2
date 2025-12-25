export const getList = async ({ cursor = null, pageSize = 20, keyword = '' }) => {
  try {
    const query = `${cursor ? `cursor=${cursor}&` : ''}pageSize=${pageSize}${keyword ? `&keyword=${keyword}` : ''}`;
    const res = await fetch(`https://fandom-k-api.vercel.app/21-2/idols?${query}`);

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
