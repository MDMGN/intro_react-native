const formatDate = () => {
  return new Intl.DateTimeFormat("es-ES", {
    dateStyle: "long",
    timeStyle: "medium",
  }).format(date)
}

export { formatDate }
