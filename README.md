Timestamp Microservice
=========================

## Live website: https://time-stampfcc.glitch.me/

This is a back-end practice project with node.js and express.js framework.

### User stories:
- I can pass a string as a parameter, and it will check to see whether that string contains either a unix timestamp or a natural language date (example: January 1, 2016)
- If it does, it returns both the Unix timestamp and the natural language form of that date.
- If it does not contain a date or Unix timestamp, it returns null for those properties.

### Example:

```
https://time-stampfcc.glitch.me/December%2015,%202015

https://time-stampfcc.glitch.me/December 15, 2015

https://time-stampfcc.glitch.me/1450137600
```

### Output

Both URL inputs will return the same result
```
{ "unix": 1450137600, "natural": "December 15, 2015" }
```

### Special Case:
If the date given is not a valid date, the output will be `null` 
```
{ "unix": null, "natural": null }
```
-------------------
ヾ(｡･ω･｡)