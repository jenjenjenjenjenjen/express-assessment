## BUG #1:
    GET /users
    returns more than just basic info
    includes email/phone unneccesarily

## BUG #2:
    POST /auth/login
    shuts down server entirely on wrong username/password, however still returns a token

## BUG #3:
    PATCH /users/:username
    does not allow logged in user to update profile
    does not throw 404 for not found user
    allows user to update data that should not be changed

## BUG #4
    middleware/auth authUser
    function decodes JWT but does not verify it

