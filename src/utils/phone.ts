export const formatPhone = (phone: string): string => {
  const phoneReversed = phone.replaceAll('+', '').split('').reverse()
  const trailingPhone = phoneReversed.slice(0,4).reverse().join('')
  const middlePhone = phoneReversed.slice(4,8).reverse().join('')
  const leadingPhone = phoneReversed.slice(8).reverse().join('')
  return `+${leadingPhone} ${middlePhone} ${trailingPhone}`
}
