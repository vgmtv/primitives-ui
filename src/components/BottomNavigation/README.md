```js
<BottomNavigation />
```

Combine:

```js
const s = {
  padding: 0,
  width: 320,
  height: 568,
  position: 'relative',
}
const bottom = {
  position: 'absolute',
  bottom: 0,
  left: 0,
}
;<div style={s}>
  <Background style={s} width={320} />
  <BottomNavigation style={bottom} />
</div>
```
