export const formatCurrency = (value: number) =>
  new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
  }).format(value);

export const getDiscountPercent = (newPrice: number, oldPrice: number) => {
  return Math.round(((oldPrice - newPrice) / oldPrice) * 100);
};

export function timeDifferenceToString(boughtAt: string) {
  const now: number = new Date().getTime();
  const boughtDate: number = new Date(boughtAt).getTime();
  const diffInMs = now - boughtDate;
  const diffInDays = diffInMs / (1000 * 60 * 60 * 24);

  if (diffInDays <= 30) {
    return 'Đã dùng khoảng 1 tháng';
  } else if (diffInDays <= 365) {
    const months = Math.round(diffInDays / 30);
    return `Đã dùng khoảng ${months} tháng`;
  } else {
    const day = new Date(boughtAt).getUTCDate();
    const month = new Date(boughtAt).getUTCMonth() + 1; // getUTCMonth() returns 0-11
    const year = new Date(boughtAt).getUTCFullYear();
    return `Đã mua vào ngày ${day}/${month}/${year}`;
  }
}

export function formatToK(num: number) {
  if (num >= 1000) {
    return (num / 1000).toFixed(1).replace('.', ',') + 'k';
  }
  return num.toString();
}
