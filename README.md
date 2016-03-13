#justproxy
Proxies local network requests from one port to another.
##Global usage:
``` justproxy -p 12345 ```

Proxy starts on 8080 port and sends any incoming http requests to `http://localhost:12345`.

---

``` justproxy -s 3434 -p 12345 ```

Proxy starts on 3434 port and do the same job.

---

``` justproxy -p 12345 --verbose ```

To log all incoming requests to the console.

##Local usage:
```js
require('justproxy')({
  port: 12345,    // Port to forward requests to
  self: 5555,     // Port to start a proxy server on (8080 by default)
  verbose: true   // To log all incoming requests (false by default)
});

```
