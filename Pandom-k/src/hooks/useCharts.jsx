import { useState, useCallback, useEffect } from 'react';
import { getCharts } from '../apis/chart';

export const useCharts = (gender) => {
  const [charts, setCharts] = useState([]);
  const [cursor, setCursor] = useState(null);
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // PC 10개 태블릿 모바일 5개 
  const getPageSize = () => {
    return window.innerWidth >= 1024 ? 10 : 5;
  };

  const loadData = useCallback(async (currentCursor = null) => {
    setIsLoading(true);
    setError(null);

    const pageSize = getPageSize();

    try {
      const res = await getCharts({
        gender,
        cursor: currentCursor,
        pageSize, 
      });

      if (res) {
        const { idols, nextCursor } = res;

        setCharts((prev) => 
          currentCursor ? [...prev, ...idols] : idols
        );
        
        setCursor(nextCursor);
        setHasMore(!!nextCursor);
      }
    } catch (err) {
      setError(err);
      console.error("차트 데이터 로딩 실패:", err);
    } finally {
      setIsLoading(false);
    }
  }, [gender]);

  useEffect(() => {
    setCursor(null);
    setHasMore(true);
    loadData(null);
  }, [gender, loadData]);

  const loadMore = () => {
    if (isLoading || !hasMore) return;
    loadData(cursor);
  };

  return {
    charts,
    loadMore,
    hasMore,
    isLoading,
    error,
  };
};