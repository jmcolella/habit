## Test
```jsx
  <Grid.Row>
    <Grid.Column columns={6}>
      <div style={{ background: 'red', padding: '24px' }}>Hello</div>
    </Grid.Column>
     <Grid.Column columns={6} rowSpan={2}>
      <div style={{ background: 'blue', padding: '24px' }}>World</div>
    </Grid.Column>
    <Grid.Column columns={6}>
      <div style={{ background: 'red', padding: '24px' }}>Hello</div>
    </Grid.Column>
    <Grid.Column columns={3}>
      <div style={{ background: 'red', padding: '24px' }}>Hello</div>
    </Grid.Column>
    <Grid.Column columns={7} offset={5} rowSpan={2}>
      <div style={{ background: 'red', padding: '24px' }}>Hello</div>
    </Grid.Column>
    <Grid.Column columns={5}>
      <div style={{ background: 'purple', padding: '24px' }}>Hello</div>
    </Grid.Column>
    <Grid.Column>
      <div style={{ background: 'purple', padding: '24px' }}>Hello</div>
    </Grid.Column>
  </Grid.Row>
```