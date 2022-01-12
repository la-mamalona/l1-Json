const main = require('./index');

test('name attr is found', ()=>{
  expect(main().name).toBeDefined(); 
});

test('age attr is found', ()=>{
  expect(main().age).toBeDefined(); 
});

test('gender attr is found', ()=>{
  expect(main().gender).toBeDefined(); 
});

test('colors array is found', ()=>{
  expect(Array.isArray(main().colors)).toBeTruthy(); 
});

test('colors array has at least 3 elements', ()=>{
  expect(main().colors.length).toBeGreaterThanOrEqual(3); 
});

test('address attr is found', ()=>{
  expect(main().address).toBeDefined(); 
});

test('address attr has streer attr', ()=>{
  expect(main().address.street).toBeDefined(); 
});

test('classes array is found', ()=>{
  expect(Array.isArray(main().classes)).toBeTruthy();    
});

test('classes array has at least 2 elements', ()=>{
  expect(main().classes.length).toBeGreaterThanOrEqual(2); 
});

test('classes array has two object with name attr', ()=>{
  expect(main().classes[0].name).toBeDefined(); 
  expect(main().classes[1].name).toBeDefined(); 
});
