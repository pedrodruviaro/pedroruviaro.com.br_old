export function usePostDate(date: Date | Ref<Date>) {
  const sanitizedDate = toValue(date)

  return new Date(sanitizedDate).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  })
}
