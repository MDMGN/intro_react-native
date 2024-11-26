type AjaxProps = {
  url: string
  init?: RequestInit
  cbSucces: (data: any) => void
  cbError: (error: any) => void
}

export const ajax = ({ url, cbError, cbSucces, init }: AjaxProps) => {
  fetch(url, init)
    .then((resp) =>
      resp.ok
        ? resp.json()
        : resp.json().then((jsonError) => Promise.reject(jsonError))
    )
    .then((data) => cbSucces(data))
    .catch((error) => cbError(error))
}
