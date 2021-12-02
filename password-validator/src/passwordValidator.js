export function passwordCheck (pass) {
  let regex = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[_]).{9,32}$/
  
  if (!regex.test(pass)) {
    return false
  }
  return true
}