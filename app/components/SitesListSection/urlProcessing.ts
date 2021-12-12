import Site from './types'

export const inputStringCleanup = (rawInput: string) : string => {
  return rawInput = rawInput.toLowerCase().trim().split(" ")[0]
}

const processUrlInput = (rawUrlInput: string) : Site | null => {
  // prepend 'https://'
  const url = 'https://' + rawUrlInput;
  // attempt to GET request the provided URL.
  return null
}

export default processUrlInput