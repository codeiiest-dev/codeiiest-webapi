<img src="https://socialify.git.ci/codeiiest-dev/codeiiest-webapi/image?description=1&font=Raleway&forks=1&language=1&owner=1&pattern=Circuit%20Board&stargazers=1&theme=Dark" alt="codeiiest-webapi" width="640" height="320" />

### Endpoints

<span>\*</span> denotes required fields.
? denotes maybe undefined.

**Every Request should have `Content-Type: application/json`**

<table>
<tr>
<td>Index</td>
<td>Key</td>
<td>Value</td>
</tr>
<tr>
<td>1.</td>
<td>METHOD</td>
<td>POST</td>
</tr>
<tr>
<td></td>
<td>ROUTE</td>
<td>/auth/register</td>
</tr>
<tr>
<td></td>
<td>REQ BODY</td>
<td>

```json
json
{
    "phone*":     "string",
    "password*":  "string",
    "email":     "string",
    "name":      "string",
}
```

</td>
</tr>
<tr>
<td></td>
<td>RES BODY</td>
<td>

```json
json
{
    "prettyMessage":    "string",
    "status":           "number",
    "data": {
            "accessToken":    "string",
            "userId":         "string",
            "refreshToken":   "string",
        },
    "success": "boolean",
}
```

</td>
</tr>
<tr>
<td></td>
<td>STATUS CODES</td>
<td>

```json
{
  "409": "Already Registered",
  "201": "User registered successfully",
  "501": "Internal Server Error"
}
```

</td>
</tr>
<td>2.</td>
<td>METHOD</td>
<td>POST</td>
</tr>
<tr>
<td></td>
<td>ROUTE</td>
<td>/auth/login</td>
</tr>
<tr>
<td></td>
<td>REQ BODY</td>
<td>

```json
json
{
    "phone*":     "string",
    "password*":  "string",
}
```

</td>
</tr>
<tr>
<td></td>
<td>RES BODY</td>
<td>

```json
json
{
    "prettyMessage":    "string",
    "status":           "number",
    "data?": {
            "accessToken":    "string",
            "userId":         "string",
            "refreshToken":   "string",
        },
    "success": "boolean",
}
```

</td>
</tr>
<tr>
<td></td>
<td>STATUS CODES</td>
<td>

```json
{
  "200": "User Authorised",
  "401": ["User not registered", "User not Authorised"],
  "501": "Internal Server Error"
}
```

</td>
</tr>
<td>3.</td>
<td>METHOD</td>
<td>POST</td>
</tr>
<tr>
<td></td>
<td>ROUTE</td>
<td>/auth/refresh-token</td>
</tr>
<tr>
<td></td>
<td>REQ HEADERS</td>
<td>

```json
    "access-token*":   "string",
    "user-id*":        "string",
```

</td>
</tr>
<tr>
<td></td>
<td>REQ BODY</td>
<td>

```json
json
{
    "refreshToken*":     "string",
}
```

</td>
</tr>
<tr>
<td></td>
<td>RES BODY</td>
<td>

```json
json
{
    "prettyMessage":    "string",
    "status":           "number",
    "data": {
            "accessToken":    "string",
            "userId":         "string",
            "refreshToken":   "string",
        },
    "success": "boolean",
}
```

</td>
</tr>
<tr>
<td></td>
<td>STATUS CODES</td>
<td>

```json
{
  "205": "OK",
  "400": "Invalid",
  "405": "Refresh Token Expire",
  "501": "Internal Server Error"
}
```

</td>
</tr>

<td>4.</td>
<td>METHOD</td>
<td>POST</td>
</tr>
<tr>
<td></td>
<td>ROUTE</td>
<td>/auth/logout</td>
</tr>
<tr>
<td></td>
<td>REQ HEADERS</td>
<td>

```json
    "access-token*":   "string",
    "user-id*":        "string",
```

</td>
</tr>
<tr>
<tr>
<td></td>
<td>REQ BODY</td>
<td>

```json
json
{}
```

</td>
</tr>
<tr>
<td></td>
<td>RES BODY</td>
<td>

```json
json
{
    "prettyMessage":    "string",
    "status":           "number",
    "success":          "boolean",
}
```

</td>
</tr>
<tr>
<td></td>
<td>STATUS CODES</td>
<td>

```json
{
  "200": "Logged Out",
  "501": "Internal Server Error"
}
```

</td>
</tr>
<td>5.</td>
<td>METHOD</td>
<td>GET</td>
</tr>
<tr>
<td></td>
<td>ROUTE</td>
<td>/user/get</td>
</tr>
<tr>
<tr>
<td></td>
<td>REQ BODY</td>
<td>

```json
json
{
    "phone*":   "string"
}
```

</td>
</tr>
<tr>
<td></td>
<td>RES BODY</td>
<td>

```json
json
{
    "prettyMessage":    "string",
    "status":           "number",
    "success":          "boolean",
    "phone*":           "string",
    "data": {
        "email":        "string",
        "links": {
                "github":       "string",
                "linkedin":     "string",
                "codeforces":   "string",
                "codechef":     "string"
            },
        "name":         "string",
        "phone":        "string",
        "status":       "string",
        "updatedAt":    "number",
        "userId":       "string"
    }
}
```

</td>
</tr>
<tr>
<td></td>
<td>STATUS CODES</td>
<td>

```json
{
  "200": "Found",
  "404": "User Not Found",
  "501": "Internal Server Error"
}
```

</td>
</tr>
<td>4.</td>
<td>METHOD</td>
<td>POST</td>
</tr>
<tr>
<td></td>
<td>ROUTE</td>
<td>/user/update</td>
</tr>
<tr>
<td></td>
<td>REQ HEADERS</td>
<td>

```json
    "access-token*":   "string",
    "user-id*":        "string",
```

</td>
</tr>
<tr>
<tr>
<td></td>
<td>REQ BODY</td>
<td>

```json
json
{
    "phone*":       "string", // Except phone, any key send will be updated
    "email":        "string",
    "links": {
        "github":       "string",
        "linkedin":     "string",
        "codeforces":   "string",
        "codechef":     "string"
        },
    "name":         "string",
    "status":       "string",
}
```

</td>
</tr>
<tr>
<td></td>
<td>RES BODY</td>
<td>

```json
json
{
    "prettyMessage":    "string",
    "status":           "number",
    "success":          "boolean",
}
```

</td>
</tr>
<tr>
<td></td>
<td>STATUS CODES</td>
<td>

```json
{
  "200": "Updated",
  "404": "User Not Found",
  "501": "Internal Server Error"
}
```

</td>
</tr>

</table>
