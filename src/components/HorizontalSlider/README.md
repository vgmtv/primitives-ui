```js
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
const children = nums.map(num => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minWidth: 200,
      height: 100,
      background: 'grey',
      margin: 5,
      border: '1px solid yellow',
      color: 'white',
      fontSize: '2em',
    }}
  >
    {num}
  </div>
))
;<div style={{minWidth: '100%'}}>
  <HorizontalSlider style={{border: '1px solid red'}}>
    {children}
  </HorizontalSlider>
</div>
```
