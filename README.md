# Uuid

## install

```
npm install --save bc-uuid babel-polyfill
```

> Note: `babel-polyfill` is required before any of the `uuid` stuff

## Usage

**Uuid.generate()**
```javascript
Uuid.generate() // will return a uuid

/* UUID STRUCTURE
 *
 *  x = acceptable character /[0-9a-z]/
*
 *  |36--------------------------------|
 *  |8-----| |4-| |4-| |4-| |12--------|
 *  xxxxxxxx-1xxx-bcxx-xxxx-xxxxxxxxxxxx
 *  ^        ^    ^
 *  |        |    '- mark "bc"
 *  |        |
 *  |        '- uuid version
 *  |
 *  '- Timestamp (epoch in base36)
 */
```
