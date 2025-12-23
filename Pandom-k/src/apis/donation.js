export const getDonations = async ({
  cursor = null,
  pageSize = 10,
}) => {
try {
  const query = `${cursor ? `cursor=${cursor}&` : ''}pageSize=${pageSize}`;
  const res = await fetch (`https://fandom-k-api.vercel.app/21-2/donations?${query}`);
  
  if (!res.ok) {
    throw new Error(`${res.status} 후원 데이터를 가져오는 데 실패했어요.`);
  }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error('후원 데이터를 가져오는 중 오류가 발생했어요:', error);
    throw error;
  }
};