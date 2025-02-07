export function formatPrice(price: number) {
  return Intl.NumberFormat('fa-IR', {
    style: 'decimal',
    currencyDisplay: 'symbol',
  }).format(price)
}

export function formatDate(data: Date | string) {
  return new Date(data).toLocaleDateString('fa-IR')
}
