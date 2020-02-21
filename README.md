# @ninevillage/toggl-api

Most of us @ninevillage using toggl to track our times.
So we created a Node.js module for their api (>^.^)>

![Tests](https://github.com/naxmefy/node-toggl-api/workflows/Tests/badge.svg)
![Release](https://github.com/naxmefy/node-toggl-api/workflows/Release/badge.svg)

## installation

```bash

$ npm i @ninevillage/toggl-api

```

## usage

### Client Setup

```typescript
import { Toggl } from '@ninevillage/toggl-api'

// email, password
const toggl = Toggl.withEmailAndPassword('<email>', '<password>')

// api_token
const toggl = Toggl.withAPIToken('<api_token>')
```

### Example SignUp

```typescript
import { UTC } from '@ninevillage/timezones'

const user = await toggl.signup({
  email: 'user@toggl.com',
  password: 'StrongPassword',
  timezone: UTC.zone,
  created_with: '@ninevillage/toggl-api', // can be anything, but required
})
```

### Example Reset Api Token

```typescript
// if current instance is working with api_token
// the new token will be saved in the current instance
const newToken = await toggl.resetAPIToken()
const user = await toggl.me() // is still working

// the new token will not be saved in the current instance
// if the current instance uses email+password - this does not get affected by
const newToken = await toggl.resetAPIToken(false)
const user = await toggl.me() // may throw an exception (unauthencated|unknown api_token)
```

### Example User Call

```typescript
// user data
const user = await toggl.user()

// update user
const updatedUser = await toggle.updateUser({
  fullname: 'John Doe',
  email: 'john@doe.com',
  // ...
})
```
