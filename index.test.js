const main = require('./index');

test('computer_brand attr is found', ()=>{
  expect(main().computer_brand).toBeDefined(); 
});

test('is_windows attr is found', ()=>{
  expect(main().is_windows).toBeDefined(); 
});

test('materials array is found', ()=>{
  expect(Array.isArray(main().materials)).toBeTruthy(); 
});

test('materials array has at least 2 elements', ()=>{
  expect(main().materials.length).toBeGreaterThanOrEqual(2); 
});

test('os_info attr is found', ()=>{
  expect(main().os_info).toBeDefined(); 
});

test('os_info attr has kernel_version attr', ()=>{
  expect(main().os_info.kernel_version).toBeDefined(); 
});

test('apps_installed array is found', ()=>{
  expect(Array.isArray(main().apps_installed)).toBeTruthy();    
});

test('apps_installed array has at least 2 elements', ()=>{
  expect(main().apps_installed.length).toBeGreaterThanOrEqual(2); 
});

test('apps_installed array has two object with name attr', ()=>{
  expect(main().apps_installed[0].name).toBeDefined(); 
  expect(main().apps_installed[1].name).toBeDefined(); 
});
