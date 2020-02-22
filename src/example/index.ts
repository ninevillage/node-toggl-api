import Toggl from '..'

const { TOGGL_USERNAME, TOGGL_PASSWORD } = process.env
if (!TOGGL_USERNAME || !TOGGL_PASSWORD) {
  console.error('missing toggl username or password')
  process.exit(1)
}

// const toggl = Toggl.withAPIToken('a0760864b251e3f9512e8ff02381c308')
const toggl = Toggl.withEmailAndPassword(TOGGL_USERNAME, TOGGL_PASSWORD)
toggl
  .me()
  .then(user => console.log(user))
  .catch(console.error)
